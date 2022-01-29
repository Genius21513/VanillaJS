const appendParamToLink = (link, param, value) => {
    const url = new URL(link.href)
    const searchParams = url.searchParams

    searchParams.set(param, value)

    return url.toString()
}

export default appendParamToLink
