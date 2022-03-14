<script>
  import VerticalSocials from '../shared/VerticalSocials.svelte'
  import LandingDate from '../../atoms/LandingDate.svelte'
  import Aftermovie from './Aftermovie.svelte'
</script>

<section id="landing" class="relative">
  <VerticalSocials class="left-10 top-10 md:top-52" />
  <div class="main-info md:w-4/5 mx-auto">
    <img src="../assets/home/home_majales_logo.png" alt="Majáles logo" class="mx-auto">
    <div class="flex flex-col px-4 sm:px-20 md:px-16 2xl:px-0 items-end text-right -mt-8 sm:-mt-20 md:-mt-20 lg:-mt-36 2xl:-mt-40 2xl:w-4/5">
      <LandingDate />
      <h4 class="landing-desc txt-medium">největší studentský hudební <br />festival Zlínského kraje</h4>
    </div>
  </div>
  <Aftermovie />
</section>

<style>


  #landing {
    background: url('../assets/home/m_home_landing.png') no-repeat top;
    background-size: 100% 80%;
  }

  .landing-desc {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 768px) {
    #landing {
      background: url('../assets/home/home_landing.png') no-repeat top;
      background-size: 100% 66%;
    }
    .landing-desc {
      font-size: 2.2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    #landing {
      background-size: 100% 70%;
    }
  }
  
  
</style>