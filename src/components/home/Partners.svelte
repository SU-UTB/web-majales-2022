<script>

const generalPartner = {
  partnerImg: './assets/partners/logos/oveckarna.png',
  partnerImgAlt: 'Ovečkárna'
}

const logisticPartner = {
  partnerImg: './assets/partners/logos/posta_bez_hranic.png',
  partnerImgAlt: 'Pošta bez hranic'
}

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
  <h5 class="section-heading text-right mr-8 text-light_blu mb-8">Naši partneři</h5>
  <div class="partners-gallery flex flex-col items-center">
    <div class="general-partner flex flex-col items-center my-20">
      <h4 class="txt-extrabold text-3xl mb-4 text-center">Generální partner</h4>
      <img src={generalPartner.partnerImg} alt={generalPartner.partnerImgAlt}>
    </div>
    <div class="logistic-partner flex flex-col items-center">
      <h4 class="txt-extrabold text-2xl text-center">Logistický partner</h4>
      <img src={logisticPartner.partnerImg} alt={logisticPartner.partnerImgAlt}>
    </div>
    {#each mainPartners as mainPartner}

    {/each}
    {#each partners as partner}

    {/each}
  </div>
</section>