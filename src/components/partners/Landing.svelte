<script>
  import LandingHeading from "../../atoms/LandingHeading.svelte"
  import VerticalSocials from "../shared/VerticalSocials.svelte"
</script>

<section id="landing-partners" class="relative py-12">
  <VerticalSocials class="lg:top-72 lg:left-10" />
  <div class="flex justify-around items-center flex-wrap">
    <div class="img-section w-full md:w-4/5 lg:w-2/5">
      <img src="./assets/partners/majales_logo.png" alt="Majáles UTB Zlín 2022">
    </div>
    <div class="heading-section w-full md:w-4/5 lg:w-2/5 px-8 md:px-0">
      <LandingHeading landingHeadingText="S kým to na vás hrajeme?" class="text-white mb-4" />
      <div class="about-lineup flex items-center flex-wrap">
        <div class="about-txt md:w-full 2xl:w-4/5">
          <p class="text-white txt-bold mb-2">Staňte se partnerem a&nbsp;nechte si zahrát, po čem vaše srdce touží.</p>
          <p class="text-white">Koncept a&nbsp;formu spolupráce můžeme upravit podle vašich požadavků do podoby individuální nabídky.
            Pojďte do toho s námi, ať je letošní ročník nebesky skvělý! <span class="txt-bold"> Ozvěte se nám na <a class="txt-bold" href="mailto:skojec@sutb.cz">skojec@sutb.cz</a>.</span></p>
        </div>
      </div>
    </div>    
  </div>
</section>

<style>
  #landing-partners {
    background: url('../assets/partners/m_partners_landing.png') no-repeat top;
    background-size: cover;
  }

  @media screen and (min-width: 640px) {
    #landing-partners {
      background: url('../assets/partners/partners_landing.png') no-repeat top;
      background-size: cover;
    }
  }
</style>