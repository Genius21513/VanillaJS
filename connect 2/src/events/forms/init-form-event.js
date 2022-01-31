import {
    getElementAttributeValue,
    getPersistentSiteData,
} from '../../utilities/'
import emitEvent from '../emit-event'

const initFormEvent = ({ form, formName}, config) => {
    const listInitForms = window.initForms || [];
    if (listInitForms.includes(formName)) return;
    window.initForms.push(formName);

    const eventType = 'o'
    const eventName = "Form Initiated"

    const formData = {
        ...getPersistentSiteData(),
        eVar66: formName,
        event20: eventName,
    }

    emitEvent({
        debug: config.debug,
        eventData: formData,
        eventName: eventName,
        eventType
    })
}

export default initFormEvent
