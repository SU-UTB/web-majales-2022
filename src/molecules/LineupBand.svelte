<script>
  export let band
</script>

<div class="relative {$$props.class}">
  <slot name="band-socials"></slot>
  <slot name="band-desc"></slot>
  <img class="block object-cover object-center w-full h-full" src={band.imgSrc} alt={band.bandName}>
</div>

