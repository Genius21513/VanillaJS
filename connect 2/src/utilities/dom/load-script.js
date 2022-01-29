const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.onload = resolve
        script.onerror = reject
        script.src = src
        document.head.append(script)
    })
}

export default loadScript
