<script>
  import VerticalSocials from '../shared/VerticalSocials.svelte'
  import LandingDate from '../../atoms/LandingDate.svelte'
  import Aftermovie from './Aftermovie.svelte'
</script>

<section id="landing" class="relative py-16 md:py-0 md:pb-40">
  <VerticalSocials class="lg:top-72 lg:left-10" />
  <div class="main-info md:w-4/5 mx-auto">
    <img src="./assets/home/home_majales_logo.png" alt="Majáles logo" class="mx-auto">
    <div class="flex flex-col px-4 sm:px-20 md:px-16 2xl:px-0 items-end text-right -mt-8 sm:-mt-20 md:-mt-20 lg:-mt-36 2xl:-mt-40 2xl:w-4/5">
      <LandingDate />
      <h4 class="landing-desc text-white txt-medium ">největší studentský hudební <br />festival Zlínského kraje</h4>
    </div>
  </div>
</section>

<style>
  #landing {
    background: url('../assets/home/m_home_landing.png') no-repeat top;
    background-size: cover;
  }

  .landing-desc {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 640px) {
    #landing {
      background: url('../assets/home/home_landing.png') no-repeat top;
      background-size: cover;
    }
    .landing-desc {
      font-size: 2.2rem;
    }
  }
</style>