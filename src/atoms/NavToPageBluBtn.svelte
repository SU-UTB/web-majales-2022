<script>
  export let linkTo, linkText
  export let blank = false
</script>

  <a 
  target={blank ? "_blank" : "_self"}
  href={linkTo}
  rel="noopener noreferrer"
  class="inline-block text-white bg-dark_blu uppercase txt-bold text-lg px-8 py-4"
>
  {linkText}
</a>  

<style>
  a {
    text-decoration: none;
  }
</style>