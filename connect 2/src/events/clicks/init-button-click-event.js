import {
    getClickLocation,
    getClickType,
    getLocationPropertyValue,
    getPersistentSiteData
} from '../../utilities'
import emitEvent from '../emit-event'

const initButtonClickEvent = ({ button }, config) => {
    const buttonIsInteraction = true
    const clickLocation = getClickLocation(button, config)
    const clickUrl = null
    const clickType = getClickType(button, buttonIsInteraction, false, getLocationPropertyValue('origin'))
    const eventType = 'o'

    const clickData = {
        ...getPersistentSiteData(),
        eVar18: clickLocation,
        eVar19: clickUrl,
        eVar20: clickType
    }

    emitEvent({
        debug: config.debug,
        eventData: clickData,
        eventName: 'Click',
        eventType
    })
}

export default initButtonClickEvent
