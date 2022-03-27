<script>
  export let linkTo, linkText
</script>

  <a 
  href={linkTo}
  class=" text-dark_blu inline-block bg-white uppercase txt-bold text-lg px-8 py-4 {$$props.class}"
>
  {linkText}
</a>  

<style>
  a {
    text-decoration: none;
  }
</style>