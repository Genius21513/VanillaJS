const getClickLocationFromDataset = (clickTarget, linkContainerDatasetName) => {
    let clickLocation
    if (linkContainerDatasetName && clickTarget.dataset[linkContainerDatasetName]) {
        clickLocation = clickTarget.dataset[linkContainerDatasetName]
    }

    return clickLocation
}

export default getClickLocationFromDataset
