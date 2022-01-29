import addArcadeEventListener from "./arcade/add-arcade-event-listener";
import addVideoEventListener from "./video/add-video-event-listener";
import addWebVitalsEventListener from "./web-vitals/add-web-vitals-event-listener";
import addClickEventListener from "./clicks/add-click-event-listener";
import setPingEvents from "./pings/set-ping-events";

const events = (config) => {
    if (Math.random() >= config.webVitalsVisibilityPercent / 100 || config.debug) {
        addWebVitalsEventListener(config);
    }
    addClickEventListener(config);
    addArcadeEventListener(config);
    addVideoEventListener(config);
    setPingEvents(config);
};

export default events;
