const emitEvent = ({
    debug = false,
    eventData,
    eventName = null,
    eventType = 'o',
    pageView = false
}) => {
    if (debug === true) {
        console.log('Emit...', { eventData, eventName, pageView })
    }

    for (const [propName, value] of Object.entries(eventData)) {
        // s - Adobe Analytics tracking object
        s[propName] = value
    }

    if (pageView) {
        s.t()
    } else {
        s.tl(true, eventType, eventName)
    }

    s.clearVars()
}

export default emitEvent
