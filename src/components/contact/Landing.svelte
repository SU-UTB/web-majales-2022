<script>
  import LandingHeading from '../../atoms/LandingHeading.svelte'
  import VerticalSocials from '../shared/VerticalSocials.svelte'

</script>
<section id="landing-contact" class="relative bg-su_orange py-12 w-full">
  <VerticalSocials class="left-10 top-8 md:top-52 lg:top-64" />
  <div class="main-info md:w-4/5 lg:w-3/5 mx-auto px-8 md:px-4 flex flex-col justify-center">
    <LandingHeading landingHeadingText="Náš manažerský tým je tu pro vás!" class="text-white mb-4" />
    <div class="landing-desc md:w-1/2">
      <p>Rádi byste navázali spolupráci? Něco byste změnili? Máte dotaz?<br /><span class="txt-bold">Naši hvězdní manažeři jsou vám k dispozici, neváhejte se nám ozvat!</span></p>
    </div>
  </div>
</section>

<style>
  #landing-contact {
    background: url('../assets/contact/contact_landing.png') no-repeat center;
    background-size: 100% 100%;
  }

  .main-info {
    min-height: 50vh;
  }

  @media screen and (min-width: 768px) {
    .main-info {
      min-height: 36vh;
    }
  }
  
</style>