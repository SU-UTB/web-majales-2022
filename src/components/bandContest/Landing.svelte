<script>
  import LandingHeading from "../../atoms/LandingHeading.svelte"
  import NavToPageWhiteBtn from "../../atoms/NavToPageWhiteBtn.svelte"
  </script>
  
  <section id="landing-band-contest" class="relative py-12 flex items-center">
    <div class="md:w-4/5 lg:w-3/5 mx-auto px-8 md:px-4">
      <LandingHeading landingHeadingText="Nech sebe a svou kapelu zazářit!" class="text-white mb-4" />
      <div class="about-lineup flex items-center flex-wrap">
        <div class="about-txt md:w-3/5">
          <p class="text-white txt-bold mb-2">Patří hudba neodmyslitelně k tvému životu?</p>
          <p class="text-white">Máš kapelu nebo po večerech produkuješ vlastní hudbu a hledáš příležitost, jak zahrát před pořádným publikem? Tady jednu máš! Přihlas sebe nebo svou partu do soutěže kapel, deadline je <span class="txt-bold">31. 3.</span></p>
        </div>
        <div class="register-btn mt-12 md:mt-0 md:ml-8 lg:ml-12">
          <NavToPageWhiteBtn linkTo="" linkText="registruj se!" />
        </div>
      </div>
    </div>
  </section>
  
  <style>
    #landing-band-contest {
      background: url('../assets/band_contest/band_contest_landing.png') no-repeat center;
      background-size: cover;
      min-height: 46vh;
    }
  </style>