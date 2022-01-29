import generateRandomNumber from './generate-random-number'

test('generates random number', () => {
    const randomNumbersArray = []
    let duplicates = []

    for (let i = 0; i < 15; i++) {
        randomNumbersArray.push(generateRandomNumber())

        duplicates = randomNumbersArray.reduce(
            (accumulator, number, index, array) => {
                if (array.indexOf(number) !== index && accumulator.indexOf(number) < 0) {
                    accumulator.push(number)
                }
                return accumulator
            },
            []
        )
    }

    expect(duplicates.length).toBe(0)
})
