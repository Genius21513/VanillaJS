const getUserDeviceType = ({ mobile = false, tablet = false }) => {
    let deviceType = 'Desktop'

    if (mobile) {
        deviceType = 'Mobile'
    }

    if (tablet) {
        deviceType = 'Tablet'
    }

    return deviceType
}

export default getUserDeviceType
