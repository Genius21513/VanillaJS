import getClickType from './get-click-type'

const link = document.createElement('a')
const locationOrigin = 'http://itech.media'
const interactionFlag = false
const linkIsAffLink = false

test('click is an External type', () => {
    link.href = 'https://www.cardschat.com'

    const clickType = getClickType(link, interactionFlag, linkIsAffLink, locationOrigin)

    expect(clickType).toBe('External')
})

test('click is an Internal type', () => {
    link.href = 'http://itech.media/#login'

    const clickType = getClickType(link, interactionFlag, linkIsAffLink, locationOrigin)

    expect(clickType).toBe('Internal')
})

test('click is an Interaction type', () => {
    link.href = 'http://itech.media/login'
    const interactionFlag = true

    const clickType = getClickType(link, interactionFlag, linkIsAffLink, locationOrigin)

    expect(clickType).toBe('Interaction')
})

test('click is a Partner type', () => {
    link.href = 'https://www.ecogra.org'
    const interactionFlag = false
    const linkIsAffLink = true

    const clickType = getClickType(link, interactionFlag, linkIsAffLink, locationOrigin)

    expect(clickType).toBe('Partner')
})
