import { getPersistentSiteData } from '../../utilities/'
import emitEvent from '../emit-event'

const emitWebVitalsData = (config, metric) => {
    const webVitalsData = {
        ...getPersistentSiteData()
    }

    switch (metric.name) {
        case 'LCP':
            webVitalsData.eVar50 = metric.value
            break
        case 'FID':
            webVitalsData.eVar51 = metric.value
            break
        case 'CLS':
            webVitalsData.eVar52 = metric.value
            break
    }

    emitEvent({
        debug: config.debug,
        eventData: webVitalsData,
        eventName: `WebVitals: ${metric.name}`
    })
}

export default emitWebVitalsData
