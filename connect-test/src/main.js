import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import aaConnector from '../../connect 2/src'

const siteConfig = {
    externalScript: 'https://assets.adobedtm.com/1d8526a1ddc2/cdb566aa83de/launch-fba6f1977259-development.min.js',
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
    linkContainerDatasetName: "clickLabel",
    linkContainersArray: [
        {
            linkContainerName: "header",
            linkContainerSelectors: ["header"]
        },
        {
            linkContainerName: "navigation",
            linkContainerSelectors: [".nav"]
        }
    ],
    // / optional
    ampUrl: "http://localhost:8084/amp?pageTitle=test&deviceType=iPhone&pageUrl=https://www.testing.com&pageLanguage=English&pageCategory=Commercial&pageSubCategory=&userAgent=Safari&pageVertical=Gambling&pageSubVertical=Casino&pageCountry=UnitedKingdom&pageLanguageIso=ISO639&pageAlternativeUrl=&articleAuthor=Tomek&articlePublicationDate=12-08-2021&articleModificationDate=03-10-2021&articleTitle=Testing&articleCategories=Commentary&articleCommentsNumber=3&searchQuery=gambling&iPhoneScreenSize=138x67x7&referrer=http://www.alternativeUI.com&userCountry=UnitedKingdom&userState=Middlands&userContinent=Europe&userCity=Nottingham&userLanguage=English&pagePrimarySubCategory=Gaming&toplist=images&domain=uknames.com",
    debug: true
}

new aaConnector(siteConfig)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
