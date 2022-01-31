import { getPersistentSiteData } from '../../utilities/'
import emitEvent from '../emit-event'
import emitVideoData from './emit-video-data'

const addVideoEventListener = (config) => {
    const videoProperties = [
        { evarNumber: 60, name: 'videoName' },
        { evarNumber: 61, name: 'videoId' },
        { evarNumber: 62, name: 'videoSecondsWatched' },
        { evarNumber: 63, name: 'videoCurrentTime' },
        { evarNumber: 64, name: 'videoSecondsLength' },
        { evarNumber: 65, name: 'videoIsMuted' }
    ]

    const videoEvents = [
        { eventNumber: 10, name: 'videoAvailable' },
        { eventNumber: 11, name: 'videoStarted' },
        { eventNumber: 12, name: 'video25' },
        { eventNumber: 13, name: 'video50' },
        { eventNumber: 14, name: 'video75' },
        { eventNumber: 15, name: 'videoCompleted' },
        { eventNumber: 16, name: 'videoPaused' },
        { eventNumber: 17, name: 'videoResumed' }

    ]

    window._wq = window._wq || []
    
    window._wq.push({
        ...emitVideoData
    })

    window.addEventListener('video', (event) => {
        const videoData = {}
        const eventData = event.detail
        let messageIsValid = false

        videoProperties.forEach(property => {
            if (eventData[`${property.name}`]) {
                messageIsValid = true
            }

            videoData[`eVar${property.evarNumber}`] = eventData[`${property.name}`]
        })

        videoEvents.forEach(property => {
            if (eventData.eventType === property.name) {
                messageIsValid = true
                videoData.events = `event${property.eventNumber}`
            }
        })

        if (messageIsValid) {
            const videoEventData = {
                ...videoData,
                ...getPersistentSiteData()
            }

            emitEvent({
                debug: config.debug,
                eventData: videoEventData,
                eventName: 'Video'
            })
        }
    })
}

export default addVideoEventListener
