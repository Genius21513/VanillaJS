import { getElementAttributeValue } from '../../utilities/'
import completedFormEvent from './completed-form-event';
import initFormEvent from './init-form-event';

const addFormEventListener = (config) => {
    const formEventTypes = ["change", "submit"];

    window.initForms = window.initForms || []
    window.completedForms = window.completedForms || []

    formEventTypes.forEach((formEventType) => {
        document.body.addEventListener(formEventType, (event) => {
            let form = event.target.closest('form');
            let formName = getElementAttributeValue(form, 'data-form-track');

            // if form is true
            if (form && formName) {
                formEventType==="change"?
                    initFormEvent({form, formName}, config)
                    :''
                formEventType==="submit"? 
                    completedFormEvent({form, formName}, config)
                    :'';
                
            }
        });
    });
}

export default addFormEventListener
