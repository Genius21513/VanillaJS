import { getPersistentSiteData, getElementAttributeValue } from '../../utilities/'
import emitEvent from '../emit-event'

const addFormEventListener = (config) => {
    const formEventTypes = ["change", "submit"];

    formEventTypes.forEach((formEventType) => {
        document.body.addEventListener(formEventType, (event) => {
            let pNode = event.target.closest('form');
            
            // pNode is form
            if (pNode) {
                const formName = getElementAttributeValue(pNode, 'data-form-track');

                if (formName === null) return;

                const eventType = 'o'
                const eventName = formEventType==="submit"? "Form Completed" : "Form Initiated"

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
        });
    });
}

export default addFormEventListener
