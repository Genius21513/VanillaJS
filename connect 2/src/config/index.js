const MINIMUM_TIME_INTERVAL = 20
const PAGE_TAG_NAMES = [
    'language',
    'country',
    'category',
    'subCategories',
    'vertical',
    'subVertical',
    'triVertical',
    'topList',
    'primarySubCategory',
    'equivalentPage'
]
const SELECTOR_MIN_LENGTH = 2
const SITE_NUMBER_LENGTH = 4
const STRING_MIN_LENGTH = 1
const USER_TAG_NAMES = [
    'mobile',
    'tablet',
    'continent',
    'country',
    'state',
    'city'
]
const MEMBER_TAG_NAMES = [
    'loggedIn'
]

const configSchema = {
    externalScript: (value) => value && value.toString().length >= STRING_MIN_LENGTH,
    fullFunnelQueryParamName: (value) => value && value.toString().length >= STRING_MIN_LENGTH,
    globalVariableName: (value) => value && value.toString().length >= STRING_MIN_LENGTH,
    interactionIndicatorsArray: (value) => Array.isArray(value),
    linkContainersArray: (value) =>
        Array.isArray(value) && value.every((item) =>
            item.linkContainerName && Array.isArray(item.linkContainerSelectors) && item.linkContainerSelectors.every((selector) =>
                selector.toString().length >= SELECTOR_MIN_LENGTH
            )
        ),
    memberTagLocalNames: (value) => {
        // it's optional... so validate only if present
        if (value !== undefined) {
            return Array.isArray(value) && value.length === MEMBER_TAG_NAMES.length
        }
        return true
    },
    memberTagNames: (value) => {
        return Array.isArray(value) && value.length === MEMBER_TAG_NAMES.length && value.every((tag, index) =>
            tag === MEMBER_TAG_NAMES[index])
    },
    outboundLinkFolder: (value) => value && value.toString().length >= STRING_MIN_LENGTH,
    pageTagLocalNames: (value) => Array.isArray(value) && value.length === PAGE_TAG_NAMES.length,
    pageTagNames: (value) =>
        Array.isArray(value) && value.length === PAGE_TAG_NAMES.length && value.every((tag, index) =>
            tag === PAGE_TAG_NAMES[index]),
    timeOnSiteCustomPings: (value) => Array.isArray(value) && value.every((item) => parseInt(item) === Number(item)),
    timeOnSiteInterval: (value) => parseInt(value) === Number(value) && value >= MINIMUM_TIME_INTERVAL,
    timeOnSiteLimit: (value) => parseInt(value) === Number(value),
    transactionIdSiteNumber: (value) => parseInt(value) === Number(value) && value.toString().length === SITE_NUMBER_LENGTH,
    userTagLocalNames: (value) => Array.isArray(value) && value.length === USER_TAG_NAMES.length,
    userTagNames: (value) =>
        Array.isArray(value) && value.length === USER_TAG_NAMES.length && value.every((tag, index) =>
            tag === USER_TAG_NAMES[index]),
    webVitalsVisibilityPercent: (value) => parseInt(value) === Number(value)
}

const requiredProperties = [
    'externalScript',
    'fullFunnelQueryParamName',
    'globalVariableName',
    'interactionIndicatorsArray',
    'linkContainersArray',
    'outboundLinkFolder',
    'pageTagLocalNames',
    'pageTagNames',
    'timeOnSiteCustomPings',
    'timeOnSiteInterval',
    'timeOnSiteLimit',
    'transactionIdSiteNumber',
    'userTagLocalNames',
    'userTagNames',
    'webVitalsVisibilityPercent'
]

requiredProperties.forEach(property => {
    configSchema[property].required = true
})

/*
    // / required values - must be given
    externalScript => String
    fullFunnelQueryParamName => String,
    globalVariableName => String
    linkContainersArray => Array
    outboundLinkFolder => String
    pageTagLocalNames => Array of defined length containing Strings
    transactionIdSiteNumber => Integer (exactly 4 characters)
    userTagLocalNames => Array of defined length containing Strings

    // / required defaults - can be overriten
    interactionIndicatorsArray: ['#', 'javascript', '/img/'], -> Array of Strings
    timeOnSiteCustomPings: [10, 30, 90] -> Array of secconds (Integers),
    timeOnSiteInterval: 60, Integer
    timeOnSiteLimit: 240, Integer

    // / optional
    // breadcrumbsSelector: String
    // domainHash: String -> md5 hash of whitelisted dmain
    // linkContainerDatasetName: String
    // searchParam: String

    */

const configDefault = {
    interactionIndicatorsArray: ['#', 'javascript', '/img/'],
    timeOnSiteCustomPings: [10, 30, 90],
    timeOnSiteInterval: 60,
    timeOnSiteLimit: 240,
    pageTagNames: [
        'language',
        'country',
        'category',
        'subCategories',
        'vertical',
        'subVertical',
        'triVertical',
        'topList',
        'primarySubCategory',
        'equivalentPage'
    ],
    userTagNames: [
        'mobile',
        'tablet',
        'continent',
        'country',
        'state',
        'city'
    ],
    memberTagNames: [
        'loggedIn'
    ],
    webVitalsVisibilityPercent: 10
}

export { configDefault, configSchema }
