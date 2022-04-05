<script>
  export let srcDesktop, srcMobile, imgAlt
</script>

<picture>
  <source media="(max-width: 768px)" srcset={srcMobile}>
  <source media="(min-width: 768px)" srcset={srcDesktop}>
  <img class="block object-cover object-center w-full h-full" src={srcMobile} alt={imgAlt}>
</picture>