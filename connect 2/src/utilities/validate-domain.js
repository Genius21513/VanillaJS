import md5 from 'md5'
import getLocationPropertyValue from './dom/get-location-property-value'

const validateDomain = ({ domainHash = null } = {}) => {
    const currentDomainHash = md5(getLocationPropertyValue('host'))

    // no hash === no validation, we assume domain is correct
    if (domainHash === null) {
        return true
    }

    return (domainHash === currentDomainHash)
}

export default validateDomain
