<script>

const mainPartners = [
  {
    partnerImg: '',
    partnerImgAlt: '',
  }
]

const partners = [
  {
    partnerImg: '',
    partnerImgAlt: '',
  }
]
</script>

<section id="partners" class="md:w-4/5 lg:w-4/5 mx-auto">
  <h5 class="text-3xl text-right mr-8 text-light_blu font-semibold mb-8">Naši partneři</h5>
  <div class="partners-gallery">
    {#each mainPartners as mainPartner}

    {/each}
    {#each partners as partner}

    {/each}
  </div>
</section>