import { getPersistentSiteData } from '../../utilities/'
import emitEvent from '../emit-event'

const addArcadeEventListener = (config) => {
    const arcadeProperties = [
        { evarNumber: 40, name: 'clientId' },
        { evarNumber: 41, name: 'gameId' },
        { evarNumber: 42, name: 'geo' },
        { evarNumber: 43, name: 'linkId' },
        { evarNumber: 44, name: 'referer' },
        { evarNumber: 45, name: 'userAgent' },
        { evarNumber: 46, name: 'gameName' }
    ]

    window.addEventListener('message', (event) => {
        const arcadeData = {}
        const eventData = event.data
        let messageIsValid = false

        arcadeProperties.forEach(property => {
            if (eventData[`${property.name}`]) {
                messageIsValid = true
            }

            arcadeData[`eVar${property.evarNumber}`] = eventData[`${property.name}`]
        })

        if (messageIsValid) {
            const arcadeEventData = {
                ...arcadeData,
                ...getPersistentSiteData()
            }

            emitEvent({
                debug: config.debug,
                eventData: arcadeEventData,
                eventName: 'Arcade'
            })
        }
    })
}

export default addArcadeEventListener
