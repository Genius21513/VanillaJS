import { appendParamToLink, generateTransactionId, isAffLink } from "../../utilities";
import initButtonClickEvent from "./init-button-click-event";
import initLinkClickEvent from "./init-link-click-event";

const addClickEventListener = (config) => {
    const clickEventTypes = ["click", "auxclick"];

    clickEventTypes.forEach((clickEventType) => {
        document.body.addEventListener(clickEventType, (event) => {

            // form is returned
            let pNode = event.target.closest('form');
            if (pNode) return;
            
            //a tag
            const link = event.target.closest("a");

            if (link !== null) {
                const linkIsAffLink = isAffLink(link, config);
                const transactionId = generateTransactionId(config);

                if (linkIsAffLink) {
                    link.href = appendParamToLink(link, config.fullFunnelQueryParamName, transactionId);
                }

                initLinkClickEvent({ link, linkIsAffLink, transactionId }, config);
            }

            //button
            const button = event.target.closest("button");

            if (link === null && button !== null) {
                initButtonClickEvent({ button }, config);
            }
        });
    });
};

export default addClickEventListener;
