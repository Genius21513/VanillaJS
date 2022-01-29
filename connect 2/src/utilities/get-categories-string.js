const getCategoriesString = ({ category = null, subCategories = [] }) => {
    const categoryString = `Category:${category}`
    let subCategoriesString = ''

    if (Array.isArray(subCategories) && subCategories.length > 0) {
        subCategoriesString = `:::SubCategories:${subCategories.join()}`
    }

    return categoryString + subCategoriesString
}

export default getCategoriesString
