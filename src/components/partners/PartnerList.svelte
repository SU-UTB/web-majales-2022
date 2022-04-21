<script>
import PartnerBox from "../../atoms/PartnerBox.svelte";

import PartnerPicture from "../../atoms/PartnerPicture.svelte";
import PartnerSection from "../../atoms/PartnerSection.svelte";



  const generalPartner = {
    partnerImg: './assets/partners/logos/oveckarna',
    partnerImgAlt: 'Ovečkárna'
  }
  
  const logisticPartner = {
    partnerImg: './assets/partners/logos/posta_bez_hranic',
    partnerImgAlt: 'Pošta bez hranic'
  }

  const bandContestPartner = {
    partnerImg: './assets/partners/logos/zubr',
    partnerImgAlt: 'Zubr'
  }
  
  const mainPartners = [
    {
      partnerImg: './assets/partners/logos/svoboda_brezik',
      partnerImgAlt: 'svoboda brezik',
    },
    {
      partnerImg: './assets/partners/logos/is_produkce',
      partnerImgAlt: 'IS Produkce',
    },
    {
      partnerImg: './assets/partners/logos/zlin',
      partnerImgAlt: 'Zlín',
    },
    {
      partnerImg: './assets/partners/logos/kalina',
      partnerImgAlt: 'kalina',
    },
    {
      partnerImg: './assets/partners/logos/vest',
      partnerImgAlt: 'vest',
    },
    {
      partnerImg: './assets/partners/logos/graspo',
      partnerImgAlt: 'graspo',
    },
    {
      partnerImg: './assets/partners/logos/ms_elektro',
      partnerImgAlt: 'ms elektro',
    },
    {
      partnerImg: './assets/partners/logos/zlinsky_kraj',
      partnerImgAlt: 'zlinsky kraj',
    },
    {
      partnerImg: './assets/partners/logos/captain_morgan',
      partnerImgAlt: 'captain morgan',
    },
    {
      partnerImg: './assets/partners/logos/cisty_festival_ekokom',
      partnerImgAlt: 'cisty festival ekokom',
    },
  ]
  
  const partners = [
    {
      partnerImg: './assets/partners/logos/zlinstav',
      partnerImgAlt: 'zlinstav',
    },
    {
      partnerImg: './assets/partners/logos/dimer',
      partnerImgAlt: 'dimer',
    },
    {
      partnerImg: './assets/partners/logos/nadace_tomase_bati',
      partnerImgAlt: 'nadace tomase bati',
    },
    {
      partnerImg: './assets/partners/logos/awl',
      partnerImgAlt: 'awl',
    },    
    {
      partnerImg: './assets/partners/logos/teplarna_otrokovice',
      partnerImgAlt: 'teplarna otrokovice',
    },
    {
      partnerImg: './assets/partners/logos/leaves',
      partnerImgAlt: 'leaves',
    },
    {
      partnerImg: './assets/partners/logos/nextbike',
      partnerImgAlt: 'nextbike',
    },
    {
      partnerImg: './assets/partners/logos/burger',
      partnerImgAlt: 'burger',
    },
    {
      partnerImg: './assets/partners/logos/exitroom_zlin',
      partnerImgAlt: 'exitroom zlin',
    },
    {
      partnerImg: './assets/partners/logos/faency_fries',
      partnerImgAlt: 'faency fries',
    },
    {
      partnerImg: './assets/partners/logos/impacthub_zlin_blue',
      partnerImgAlt: 'impacthub zlin blue',
    },    
    {
      partnerImg: './assets/partners/logos/kfc',
      partnerImgAlt: 'kfc',
    },
    {
      partnerImg: './assets/partners/logos/laser_game_zlin',
      partnerImgAlt: 'laser game zlin',
    },
    {
      partnerImg: './assets/partners/logos/makalu',
      partnerImgAlt: 'makalu',
    },
    {
      partnerImg: './assets/partners/logos/mdz',
      partnerImgAlt: 'mdz',
    },
    {
      partnerImg: './assets/partners/logos/matchball',
      partnerImgAlt: 'matchball'
    }
  ]

  const medialPartners = [
    {
      partnerImg: './assets/partners/logos/medial/inzlin_logo',
      partnerImgAlt: 'inzlin',
    },
    {
      partnerImg: './assets/partners/logos/medial/jsem_ze_zlina',
      partnerImgAlt: 'jsem ze zlina',
    },
    {
      partnerImg: './assets/partners/logos/medial/kudyznudy',
      partnerImgAlt: 'kudyznudy',
    },
    {
      partnerImg: './assets/partners/logos/medial/cesky_rozhlas_zlin',
      partnerImgAlt: 'zlin cesky rozhlas',
    },
  ]

  const organizators = [
    {
      partnerImg: './assets/partners/logos/utb',
      partnerImgAlt: 'utb',
    },
    {
      partnerImg: './assets/partners/logos/studentska_unie',
      partnerImgAlt: 'studentska unie',
    },
  ]
  </script>

