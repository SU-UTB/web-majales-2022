<script>
  import LandingHeading from "../../atoms/LandingHeading.svelte"
  import SectionWrapper from "../../atoms/SectionWrapper.svelte"
  import VerticalSocials from "../shared/VerticalSocials.svelte"
</script>

<section id="landing-news" class="relative">
  <VerticalSocials class="top-10 md:top-1/2 left-10" />
  <SectionWrapper class="py-40">
    <LandingHeading landingHeadingText="Co se u nás právě děje?" class="text-white pt-6 mb-4" />
    <div class="about-news md:w-3/5">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eu lorem risus commodo a eu. Eros sollicitudin bibendum enim mauris, montes, consequat morbi. Faucibus a in ac ultricies senectus eget pretium, et sed. Maecenas eu volutpat morbi habitant</p>
    </div>
  </SectionWrapper>
</section>

<style>
  #landing-news {
    background: url('../assets/news/news_landing.png') no-repeat;
    background-position-y: 10%;
    background-size: auto;
  }
</style>