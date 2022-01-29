import { getFCP, getTTFB } from 'web-vitals'
import {
    getBreadcrumbs,
    getCategoriesString,
    getCustomTagsFor,
    getDocumentPropertyValue,
    getLocationPropertyValue,
    getMetaTagValue,
    getNavigatorPropertyValue,
    getPersistentSiteData,
    getSearchParamValue,
    getUserDeviceType,
    getVerticalsString
} from '../utilities'
import emitEvent from '../events/emit-event'

const speedData = {}
const setSpeedData = (metric) => { speedData[metric.name] = metric.value }

getFCP(setSpeedData)
getTTFB(setSpeedData)

const dataLayer = (config, overrides = {}) => {
    const pageHref = getLocationPropertyValue('href')
    const memberTags = getCustomTagsFor('member', config)
    const pageTags = getCustomTagsFor('page', config)
    const userTags = getCustomTagsFor('user', config)
    const userAgent = getNavigatorPropertyValue('userAgent')

    const pageViewData = {
        pageName: pageHref,
        pageURL: pageHref,

        // prop1: undefined,
        prop2: getDocumentPropertyValue('title'),
        prop3: getDocumentPropertyValue('lang', 'documentElement'),
        prop5: getUserDeviceType(userTags),
        // ...
        // prop75: undefined,

        eVar1: getUserDeviceType(userTags),
        eVar3: getCategoriesString(pageTags),
        eVar4: getVerticalsString(pageTags),
        eVar5: pageTags.country,
        eVar6: pageTags.language,
        eVar7: getDocumentPropertyValue('lang', 'documentElement'),
        eVar8: getBreadcrumbs(config),
        eVar9: pageTags.equivalentPage,
        eVar12: getMetaTagValue('author'),
        eVar13: getMetaTagValue('publishedDate'),
        eVar14: getMetaTagValue('modifiedDate'),
        eVar15: getMetaTagValue('title'),
        eVar16: getMetaTagValue('categories'),
        eVar17: getMetaTagValue('commentCount'),
        // ...
        eVar21: getSearchParamValue(config),
        eVar22: userAgent.indexOf('iPhone') > -1 ? screen.height + 'x' + screen.width : false,
        eVar23: userAgent,
        // ...
        eVar27: (overrides.referrer === undefined || overrides.referrer === null) ? getDocumentPropertyValue('referrer') : overrides.referrer,
        eVar28: userTags.country,
        eVar29: userTags.state,
        eVar30: userTags.continent,
        eVar31: userTags.city,
        eVar32: getNavigatorPropertyValue('language'),
        eVar33: memberTags.loggedIn,
        // ...
        eVar53: speedData.FCP,
        eVar54: speedData.TTFB,
        // ..
        eVar58: pageTags.primarySubCategory,
        eVar59: pageTags.topList,
        // ..
        eVar199: config.version,
        // ..
        ...getPersistentSiteData()
    }

    emitEvent({
        debug: config.debug,
        eventData: pageViewData,
        eventName: 'Pageview',
        pageView: true
    })
}

export default dataLayer
