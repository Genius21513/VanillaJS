const getClickType = (clickTarget, interactionFlag, linkIsAffLink, locationOrigin) => {
    let clickType = 'Internal'

    if (interactionFlag === true) {
        clickType = 'Interaction'
    } else if (linkIsAffLink === true) {
        clickType = 'Partner'
    } else if (clickTarget.href.indexOf(locationOrigin) === -1 && interactionFlag === false) {
        clickType = 'External'
    }

    return clickType
}

export default getClickType
