import isInteraction from './is-interaction'

const config = { interactionIndicatorsArray: ['#', 'javascript', '/img/'] }
const link = document.createElement('a')

test('link is a local interaction', () => {
    link.href = 'http://itech.media/#login'

    const linkIsInteraction = isInteraction(link, config)

    expect(linkIsInteraction).toBe(true)
})

test('link is javascript interaction', () => {
    link.href = 'javascript: someFunction()'

    const linkIsInteraction = isInteraction(link, config)

    expect(linkIsInteraction).toBe(true)
})

test('link is not a local interaction', () => {
    link.href = 'http://itech.media/login'

    const linkIsInteraction = isInteraction(link, config)

    expect(linkIsInteraction).toBe(false)
})

test('button is a local interaction', () => {
    const button = document.createElement('button')

    const buttonIsInteraction = isInteraction(button, config)

    expect(buttonIsInteraction).toBe(true)
})

test('href has an empty value', () => {
    link.href = '#'

    const linkIsInteraction = isInteraction(link, config)

    expect(linkIsInteraction).toBe(true)
})

test('href attribute does not exist', () => {
    const linkIsInteraction = isInteraction(link, config)

    expect(linkIsInteraction).toBe(true)
})
