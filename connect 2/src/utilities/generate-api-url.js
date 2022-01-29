const generateApiUrl = (
    {
        apiUrl = null,
        apiUsername = null,
        apiPassword = null
    }
) => {
    if (apiUrl == null || apiUsername === null || apiPassword === null) {
        return null
    }

    return `${apiUrl}&username=${apiUsername}&password=${apiPassword}`
}

export default generateApiUrl
