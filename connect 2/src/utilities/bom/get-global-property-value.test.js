import getGlobalPropValue from './get-global-property-value'

// eslint-disable-next-line no-global-assign
window = Object.create(window)

Object.defineProperty(
    window,
    'nested',
    {
        value: { object: { key: { value: 'secret' } } }
    }
)

test('extract nested object from window', () => {
    const globalPropValue = getGlobalPropValue('nested.object.key.value')

    expect(globalPropValue).toBe('secret')
})

test('return default value when object doesnt exist in window', () => {
    const globalPropValue = getGlobalPropValue('nested.missingObject.key.value', 'default')

    expect(globalPropValue).toBe('default')
})
