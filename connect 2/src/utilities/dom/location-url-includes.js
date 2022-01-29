import getLocationPropertyValue from './get-location-property-value'

const urlIncludes = (string) => {
    const url = getLocationPropertyValue('href')

    if (url !== undefined) {
        return string ? url.includes(string) : false
    }

    return false
}

export default urlIncludes
