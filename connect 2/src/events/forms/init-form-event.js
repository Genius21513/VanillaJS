import {
    getElementAttributeValue,    
    getPersistentSiteData,    
} from '../../utilities/'
import emitEvent from '../emit-event'

const initFormEvent = ({ form }, config) => {
    const formName = getElementAttributeValue(form, 'data-form-track')

    const eventType = 'o'

    const formData = {
        ...getPersistentSiteData(),
        eVar66: formName,
        event20: "Form initiated",
    }

    emitEvent({
        debug: config.debug,
        eventData: formData,
        eventName: 'Form Initiated',
        eventType
    })
}

export default initFormEvent
