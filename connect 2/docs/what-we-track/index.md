# What we track?

## Page Tags

Page Tags for Adobe were setup in order to mimic the page tags previously live in Clickybounce.\
These have been agreed upon by all product managers and need to stay consistent across all sites in order to be able to compare sites across the network.

#### Tags we track

| Name                   |   Type    | Default | Description                                             |
| ---------------------  | :-------: | :-----: | ------------------------------------------------------- |
| **Language**           | _String_  |  null   | language the page is written in                         |
| **Country**            | _String_  |  null   | whether the page belongs to specific country            |
| **Category**           | _String_  |  null   | whether the page is _Commercial_ or _Non Commercial_    |
| **Sub Categories**     | _Array_   |  null   | page type e.g. [_reviews_, _homepage_, _banking_ etc..] |
| **Vertical**           | _String_  |  null   | site type e.g. _casino_, _sport_ etc..                  |
| **Sub Vertical**       | _String_  |  null   | sub-types of main verticals e.g. _slots_                |
| **Tri Vertical**       | _String_  |  null   |                                                         |
| **Toplist**            | _Boolean_ |  null   | whether the page contains a toplist or not              |
| **PrimarySubCategory** | _String_  |  null   | page type e.g. _reviews_, _homepage_, _banking_ etc..   |
| **EquivalentPage**     | _String_  |  null   | equivalent URL e.g. the hrefLang equivalent URL         |

#### How we track Page Tags

We expect page specific tags to be in global variable set with `globalVariableName` option.
To have at least some differences in the code between sites, we are mapping names of properties in that variable. To achieve that you are providing an array called `pageTagLocalNames` with names that you want to use (_those should be unique to your site_).

::: warning
Order of `pageTagLocalNames` array is very important and can't be changed.

````
pageTagLocalNames: [
    'language',
    'country',
    'category',
    'subCategories',
    'vertical',
    'subVertical',
    'triVertical',
    'toplist',
    'primarySubCategory',
    'equivalentPage'
]
:::

Then while rendering page you should populate this global variable with correct page tags using the same names as provided in `pageTagLocalNames` and add them to the `window` object using the same name as set in `globalVariableName`.
``` php
<?php
    $pageTags = json_encode([
        'language' => '', // get current page "language" tag
        'country' => '', // get current page "country" tag
        'category' => '', // get current page "category" tag
        'subCategories' => [], // get current page "subCategories" tag
        'vertical' => '', // get current page "vertical" tag
        'subVertical' => '', // get current page "subVertical" tag
        'triVertical' => '', // get current page "triVertical" tag
        'toplist' => '', // get current page "toplist" tag
        'primarySubCategory' => '', // get current page "primarySubCategory" tag
        'equivalentPage' => '' // get current page "equivalentPage" tag
    ]);
?>
<script>
    const pageTags = <?php echo $pageTags; ?>;

    window.globalVariableName = {
        ...pageTags
    }
</script>
````

## User Info

We expect user specific tags to be in global variable set with `globalVariableName` option.
To have at least some differences in the code between sites, we are mapping names of properties in that variable. To achieve that you are providing an array called `userTagLocalNames` with names that you want to use (_those should be unique to your site_).

::: warning
Order of `userTagLocalNames` array is very important and can't be changed.

````
userTagLocalNames: [
    'is_mobile',
    'is_tablet',
    'continent',
    'country',
    'state',
    'city',
]
:::

Then while rendering page you should populate this global variable with correct page tags using the same names as provided in `pageTagLocalNames` and add them to the `window` object using the same name as set in `globalVariableName`.
``` php
<?php
    $userTags = json_encode([
        'is_mobile' => Boolean,
        'is_tablet' => Boolean,
        'continent' => '',
        'country' => '',
        'state' => '', // state for US but can be province/district for others
        'city' => '',
    ]);
?>
<script>
    const userTags = <?php echo $userTags; ?>;

    window.globalVariableName = {
        ...userTags
    }
</script>
````

## Member Info [optional]

We expect member specific tags to be in global variable set with `globalVariableName` option.
To have at least some differences in the code between sites, we are mapping names of properties in that variable. To achieve that you are providing an array called `memberTagLocalNames` with names that you want to use (_those should be unique to your site_).

