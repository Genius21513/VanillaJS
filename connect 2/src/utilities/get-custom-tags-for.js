const getCustomTagsFor = (target, config) => {
    const { globalVariableName } = config
    const tagLocalNames = config[`${target}TagLocalNames`] || []
    const tagNames = config[`${target}TagNames`]

    const localTags = window[globalVariableName] || []
    const tags = {}

    // this makes usage and config much easier
    // but requires proper order in pageTagLocalNames
    tagNames.forEach((name, index) => {
        tags[name] = localTags[tagLocalNames[index]] || null
    })

    return tags
}

export default getCustomTagsFor
