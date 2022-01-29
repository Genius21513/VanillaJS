import generateTimeStamp from './generate-time-stamp'

test('generates time stamp', () => {
    const timeStamp = generateTimeStamp()
    const time = new Date(timeStamp).getTime()

    expect(time).toBeGreaterThan(0)
})
