import {
    getCategoriesString,
    getSearchParamValue,
    getVerticalsString
} from '../utilities'
import emitEvent from '../events/emit-event'

const ampData = (config) => {
    const pageTagCategories = getSearchParamValue({ searchParam: 'pageCategory' })
    const pageTagSubCategories = getSearchParamValue({ searchParam: 'pageSubCategories' })
    const pageTagVerticals = getSearchParamValue({ searchParam: 'pageVertical' })
    const pageTagSubVertical = getSearchParamValue({ searchParam: 'pageSubVertical' })

    const pageViewData = {
        eVar1: getSearchParamValue({ searchParam: 'deviceType' }),
        prop2: getSearchParamValue({ searchParam: 'pageTitle' }),
        eVar2: getSearchParamValue({ searchParam: 'pageUrl' }),
        prop3: getSearchParamValue({ searchParam: 'pageLanguage' }),
        eVar3: getCategoriesString(pageTagCategories, pageTagSubCategories),
        prop4: getSearchParamValue({ searchParam: 'userAgent' }),
        eVar4: getVerticalsString(pageTagVerticals, pageTagSubVertical),
        prop5: getSearchParamValue({ searchParam: 'deviceType' }),
        eVar5: getSearchParamValue({ searchParam: 'pageCountry' }),
        eVar6: getSearchParamValue({ searchParam: 'pageLanguage' }),
        eVar7: getSearchParamValue({ searchParam: 'pageLanguageIso' }),
        eVar9: getSearchParamValue({ searchParam: 'pageAlternativeUrl' }),
        eVar12: getSearchParamValue({ searchParam: 'articleAuthor' }),
        eVar13: getSearchParamValue({ searchParam: 'articlePublicationDate' }),
        eVar14: getSearchParamValue({ searchParam: 'articleModificationDate' }),
        eVar15: getSearchParamValue({ searchParam: 'articleTitle' }),
        eVar16: getSearchParamValue({ searchParam: 'articleCategories' }),
        eVar17: getSearchParamValue({ searchParam: 'articleCommentsNumber' }),
        eVar21: getSearchParamValue({ searchParam: 'searchQuery' }),
        eVar22: getSearchParamValue({ searchParam: 'iPhoneScreenSize' }),
        eVar23: getSearchParamValue({ searchParam: 'userAgent' }),
        eVar24: s.visitor.getMarketingCloudVisitorID(),
        eVar27: getSearchParamValue({ searchParam: 'referrer' }),
        eVar28: getSearchParamValue({ searchParam: 'userCountry' }),
        eVar29: getSearchParamValue({ searchParam: 'userState' }),
        eVar30: getSearchParamValue({ searchParam: 'userContinent' }),
        eVar31: getSearchParamValue({ searchParam: 'userCity' }),
        eVar32: getSearchParamValue({ searchParam: 'userLanguage' }),
        eVar58: getSearchParamValue({ searchParam: 'pagePrimarySubCategory' }),
        eVar59: getSearchParamValue({ searchParam: 'topList' }),
        eVar199: config.version,
        eVar200: getSearchParamValue({ searchParam: 'domain' })
    }

    emitEvent({
        debug: config.debug,
        eventData: pageViewData,
        eventName: 'AMP Pageview',
        pageView: true
    })
}

export default ampData
