import appendParamToLink from './append-param-to-link'

test('adds search param to url', () => {
    const link = document.createElement('a')

    link.href = 'http://itech.media/'
    link.href = appendParamToLink(link, 'ID', 12345)

    expect(link.href).toBe('http://itech.media/?ID=12345')
})
