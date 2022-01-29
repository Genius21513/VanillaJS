import generateApiUrl from './generate-api-url'
import generateRandomNumber from './generate-random-number'
import generateTimestamp from './generate-time-stamp'
import generateTransactionId from './generate-transaction-id'
import getCategoriesString from './get-categories-string'
import getCustomTagsFor from './get-custom-tags-for'
import getPersistentSiteData from './get-persistentsite-data'
import getUserDeviceType from './get-user-device-type'
import getVerticalsString from './get-verticals-string'
import validateDomain from './validate-domain'
import validateObject from './validate-object'

// bom utilities
import getGlobalPropValue from './bom/get-global-property-value'
import getSearchParamValue from './bom/get-search-param-value'

// dom utilities
import getDocumentPropertyValue from './dom/get-document-property-value'
import getElementAttributeValue from './dom/get-element-attribute-value'
import getLocationPropertyValue from './dom/get-location-property-value'
import getMetaTagValue from './dom/get-meta-tag-value'
import getNavigatorPropertyValue from './dom/get-navigator-property-value'
import loadScript from './dom/load-script'
import locationUrlIncludes from './dom/location-url-includes'

// click utilities
import getClickLocation from './click/get-click-location'
import getClickType from './click/get-click-type'
import isInteraction from './click/is-interaction'

// link utilities
import appendParamToLink from './links/append-param-to-link'
import isAffLink from './links/is-aff-link'
import removeOriginFromUrl from './links/remove-origin-from-url'
import removeSearchParamFromUrl from './links/remove-search-param-from-url'

// page utilities
import getBreadcrumbs from './page/get-breadcrumbs'

export {
    generateApiUrl,
    generateRandomNumber,
    generateTimestamp,
    generateTransactionId,
    getCategoriesString,
    getCustomTagsFor,
    getPersistentSiteData,
    getUserDeviceType,
    getVerticalsString,
    validateDomain,
    validateObject,

    // bom utilities
    getGlobalPropValue,
    getSearchParamValue,

    // dom utilities
    getDocumentPropertyValue,
    getElementAttributeValue,
    getLocationPropertyValue,
    getMetaTagValue,
    getNavigatorPropertyValue,
    loadScript,
    locationUrlIncludes,

    // page utilities
    getBreadcrumbs,

    // click utilities
    getClickLocation,
    getClickType,
    isInteraction,

    // link utilities
    appendParamToLink,
    isAffLink,
    removeOriginFromUrl,
    removeSearchParamFromUrl
}
