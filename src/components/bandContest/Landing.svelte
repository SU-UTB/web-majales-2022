<script>
  import LandingHeading from "../../atoms/LandingHeading.svelte"
  import NavToPageWhiteBtn from "../../atoms/NavToPageWhiteBtn.svelte"
  import SectionWrapper from "../../atoms/SectionWrapper.svelte"  
</script>
  
<section id="landing-band-contest" class="relative py-32">
  <SectionWrapper class="flex flex-col justify-center h-full">
    <LandingHeading landingHeadingText="Nech sebe a svou kapelu zazářit!" class="text-white mb-4" />
    <div class="about-lineup flex items-center flex-wrap">
      <div class="about-txt md:w-3/5 xl:w-1/2">
        <p class="text-white txt-bold mb-2">Patří hudba neodmyslitelně k tvému životu?</p>
        <p class="text-white">Máš kapelu nebo po večerech produkuješ vlastní hudbu a&nbsp;hledáš příležitost, jak zahrát před pořádným publikem? Tady jednu máš! <br />Přihlas sebe nebo svou partu do soutěže kapel, deadline je <span class="txt-bold">31. 3.</span></p>
      </div>
      <div class="register-btn mt-12 md:mt-0 md:ml-8 lg:ml-10 xl:ml-12">
        <NavToPageWhiteBtn blank=true linkText="hlasuj!" linkTo="https://docs.google.com/forms/d/17IudnbZ7zvYDyLwqZ-tvyY214hpQp2ZLyT9RzQATTI0/" />
      </div>
    </div>
  </SectionWrapper>
</section>
  
<style>
  #landing-band-contest {
    background: url('../assets/band_contest/m_band_contest_landing.png') no-repeat top;
    background-size: cover;
  }

  @media screen and (min-width: 768px) {
    #landing-band-contest {
      background: url('../assets/band_contest/band_contest_landing.png') no-repeat top;
      background-size: cover;
    }
  }
</style>