<section id="partner-list">
  <div class="partners-gallery flex flex-col items-center px-8 md:w-4/5 mx-auto py-12">
    <PartnerSection>
      <h4 class="txt-extrabold text-5xl mb-8 text-center">Generální partner</h4>
      <PartnerBox>
        <PartnerPicture src={generalPartner.partnerImg} imgAlt={generalPartner.partnerImgAlt} />
      </PartnerBox>
    </PartnerSection>

    <PartnerSection>
      <h4 class="txt-extrabold text-4xl text-center">Logistický partner</h4>
      <PartnerBox>
        <PartnerPicture src={logisticPartner.partnerImg} imgAlt={logisticPartner.partnerImgAlt} />
      </PartnerBox>
    </PartnerSection>

    <PartnerSection>
      <h4 class="txt-extrabold text-2xl text-center mb-8">Hlavní partneři</h4>
      <div class="main-partners flex flex-wrap justify-around mb-8 md:mb-16">
        {#each mainPartners as mainPartner}
          <PartnerBox>
            <PartnerPicture src={mainPartner.partnerImg} imgAlt={mainPartner.partnerImgAlt} />
          </PartnerBox>
        {/each}
      </div>
    </PartnerSection>

    <PartnerSection>
      <h4 class="txt-extrabold text-2xl text-center mb-8">Partneři</h4>
      <div class="partners flex flex-wrap justify-around mb-8 md:mb-16">
        {#each partners as partner}
          <PartnerBox>
            <PartnerPicture src={partner.partnerImg} imgAlt={partner.partnerImgAlt} />
          </PartnerBox>
        {/each}
      </div>
    </PartnerSection>

    <PartnerSection>
      <h4 class="txt-extrabold text-2xl text-center mb-8">Mediální partneři</h4>
      <div class="medial-partners flex flex-wrap justify-around mb-8 md:mb-16">
        {#each medialPartners as medialPartner}
        <PartnerBox>
          <PartnerPicture src={medialPartner.partnerImg} imgAlt={medialPartner.partnerImgAlt} />
        </PartnerBox>
        {/each}
      </div>
    </PartnerSection>

    <PartnerSection>
      <h4 class="txt-extrabold text-2xl text-center">Partner soutěže kapel</h4>
      <PartnerBox>
        <PartnerPicture src={bandContestPartner.partnerImg} imgAlt={bandContestPartner.partnerImgAlt} />
      </PartnerBox>
    </PartnerSection>

    <PartnerSection>
      <h4 class="txt-extrabold text-2xl text-center mb-4">Organizátoři</h4>
      <div class="partners flex flex-wrap justify-around">
        {#each organizators as organizator}
        <PartnerBox>
          <PartnerPicture src={organizator.partnerImg} imgAlt={organizator.partnerImgAlt} />
        </PartnerBox>
        {/each}
      </div>
    </PartnerSection>
  </div>
</section>