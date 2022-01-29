import getSearchParamValue from './get-search-param-value'

test('extract search term from URL', () => {
    // eslint-disable-next-line no-global-assign
    window = Object.create(window)

    Object.defineProperty(
        window,
        'location',
        {
            value: { href: 'https://test.url' }
        }
    )

    window.location.search = '?dummyParam1=foo&mySearchParam=mySearchTerm&dummyParam2=bar'
    const searchTerm = getSearchParamValue({ searchParam: 'mySearchParam' })
    expect(searchTerm).toBe('mySearchTerm')
})
