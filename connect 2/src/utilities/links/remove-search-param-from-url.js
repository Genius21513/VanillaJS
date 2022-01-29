const removeSearchParamFromUrl = (linkUrl, paramName) => {
    const url = new URL(linkUrl)
    const searchParams = url.searchParams

    searchParams.delete(paramName)

    return url.origin + url.pathname + (
        (searchParams.toString().length > 0)
            ? '?' + searchParams.toString()
            : ''
    )
}

export default removeSearchParamFromUrl
