// returns value from `window` object by given path (propPath)
// or undefined (defaultValue) if the path doesn't exist
const getGlobalPropValue = (propPath, defaultValue = undefined) => {
    if (typeof propPath === 'string') {
        propPath = propPath.split('.')
    }

    // iterates through `propPath` array to get the value of the last item in the array
    return propPath.reduce((object, key) => (object && object[key] ? object[key] : defaultValue), window)
}

export default getGlobalPropValue
