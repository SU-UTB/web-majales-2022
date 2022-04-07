<script>
  import LandingHeading from "../../atoms/LandingHeading.svelte"
  import NavToPageWhiteBtn from "../../atoms/NavToPageWhiteBtn.svelte"
  import SectionWrapper from "../../atoms/SectionWrapper.svelte"
  import VerticalSocials from "../shared/VerticalSocials.svelte"
</script>

<section id="landing-king" class="relative py-32">
  <VerticalSocials class="lg:top-72 lg:left-10" />
  <SectionWrapper>
    <LandingHeading landingHeadingText="Ať panuje ten nejlepší!" class="text-white mb-4" />
    <div class="about-lineup flex items-center flex-wrap">
      <div class="about-txt md:w-3/5 xl:w-1/2">
        <p class="text-white txt-bold mb-2">Jsi studentem nebo studentkou UTB a&nbsp;myslíš, že máš modrou krev?</p>
        <p class="text-white">Utkej se v Majálesovém turnaji a&nbsp;vybojuj titul krále nebo královny univerzity! Přihlaš sebe nebo vaše duo do <span class="txt-bold">1. 5.</span> a&nbsp;ukaž, kdo vládne na UTB!</p>
      </div>
      <div class="register-btn mt-12 md:mt-0 md:ml-8 lg:ml-10 xl:ml-12">
        <NavToPageWhiteBtn blank=true linkTo="https://docs.google.com/forms/d/1OdwDsAbSIjbJw9RzmeTneiEAmWY37mked_KPqKg-RIU/" linkText="registruj se!" />
      </div>
    </div>
  </SectionWrapper>
</section>

<style>
  #landing-king {
    background: url('../assets/king/m_king_landing.png') no-repeat top;
    background-size: cover;
  }

  @media screen and (min-width: 640px) {
    #landing-king {
      background: url('../assets/king/king_landing.png') no-repeat top;
      background-size: cover;
    }
  }
</style>