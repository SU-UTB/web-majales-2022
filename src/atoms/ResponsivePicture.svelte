<script>
  export let srcDesktop, srcMobile, imgAlt
</script>

<picture class="{$$props.class}">
  <source media="(max-width: 768px)" srcset={srcMobile}>
  <source media="(min-width: 768px)" srcset={srcDesktop}>
    <img src="" alt={imgAlt}>
</picture>