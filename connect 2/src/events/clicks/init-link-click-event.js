import {
    getElementAttributeValue,
    getClickLocation,
    getClickType,
    getLocationPropertyValue,
    getPersistentSiteData,
    isInteraction,
    removeOriginFromUrl,
    removeSearchParamFromUrl
} from '../../utilities/'
import emitEvent from '../emit-event'

const initLinkClickEvent = ({ link, linkIsAffLink, transactionId }, config) => {
    const linkUrl = getElementAttributeValue(link, 'href')
    const linkIsInteraction = isInteraction(link, config)
    const locationOrigin = getLocationPropertyValue('origin')
    const linkLocation = getClickLocation(link, config)
    const linkType = getClickType(link, linkIsInteraction, linkIsAffLink, locationOrigin)

    const eventType = (
        linkType === 'Partner' ||
        linkType === 'External'
    )
        ? 'e'
        : 'o'

    let clickData = {
        ...getPersistentSiteData(),
        eVar18: linkLocation,
        eVar19: linkUrl,
        eVar20: linkType
    }

    if (linkIsAffLink) {
        const partnerUrl = removeOriginFromUrl(
            removeSearchParamFromUrl(
                linkUrl,
                config.fullFunnelQueryParamName
            ),
            locationOrigin
        )

        clickData = {
            ...clickData,
            eVar19: partnerUrl,
            eVar25: transactionId
        }
    }

    emitEvent({
        debug: config.debug,
        eventData: clickData,
        eventName: 'Click',
        eventType
    })
}

export default initLinkClickEvent
