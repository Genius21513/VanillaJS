const getClickLocationFromContainersArray = (link, linkContainersArray) => {
    const clickContainersSelectorsArray = linkContainersArray
        .map((clickContainer) => clickContainer.linkContainerSelectors)
        .flat()

    const containerEl = clickContainersSelectorsArray.length > 0
        ? link.closest(clickContainersSelectorsArray)
        : null

    let clickLocation = 'Content'
    let closestElementString = ''
    if (containerEl !== null) {
        if (containerEl.id !== '') {
            closestElementString = containerEl.id
        } else {
            closestElementString = containerEl.className
        }
        if (containerEl.tagName !== '' && closestElementString === '') {
            closestElementString = containerEl.tagName.toLowerCase()
        }
    }

    if (closestElementString !== '') {
        linkContainersArray.forEach((clickContainer) => {
            clickContainer.linkContainerSelectors.forEach((clickContainerSelector) => {
                if (closestElementString.includes(clickContainerSelector.replace('.', '').replace('#', ''))) {
                    clickLocation = clickContainer.linkContainerName
                }
            })
        })
    }

    return clickLocation
}

export default getClickLocationFromContainersArray
