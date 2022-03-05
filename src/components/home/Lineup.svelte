<script>
  import NavPageButton from '../../atoms/NavPageButton.svelte'

  const bands = [
    {
      bandImg: '',
      bandImgAlt: '',
    }
  ]
</script>


<section id="lineup" class="md:w-4/5 mx-auto pt-4 mb-32">
  <div class="lineup-header lg:w-10/12">
    <h5 class="text-light_blu text-3xl text-right font-semibold mb-8">Line-up</h5>
  </div>
  <div class="gallery md:w-4/5 mx-auto">
    {#each bands as band}
      
    {/each}
  </div>
  <div class="">
    <NavPageButton linkText="všichni interpreti" linkTo="./lineup.html" />
  </div>
</section>