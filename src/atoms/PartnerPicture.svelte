<script>
  export let src, imgAlt
</script>

<picture class="{$$props.class}">
  <source srcset={`${src}.webp`} type="image/webp">
  <source srcset={`${src}.png`} type="image/png">
  <img class="block object-contain object-center mx-auto" width="250px" height="250px" src={`${src}.png`} alt={imgAlt}>
</picture>

<style>
  img {
    width: 250px;
    height: 250px;
  }
</style>