```
memberTagLocalNames: [
    'logged_in',
]
```

Then while rendering page you should populate this global variable with correct page tag using the same names as provided in `memberTagLocalNames` and add them to the `window` object using the same name as set in `globalVariableName`.

```php
<?php
    $memberTags = json_encode([
        'logged_in' => Boolean,
    ]);
?>
<script>
    const memberTags = <?php echo $memberTags; ?>;

    window.globalVariableName = {
        ...memberTags
    }
</script>
```

## Web Vitals

We've integrated [web-vitals](https://github.com/GoogleChrome/web-vitals) package. This allows us to track five different metrics:

| Core Web Vitals                    | Additional Web Vitals            |
| ---------------------------------- | -------------------------------- |
| Cumulative Layout Shift (**CLS**)  | First Contentful Paint (**FCP**) |
| First Input Delay (**FID**)        | Time to First Byte (**TTFB**)    |
| Largest Contentful Paint (**LCP**) |                                  |

::: tip

Note that some of these metrics will not report until the user has interacted with the page, switched tabs, or the page starts to unload.

Also, in some cases a metric callback may never be called:  
**FID** is not reported if the user never interacts with the page.  
**FCP**, **FID**, and **LCP** are not reported if the page was loaded in the background.  
**CLS** should be reported any time the page's visibilityState changes to hidden.  
**CLS**, **FCP**, **FID**, and **LCP** are reported again after a page is restored from the back/forward cache.
:::

## Tie On Site

After initial page view event we are emitting "Engagement Pings" in predefined intervals. There are three options you can set up in main config object:

-   **timeOnSiteInterval**: number of seconds between pings _(defaults to 60)_
-   **timeOnSiteCustomPings**: array of seconds in which we want additional pings _(defaults to `[10, 60, 90]`)_
-   **timeOnSiteLimit**: number of seconds after which we stop tracking time on site _(defaults to 240)_

## Clicks

We track all clicks on `<a>` and `<button>` elements.

There are 3 types of clicks:

-   **Interaction** - every click that has one of _interactionIndicatorsArray_ item in its href
-   **Partner** - every click that has _outboundLinkFolder_ in it's href
-   **External** - every click pointing to external domain

::: warning

All `<button>` clicks are treated as interaction **do not use buttons for partner clicks**

:::

---

## Page view (only for SPA)

AA-Connector exposes one method to enable "manual" triggering of "page view events". On traditional websites page view is only emitted on `window.load` event.

::: tip

To properly track page views between route changes in SPA, please invoke this method **after the route has changed**. 

Note that you can specify a custom SPA referrer (to track navigation) by specifying a **referrer** parameter when emitting a manual page view. 

Example for vue router with a custom (sample) referrer URL.:

```
const aaConnector = new AaConnector(siteSettings)

router.afterEach((to, from) => {
    aaConnector.emitPageView({ referrer: 'https://spa.referrer.url'})
})

```

_AA Connector will ignore first time this method is invoked to resolve duplicated page views  
(one from `window.load` event and another from `router.afterEach()` hook)_
:::

#### AMP Tracking [optional]

There is a variable you can set up in the main config object: `ampUrl` option, which is a URL for the 
AMP utility page. Parameters below should be sent as a query string (using an iframe) from the AMP page

```
extraUrlParams: [
    'articleAuthor',
    'articleCategories',
    'articleCommentsNumber',
    'articleModificationDate',
    'articlePublicationDate',
    'articleTitle',
    'deviceType',
    'domain',
    'iPhoneScreenSize',
    'pageAlternativeUrl',
    'pageCountry',
    'pageLanguage',
    'pageLanguageIso',
    'pagePrimarySubCategory',
    'pageTitle',
    'pageUrl',
    'referrer',
    'searchQuery'
    'topList',
    'userAgent',
    'userCity',
    'userContinent',
    'userCountry',
    'userLanguage',
    'userState'
]
```

If the URL matches the AMP utility page URL then it should not initiate the main connector code but instead run the AMP specific code which will need the query string parameters sent from the AMP page