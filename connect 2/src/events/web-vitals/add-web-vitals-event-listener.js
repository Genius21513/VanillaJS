import { getLCP, getFID, getCLS } from 'web-vitals'
import emitWebVitalsData from './emit-web-vitals-data'

const addWebVitalsEventListener = (config) => {
    const metrics = {}

    getCLS(emitWebVitalsData.bind(metrics, config))
    getFID(emitWebVitalsData.bind(metrics, config))
    getLCP(emitWebVitalsData.bind(metrics, config))
}

export default addWebVitalsEventListener
