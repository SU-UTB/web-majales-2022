<script>
  export let linkTo, linkText
</script>

  <a 
  href={linkTo}
  class=" text-white bg-dark_blu uppercase txt-bold text-lg px-8 py-4"
>
  {linkText}
</a>  

<style>
  a {
    text-decoration: none;
    font-family: CabinetGroteskBold;
    letter-spacing: 0.01em;
  }
</style>