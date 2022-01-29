<template>
    <div class="gallery">
        <h2>Videos 2</h2>
        
        <div class="wistia_responsive_padding" style="margin: 5% 15%; padding:45% 0 0 0;position:relative;">
            <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                <div class="wistia_embed wistia_async_ao6dkl93ql videoFoam=true" style="height:100%;position:relative;width:100%">
                    <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                        <img src="../assets/swatch.jpeg" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>



<script>

export default {
    name: 'GalleryImages',
    mounted() {
        var scripts = [
            "https://fast.wistia.com/embed/medias/ao6dkl93ql.jsonp",
            "https://fast.wistia.com/assets/external/E-v1.js",
            "https://fast.wistia.com/embed/medias/3ndi1j8aci.jsonp"
        ];

        scripts.forEach(script => {
            let tag = document.createElement("script")
            tag.setAttribute("src", script)
            tag.async =  true
            document.head.appendChild(tag)
        });
    },
}
</script>
