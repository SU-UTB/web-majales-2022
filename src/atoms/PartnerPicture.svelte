<script>
  export let src, imgAlt
  export let linkTo
</script>

<a href={linkTo} target="_blank" rel="noopener noreferrer">
  <picture class="{$$props.class}">
    <source srcset={`${src}.webp`} type="image/webp">
    <source srcset={`${src}.png`} type="image/png">
    <img class="block object-contain object-center mx-auto" width="250px" height="250px" src={`${src}.png`} alt={imgAlt}>
  </picture>
</a>

<style>
  img {
    width: 250px;
    height: 250px;
  }
</style>