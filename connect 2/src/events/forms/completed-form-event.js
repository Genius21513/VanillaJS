import {
    getElementAttributeValue,
    getPersistentSiteData,
} from '../../utilities/'
import emitEvent from '../emit-event'

const completedFormEvent = ({ form, formName}, config) => {
    const listCompletedForms = window.completedForms || [];
    if (listCompletedForms.includes(formName)) return;
    window.completedForms.push(formName);

    const eventType = 'o'
    const eventName = "Form Completed"

    const formData = {
        ...getPersistentSiteData(),
        eVar66: formName,
        event21: eventName,
    }

    emitEvent({
        debug: config.debug,
        eventData: formData,
        eventName: eventName,
        eventType
    })
}

export default completedFormEvent
