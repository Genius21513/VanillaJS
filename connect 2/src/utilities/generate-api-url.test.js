import generateApiUrl from './generate-api-url'

test('generates api url', () => {
    const config = {
        apiUrl: '//api.test/data',
        apiUsername: 'James',
        apiPassword: 'Bond'
    }

    const apiUrl = generateApiUrl(config)

    expect(apiUrl).toBe('//api.test/data&username=James&password=Bond')
})

test('generates api url - return null on missing host', () => {
    const config = {
        // apiUrl: '//api.test/data',
        apiUsername: 'James',
        apiPassword: 'Bond'
    }

    const apiUrl = generateApiUrl(config)

    expect(apiUrl).toBe(null)
})
test('generates api url - return null on missing username', () => {
    const config = {
        apiUrl: '//api.test/data',
        // apiUsername: 'James',
        apiPassword: 'Bond'
    }

    const apiUrl = generateApiUrl(config)

    expect(apiUrl).toBe(null)
})

test('generates api url - return null on missing password', () => {
    const config = {
        apiUrl: '//api.test/data',
        apiUsername: 'James'
        // apiPassword: 'Bond'
    }

    const apiUrl = generateApiUrl(config)

    expect(apiUrl).toBe(null)
})
