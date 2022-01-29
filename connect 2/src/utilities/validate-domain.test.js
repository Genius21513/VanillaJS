import validateDomain from './validate-domain'

test('validates domain hash against correct hash', () => {
    const domainIsValid = validateDomain({ domainHash: 'ab1d1ee201fc082025c5df81e9465ca0' })

    expect(domainIsValid).toBe(true)
})

test('validates domain hash against wrong hash', () => {
    const domainIsValid = validateDomain({ domainHash: 'wrong-hash' })

    expect(domainIsValid).toBe(false)
})

test('validates domain hash against no hash', () => {
    // no hash === no validation, we assume domain is correct
    const domainIsValid = validateDomain()

    expect(domainIsValid).toBe(true)
})
