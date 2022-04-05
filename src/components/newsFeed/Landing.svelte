<script>
  import LandingHeading from "../../atoms/LandingHeading.svelte"
  import VerticalSocials from "../shared/VerticalSocials.svelte"
</script>

<section id="landing-news" class="relative flex">
  <VerticalSocials class="lg:top-72 lg:left-10" />
  <div class="section-wrapper w-full text-right sm:text-left sm:w-4/5 mx-auto px-8 sm:px-4">
    <LandingHeading landingHeadingText="Co se u nás právě děje?" class="text-white mt-36 lg:ml-8 xl:mt-48 sm:mb-40 xl:mb-64" />
  </div>
</section>

<style>
  #landing-news {
    background: url('../assets/news/m_news_landing.png') no-repeat;
    background-position-y: 10%;
    background-size: 100% 100%;
    min-height: 60vh;
  }
  @media screen and (min-width: 640px) {
    #landing-news {
      background: url('../assets/news/news_landing.png') no-repeat;
      background-position-y: 10%;
    }
  }  
</style>