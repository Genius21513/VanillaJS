import getGlobalPropValue from './bom/get-global-property-value'
import { getLocationPropertyValue } from '.'

const getPersistentSiteData = () => {
    const locationOrigin = getLocationPropertyValue('origin')
    const pageOriginWithPathname = locationOrigin + getLocationPropertyValue('pathname')

    return {
        eVar2: pageOriginWithPathname,
        eVar10: getGlobalPropValue('ss_watts.siteSpectCampaigns'),
        eVar11: getGlobalPropValue('ss_watts.siteSpectGUID'),
        eVar24: s.visitor.getMarketingCloudVisitorID(),
        eVar100: getGlobalPropValue('ss_watts.siteSpectExperience'),
        eVar200: locationOrigin
    }
}

export default getPersistentSiteData
