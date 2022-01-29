const isInteraction = (clickTarget, { interactionIndicatorsArray }) => {
    let isInteraction = true

    if (clickTarget.href !== undefined && !!clickTarget.href) {
        isInteraction = interactionIndicatorsArray.some(
            ((href, interactionIndicator) => href.includes(interactionIndicator)).bind(null, clickTarget.href)
        )
    }

    return isInteraction
}

export default isInteraction
