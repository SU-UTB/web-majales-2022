<script>
import ResponsivePictureBand from "../atoms/ResponsivePictureBand.svelte";


  export let band
</script>

<div class="relative {$$props.class}">
  <slot name="band-socials"></slot>
  <slot name="band-desc"></slot>
  <ResponsivePictureBand class="block object-cover object-center w-full h-full" srcDesktop={band.imgSrc} srcMobile={band.imgSrcM} imgAlt={band.bandName} />
</div>

