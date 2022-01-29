import { getPersistentSiteData } from '../../utilities/'
import emitEvent from '../emit-event'

const setPingEvents = (config) => {
    const {
        timeOnSiteInterval,
        timeOnSiteCustomPings,
        timeOnSiteLimit
    } = config

    let timeOnSite = 0

    const intervalId = setInterval(() => {
        timeOnSite += timeOnSiteInterval

        const pingData = {
            ...getPersistentSiteData(),
            prop75: `${timeOnSite}+`
        }

        emitEvent({
            debug: config.debug,
            eventData: pingData,
            eventName: 'Engagement Ping'
        })

        if (timeOnSite >= timeOnSiteLimit) {
            clearInterval(intervalId)
        }
    }, timeOnSiteInterval * 1000)

    timeOnSiteCustomPings.forEach(timeoutInSecconds => {
        setTimeout(() => {
            const pingData = {
                ...getPersistentSiteData(),
                prop75: `${timeoutInSecconds}+`
            }

            emitEvent({
                debug: config.debug,
                eventData: pingData,
                eventName: 'Engagement Ping'
            })
        }, timeoutInSecconds * 1000)
    })
}

export default setPingEvents
