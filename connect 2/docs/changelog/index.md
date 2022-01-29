# Changelog

All notable changes to this project will be documented in this file.



## [2.0.1] - 2021-11-12

### Added
-   new section to the documentation **"What we track"** with info about **amp tracking**

### Fixed
-   imports into `getPersistentSiteData` method
-   ampData import fixed
-   param name `toplist` fixed for consistency


## [2.0.0] - 2021-11-09

### Added
### AA connector would break unless the page tag local names are added

-   auxclick event to catch wheel clicks not tracked
-   page tags options for `toplist` and `primarySubCategory`
-   added option `equivalentPage` to specify an equivalent URL in page tags
-   AMP sites integration
-   added capture iPhone version

### Fixed
-   fixed values truncated in variables
-   refactored persistent data used in click events and web vitals data
-   fixed interaction clicks improperly detected under `External`
-   fixed interaction clicks improperly detected under specific circumstances


## [1.4.2] - 2021-07-22

### Fixed

-   more detailed checking of the adobe `s` object

### Improved

-   removed `lodash.get` dependency
-   added `type: 'module'` to `package.json`
-   changed "Missing script!" error message to proper `error` object

## [1.4.1] - 2021-07-05

### Patch

-   Google Web Vitals upgraded to 2.1 version

## [1.4.0] - 2021-05-11

### Added

-   domain validation (to prevent tracking on clonned sites)

### Fixed

-   back to top feature in documentation
-   refactored Nullish coalescing operator (??) to be more "build friendly"

### Security

-   updated dependencies

## [1.3.4] - 2021-04-26

### Fixed

-   referrer in manual page views ([referrer can be now overridden](http://staging.aaconnector.staging.net.management/what-we-track/#page-view-only-for-spa) in `emitPageVierw` method)

## [1.3.3] - 2021-03-15

### Added

-   `gameName` to Arcade data

### Fixed

-   click events throwing errors when `linkContainersArray` is empty

## [1.3.2] - 2021-03-12

### Added

-   `emitPageView` method for manually triggering page views in Single Page Applications

*   new section to the documentation **"What we track"** with info about **web vitals**
*   new section to the documentation **"What we track"** with info about **time on site**
*   new section to the documentation **"What we track"** with info about **clicks**
*   new section to the documentation **"What we track"** with info about **page view (_only for SPA_)**

## [1.3.1] - 2021-02-25

### Added

-   web vitals integration:
    -   LCP, FID, CLS as separate events for 10% (default) of pageviews... based on new optional setting `webVitalsVisibilityPercent` unless in debug mode... then emits them always
    -   FCP, TTFB as part of page view event (not always populated due to race conditions that apply here)
        excluded internal traffic based on query parameter...  
        _please use [Requestly](https://www.notion.so/winasone/Requestly-1650f0177b4643049d34733ac90a684a) to automate the process_

## [1.2.2] - 2021-02-03

### Fixed

-   missing data in Arcade events (SiteSpect info and current URL)

## [1.2.1] - 2021-02-02

### Added

-   Arcade integration (`clientId`, `gameId`, `geo`, `linkId`, `referer`, `userAgent`)
-   search query value

## [1.1.3] - 2020-12-16

### Fixed

-   `Uncaught TypeError: clickContainer.clickContainerSelectors is undefined` error that was introduced in version [1.1.2](https://github.com/NetManagement/aa-connector/releases/tag/1.1.2)
    -   added additional tests to prevent this error in the future

## [1.1.2] - 2020-12-10

### Added

-   tracking od dynamically added elements
-   tracking clicks also for buttons (allways as Interaction, can be labelled by data-attribute)

## [1.1.1] - 2020-11-23

### Fixed

-   broken user journey by adding `location.origin` to every event

## [1.1.0] - 2020-11-19

### Added

-   `loggedIn` status for sites with members area
-   `linkContainerDatasetName` option for better way of tracking clicks

*   new section to the documentation **"What we track"** with info about **user tags**
*   new section to the documentation **"What we track"** with info about **member tags**

### Fixed

-   breadcrumbs tracking

## [1.0.7] - 2020-11-05

### Added

-   sitespect data to all events

## [1.0.6] - 2020-11-05

### Added

-   currently used `aa-connector` version to collected data
-   new section to the documentation **"What we track"** with info about **page tags**

## Fixed

-   data entries disconected from page view by adding `location.origin`


---

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**_Added_** for new features.  
**_Changed_** for changes in existing functionality.  
**_Deprecated_** for soon-to-be removed features.  
**_Removed_** for now removed features.  
**_Fixed_** for any bug fixes.  
**_Security_** in case of vulnerabilities.
