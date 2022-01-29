import getLocationPropertyValue from './get-location-property-value'

test('returns given property from location object', () => {
    const origin = getLocationPropertyValue('origin')

    expect(origin).toBe('http://itech.media')
})
