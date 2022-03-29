<script>
  import LandingHeading from "../../atoms/LandingHeading.svelte"
  import VerticalSocials from "../shared/VerticalSocials.svelte"
</script>

<section id="landing-news" class="relative flex items-center">
  <VerticalSocials class="lg:top-72 lg:left-10" />
  <div class="section-wrapper md:w-4/5 mx-auto px-8 md:px-4">
    <LandingHeading landingHeadingText="Co se u nás právě děje?" class="text-white md:pt-40 lg:ml-8 xl:pt-48 md:pb-64" />
  </div>
</section>

<style>
  

  #landing-news {
    background: url('../assets/news/m_news_landing.png') no-repeat;
    background-position-y: 10%;
    background-size: 100% 100%;
    min-height: 80vh;
  }
  @media screen and (min-width: 768px) {
    #landing-news {
      background: url('../assets/news/news_landing.png') no-repeat;
      background-position-y: 10%;
      background-size: cover;
      min-height: 0;
    }
  }  
</style>