import _mergeWith from 'lodash.mergewith'
import { configDefault, configSchema } from './config'
import {
    getSearchParamValue,
    getLocationPropertyValue,
    loadScript,
    validateDomain,
    validateObject
} from './utilities'
import * as packageInfo from '../package.json'
import dataLayer from './data-layer'
import events from './events'
import ampData from './amp'

class aaConnector {
    constructor (siteSettings = {}) {
        this.config = {}
        this.initialPageViewEventSent = false

        const internalTraffic = getSearchParamValue({ searchParam: 'ITL' })

        // remove internal traffic
        if (internalTraffic === 'true') {
            return
        }

        this.config = _mergeWith(configDefault, siteSettings, this.mergeCustomizer)
        this.config.version = packageInfo.version

        if (this.config.debug === true) {
            console.log('⚙️ Validating...', { config: this.config })
        }

        validateObject(this.config, configSchema)
            .then(() => {
                if (this.config.debug === true) {
                    console.log('✔️ Config is valid!')
                }

                if (!validateDomain(this.config)) {
                    // siltently fails if domain is not valid
                    return
                }

                loadScript(this.config.externalScript)
                    .then(() => {
                        this.init()
                    })
                    .catch((error) => console.error(error))
            })
            .catch((error) => {
                if (this.config.debug === true) {
                    console.error(error)
                }
            })
    }

    // used to overwrite whole array
    // instead of replacing values by index
    mergeCustomizer (objValue, srcValue) {
        if (Array.isArray(objValue)) {
            return srcValue
        }
    }

    // we need a way to wait
    // for adobe script to be executed
    init (timer = 0) {
        if (this.config.debug === true) {
            console.info(`Startup lag... ${timer * 0.001}s`)
        }

        if (typeof (window.s) === 'object' && typeof (window.s.t) === 'function') {
            this.initialPageViewEventSent = true

            if (getLocationPropertyValue('href').replace(location.search, '') === this.config.ampUrl) {
                ampData(this.config)
            } else {
                events(this.config)
                dataLayer(this.config)
            }
        } else {
            setTimeout(() => {
                timer += 30
                this.init(timer)
            }, 30)
        }
    }

    emitPageView (overrides = {}) {
        // first page view event is sent on window 'load' event
        // typically, the statement below being true means this is an SPA page load, not a full HTTP request
        if (this.initialPageViewEventSent) {
            dataLayer(this.config, overrides)
        }
    }
}

export default aaConnector
