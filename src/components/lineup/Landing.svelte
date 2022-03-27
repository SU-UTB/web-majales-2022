<script>
import LandingHeading from "../../atoms/LandingHeading.svelte";

  import SectionHeading from "../../atoms/SectionHeading.svelte"
  import VerticalSocials from "../shared/VerticalSocials.svelte"
</script>

<section id="landing-lineup" class="py-12 relative">
  <VerticalSocials class="lg:top-72 lg:left-10" />
  <div class="flex justify-around">
    <img src="" alt="">
    <div class="about-lineup md:w-2/5 px-8 md:px-4 my-8 md:my-0">
      <LandingHeading landingHeadingText="Koho si můžete letos poslechnout?" class="text-light_blu mb-4" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eu lorem risus commodo a eu. Eros sollicitudin bibendum enim mauris, montes, consequat morbi. Faucibus a in ac ultricies senectus eget pretium, et sed. Maecenas eu volutpat morbi habitant. Scelerisque aliquam turpis turpis aliquet pellentesque sagittis facilisis mi habitasse. Donec tristique pulvinar amet, vestibulum semper et viverra vitae commodo. Augue sed justo, mattis ipsum vel id faucibus. </p>
    </div>
  </div>
</section>

<style>
  #landing-lineup {
    background: url('../assets/lineup/lineup_landing.png') no-repeat;
    background-position-y: -10vh;
    background-position-x: center;
    height: 140vh;
  }
</style>