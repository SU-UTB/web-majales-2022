<script>
  import LandingHeading from "../../atoms/LandingHeading.svelte"
  import NavToPageWhiteBtn from "../../atoms/NavToPageWhiteBtn.svelte"
  import SectionWrapper from "../../atoms/SectionWrapper.svelte"
  import VerticalSocials from "../shared/VerticalSocials.svelte"
</script>

<section id="landing-king" class="relative py-32">
  <VerticalSocials class="top-10 md:top-1/2 left-10" />
  <SectionWrapper>
    <LandingHeading landingHeadingText="Ať panuje ten nejlepší!" class="text-white mb-4" />
    <div class="about-lineup flex items-center flex-wrap">
      <div class="about-txt md:w-3/5 xl:w-1/2">
        <p class="text-white txt-bold mb-2">Jsi studentem nebo studentkou UTB a myslíš, že máš modrou krev?</p>
        <p class="text-white">Utkej se v Majálesovém turnaji a vybojuj titul krále nebo královny univerzity! Přihlaš sebe nebo vaše duo do <span class="txt-bold">1. 5.</span> a ukaž, kdo vládne na UTB!</p>
      </div>
      <div class="register-btn mt-12 md:mt-0 md:ml-8 lg:ml-10 xl:ml-12">
        <NavToPageWhiteBtn linkTo="" linkText="registruj se!" />
      </div>
    </div>
  </SectionWrapper>
</section>

<style>
  #landing-king {
    background: url('../assets/king/king_landing.png') no-repeat top;
    background-size: cover;
  }
</style>