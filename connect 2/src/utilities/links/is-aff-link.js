export const isAffLink = (link, { outboundLinkFolder }) => {
    return link.href.includes(outboundLinkFolder)
}

export default isAffLink
