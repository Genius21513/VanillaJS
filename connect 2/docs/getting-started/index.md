# Getting Started

## Introduction

Main purpose of `connector` is to integrate adobe analytics across our network.

## Prerequisites

Add `.npmrc` file in root of your project with this content:



::: warning
`.npmrc` file should not be accessible

Add `RedirectMatch 404 /\.npmrc` to your `.htaccess` file
:::

## Installation

```bash
npm install @data-tribe/aa-connector
```

## Usage

This needs to be bundled (using bablel) and added to every page:

```js

const siteConfig = {
    // site specific configuration
    // see example in Options section
};

new aaConnector(siteConfig);
```

Additionally we're collecting page dynamic data. And this needs to be generated and appended to the window object for very page:

```php
<?php
$defaultPageTags = [
    'main_category' => 'Commercial',
    'sub_categories' => [],
    'vertical' => 'Gambling',
    'sub_vertical' => 'Casino',
    'tri_vertical' => '',
    'country' => '*GLOBAL*',
    'language' => 'English',
    'toplist' => 'false',
    'primarySubCategory' => '',
    'equivalent_page' => '',
];

/*
 * $mobileDetection and $geoSystem are classes from CodeLibrary,
 * but you can provide this data as you wish
 */
$userInfo = [
    "mobile" => $mobileDetection->isMobile(),
    "tablet" => $mobileDetection->isTablet(),
    "continent" => $geoSystem->getContinentInformation(),
    "country" => $geoSystem->getCountryInformation(),
    "state" => $geoSystem->getStateInformation(),
    "city" => $geoSystem->getCityInformation(),
];
?>
<script>
    const defaultTags = <?php echo json_encode($defaultPageTags); ?>;
    // $pageTags are used to overwrite default tags for the current page
    const pageTags = <?php echo json_encode($pageTags); ?>;
    const userInfo = <?php echo json_encode($userInfo); ?>;

    window.adobeTags = {
        ...defaultTags,
        ...pageTags,
        ...userInfo
    };
</script>
```
