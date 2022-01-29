import getClickLocationFromDataset from './get-click-location-from-dataset'

const config = {
    linkContainerDatasetName: 'cklickContainerLabel'
}
test('without data attribute location is undefined', () => {
    const link = document.createElement('a')
    const clickLocation = getClickLocationFromDataset(link, config.linkContainerDatasetName)

    expect(clickLocation).toBe(undefined)
})

test('click location based on data attribute', () => {
    const link = document.createElement('a')

    link.dataset.cklickContainerLabel = 'Location based on dataset'

    const clickLocation = getClickLocationFromDataset(link, config.linkContainerDatasetName)

    expect(clickLocation).toBe('Location based on dataset')
})
