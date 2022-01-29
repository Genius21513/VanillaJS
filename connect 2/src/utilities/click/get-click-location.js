import getClickLocationFromContainersArray from './get-click-location-from-containers-array'
import getClickLocationFromDataset from './get-click-location-from-dataset'

const getClickLocation = (clickTarget, { linkContainersArray, linkContainerDatasetName }) => {
    let clickLocation = getClickLocationFromDataset(clickTarget, linkContainerDatasetName)

    if (!clickLocation) {
        clickLocation = getClickLocationFromContainersArray(clickTarget, linkContainersArray)
    }

    return clickLocation
}

export default getClickLocation
