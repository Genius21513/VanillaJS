const getBreadcrumbs = ({ breadcrumbsSelector }) => {
    const breadcrumbs = document.querySelectorAll(breadcrumbsSelector)

    let breadcrumbsString = ''
    breadcrumbs.forEach((breadcrumb, i) => {
        breadcrumbsString += `${i !== 0 ? '::' : ''}${breadcrumb.textContent.trim()}`
    })

    return breadcrumbsString
}

export default getBreadcrumbs
