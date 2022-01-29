const getDocumentPropertyValue = (propertyName, documentProperty = null) => {
    let documentPropertyValue

    if (documentProperty === null) {
        documentPropertyValue = document[propertyName]
    } else {
        documentPropertyValue = document[documentProperty][propertyName]
    }

    return documentPropertyValue || false
}

export default getDocumentPropertyValue
