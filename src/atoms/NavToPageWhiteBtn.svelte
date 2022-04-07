<script>
  export let linkTo, linkText
  export let blank = false
</script>

  <a 
  target={blank ? "_blank" : "_self"}
  href={linkTo}
  rel="noopener noreferrer"
  class=" text-dark_blu inline-block bg-white uppercase txt-bold text-lg px-8 py-4 text-center {$$props.class}"
>
  {linkText}
</a>  

<style>
  a {
    text-decoration: none;
  }
</style>