# Options

## Required

| Option                           |   Type    |  Default  | Description                              |
| -------------------------------- | :-------: | :-------: | ---------------------------------------- |
| **externalScript**[^1]           | _String_  | undefined | full URL of Adobe Launch script          |
| **fullFunnelQueryParamName**[^1] | _String_  | undefined | search query param name for afflinks     |
| **globalVariableName**           | _String_  | undefined | variable name to store dynamic page data |
| **linkContainersArray**          |  _Array_  | undefined | used to store source of click            |
| **outboundLinkFolder**           | _String_  | undefined | afflinks path                            |
| **pageTagLocalNames**            |  _Array_  | undefined | local tag names map                      |
| **transactionIdSiteNumber**[^1]  | _Integer_ | undefined | must be 4 characters long                |
| **userTagLocalNames**            |  _Array_  | undefined | local tag names map                      |

[^1]: provided by Data Engineering team

## Optional

| Option                         |   Type    |           Default            | Description                                                |
| ------------------------------ | :-------: | :--------------------------: | ---------------------------------------------------------- |
| **interactionIndicatorsArray** |  _Array_  | ['#', 'javascript', '/img/'] | used for internal links identification                     |
| **timeOnSiteCustomPings**      |  _Array_  |         [10, 30, 90]         | additional _Time On Site_ pings [secconds]                 |
| **timeOnSiteInterval**         | _Integer_ |              60              | _Time On Site_ interval [secconds]                         |
| **timeOnSiteLimit**            | _Integer_ |             240              | _Time On Site_ logging time [secconds]                     |
| **webVitalsVisibilityPercent** | _Integer_ |              10              | % of page views to include web vitals metrics on [percent] |
| -----                          |   -----   |            -----             | -----                                                      |
| **memberTagLocalNames**        |  _Array_  |          undefined           | local tag names map                                        |
| **linkContainerDatasetName**   | _String_  |          undefined           | link data-attribute name                                   |
| **breadcrumbsSelector**        | _String_  |          undefined           | selector of breadcrumb item                                |
| **searchParam**                | _String_  |          undefined           | query string parameter used by search                      |
| **domainHash**                 | _String_  |          undefined           | md5 hash of domain to be compared with `location.host`     |
| **debug**                      | _Boolean_ |          undefined           | prints additional logs for testing purposes                |

## Example

```js
const config = {
    // / required
    externalScript: "https://path-to-site-specific-script.min.js",
    globalVariableName: "globalPropName",
    pageTagLocalNames: [
        // please change those to make them unique to your site
        "language",
        "country",
        "main_category",
        "sub_categories",
        "vertical",
        "sub_vertical",
        "tri_vertical",
        "toplist",
        "primarySubCategory",
        "equivalent_page"
    ],
    userTagLocalNames: [
        // please change those to make them unique to your site
        "mobile_flag",
        "tablet_flag",
        "user_continent",
        "user_country",
        "user_state",
        "user_city"
    ],

    transactionIdSiteNumber: 1234,
    fullFunnelQueryParamName: "tid",
    outboundLinkFolder: "/afflinks-folder-name/",
    linkContainerDatasetName: "clickContainerName",
    linkContainersArray: [
        {
            linkContainerName: "footer",
            linkContainerSelectors: ["footer"]
        },
        {
            linkContainerName: "header",
            linkContainerSelectors: ["header"]
        },
        {
            linkContainerName: "toplist",
            linkContainerSelectors: [".toplist", ".toplist-old"]
        }
    ],

    // / optional
    memberTagLocalNames: [
        // please change those to make them unique to your site
        "logged_in"
    ],
    breadcrumbsSelector: ".breadcrums__item",
    searchParam: "s",
    webVitalsVisibilityPercent: 10,

    debug: true
};
```
