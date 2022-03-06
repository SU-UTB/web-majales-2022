<script>
import NavToPageWhiteBtn from "../../atoms/NavToPageWhiteBtn.svelte";

  import SectionHeading from "../../atoms/SectionHeading.svelte"
  </script>
  
  <section id="landing-band-contest" class="py-12">
    <div class="relative w-full flex flex-col items-center">
      <SectionHeading sectionHeadingText="Nech sebe a svou kapelu zazářit!" class="text-white mb-4" />
      <div class="about-lineup flex w-full md:w-2/3 items-center justify-between">
        <div class="about-txt">
          <p class="text-white txt-bold mb-2">Patří hudba neodmyslitelně k tvému životu?</p>
          <p class="text-black">Máš kapelu nebo po večerech produkuješ vlastní hudbu a hledáš příležitost, jak zahrát před pořádným publikem? Tady jednu máš! Přihlas sebe nebo svou partu do soutěže kapel, deadline je <span class="txt-bold">31. 3.</span></p>
        </div>
        <div class="register-btn">
          <NavToPageWhiteBtn linkTo="" linkText="registruj se!" />
        </div>
      </div>
    </div>
  </section>
  
  <style>
    #landing-band-contest {
      background: url('../') no-repeat center;
      background-size: cover;
    }
  </style>