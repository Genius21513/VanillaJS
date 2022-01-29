import generateTransactionId from './generate-transaction-id'

const config = {
    transactionIdSiteNumber: 123456789
}

test('generates transaction ID', () => {
    const transactionId = generateTransactionId(config)

    expect(transactionId.length)
        .toBeGreaterThan(config.transactionIdSiteNumber.toString().length)
})

test('generates transaction ID as a string', () => {
    const transactionId = generateTransactionId(config)

    expect(typeof transactionId)
        .toBe('string')
})

test('generates transaction ID with transactionIdSiteNumber', () => {
    const transactionId = generateTransactionId(config)

    const transactionIdSiteNumber = transactionId.slice(
        0,
        config.transactionIdSiteNumber.toString().length
    )

    expect(transactionIdSiteNumber)
        .toBe(config.transactionIdSiteNumber.toString())
})

test('throws error if missing transactionIdSiteNumber', () => {
    expect(() => generateTransactionId({}))
        .toThrow('Missing transaction ID site number')
})
