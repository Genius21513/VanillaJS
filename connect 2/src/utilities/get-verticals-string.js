const getVerticalsString = ({ vertical = null, subVertical = null, triVertical = null }) => {
    const verticalString = `Vertical:${vertical}`
    let subVerticalsString = ''

    if (subVertical !== null) {
        subVerticalsString = `:::SubVerticals:${subVertical}`
    }

    let triVerticalsString = ''

    if (triVertical !== null) {
        triVerticalsString = `:::TriVerticals:${triVertical}`
    }

    return verticalString + subVerticalsString + triVerticalsString
}

export default getVerticalsString
