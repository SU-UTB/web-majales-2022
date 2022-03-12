<script>
  import LandingHeading from "../../atoms/LandingHeading.svelte"
  import NavToPageWhiteBtn from "../../atoms/NavToPageWhiteBtn.svelte"
import SectionWrapper from "../../atoms/SectionWrapper.svelte"
import About from "./About.svelte";
  </script>
  
  <section id="landing-band-contest" class="relative py-12">
    <SectionWrapper class="flex flex-col justify-center h-full">
      <LandingHeading landingHeadingText="Nech sebe a svou kapelu zazářit!" class="text-white mb-4 pt-8" />
      <div class="about-lineup flex items-center flex-wrap">
        <div class="about-txt md:w-3/5 xl:w-1/2">
          <p class="text-white txt-bold mb-2">Patří hudba neodmyslitelně k tvému životu?</p>
          <p class="text-white">Máš kapelu nebo po večerech produkuješ vlastní hudbu a hledáš příležitost, jak zahrát před pořádným publikem? Tady jednu máš! <br />Přihlas sebe nebo svou partu do soutěže kapel, deadline je <span class="txt-bold">31. 3.</span></p>
        </div>
        <div class="register-btn mt-12 md:mt-0 md:ml-8 lg:ml-10 xl:ml-12">
          <NavToPageWhiteBtn linkTo="" linkText="registruj se!" />
        </div>
      </div>
    </SectionWrapper>
    <About />
  </section>
  
  <style>
    #landing-band-contest {
      background: url('../assets/band_contest/band_contest_landing.png') no-repeat top;
      background-size: 100% 50%;
      min-height: 46vh;
    }
  </style>