<script>
import LandingHeading from "../../atoms/LandingHeading.svelte";
import NavToPageWhiteBtn from "../../atoms/NavToPageWhiteBtn.svelte";

  import SectionHeading from "../../atoms/SectionHeading.svelte"
  import VerticalSocials from "../shared/VerticalSocials.svelte"
import BandList from "./BandList.svelte";
</script>

<section id="landing-lineup" class="py-6 md:py-12 relative">
  <VerticalSocials class="lg:top-72 lg:left-10" />
  <div class="flex justify-center lg:items-center lg:justify-around py-4 lg:py-32 flex-wrap">
    <video class="w-full px-8 md:px-16 lg:px-0 lg:w-1/2 xl:w-5/12 my-8 lg:my-12" muted autoplay loop >
      <source src="../assets/lineup/lineup_landing_vid.mp4" type="video/mp4">
    </video>
    <div class="about-lineup md:1/2 lg:w-2/5 xl:w-4/12 px-8 md:px-4 my-4 lg:my-8 md:my-0">
      <LandingHeading landingHeadingText="Koho si můžete letos poslechnout?" class="text-white mb-4" />
      <p class="text-white w-11/12 sm:w-8/12  lg:w-9/12 xl:w-7/12">Od 14:30 se park před Baťovou vilou rozezní melodiemi interpretů ze Zlína i&nbsp;zbytku republiky! </p>
      <NavToPageWhiteBtn class="mt-12" linkText="nalaď majálesový playlist" linkTo="./" />
    </div>
  </div>
  <BandList />
</section>

<style>
  #landing-lineup {
    background: url('../assets/lineup/m_lineup_landing.png') repeat-y top;
    background-size: contain;
    background-position-x: center;
  }

  @media screen and (min-width: 640px) {
    #landing-lineup {
      background: url('../assets/lineup/lineup_landing.png') no-repeat top;
      background-size: cover;
    }
  }
</style>