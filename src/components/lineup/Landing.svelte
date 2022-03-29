<script>
import LandingHeading from "../../atoms/LandingHeading.svelte";
import NavToPageWhiteBtn from "../../atoms/NavToPageWhiteBtn.svelte";

  import SectionHeading from "../../atoms/SectionHeading.svelte"
  import VerticalSocials from "../shared/VerticalSocials.svelte"
import BandList from "./BandList.svelte";
</script>

<section id="landing-lineup" class="py-12 relative">
  <VerticalSocials class="lg:top-72 lg:left-10" />
  <div class="flex justify-around py-32">
    <img src="" alt="">
    <div class="about-lineup md:w-2/5 px-8 md:px-4 my-8 md:my-0">
      <LandingHeading landingHeadingText="Koho si můžete letos poslechnout?" class="text-white mb-4" />
      <p class="text-white">Od 14:30 se park před Baťovou vilou rozezní melodiemi interpretů ze Zlína i&nbsp;zbytku republiky! </p>
      <NavToPageWhiteBtn class="mt-12" linkText="nalaď majálesový playlist" linkTo="./" />
    </div>
  </div>
  <BandList />
</section>

<style>
  #landing-lineup {
    background: url('../assets/lineup/m_lineup_landing.png') no-repeat top;
    background-size: cover;
    background-position-y: -10vh;
    background-position-x: center;
  }

  @media screen and (min-width: 768px) {
    #landing-lineup {
      background: url('../assets/lineup/lineup_landing.png') no-repeat top;
      background-size: cover;
    }
  }
</style>