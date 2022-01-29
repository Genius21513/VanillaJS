import getElementAttributeValue from './get-element-attribute-value'

test('get element attribute value', () => {
    const link = document.createElement('a')
    link.title = 'Link Title'

    const title = getElementAttributeValue(link, 'title')

    expect(title).toBe('Link Title')
})
