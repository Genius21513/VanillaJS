const removeOriginFromUrl = (linkUrl, locationOrigin) => {
    return linkUrl.replace(locationOrigin, '')
}

export default removeOriginFromUrl
