<script>
  import VerticalSocials from '../shared/VerticalSocials.svelte'
  import LandingDate from '../../atoms/LandingDate.svelte'
  import Aftermovie from './Aftermovie.svelte'
</script>

<section id="landing" class="relative">
  <VerticalSocials />
  <div class="main-info md:w-4/5 mx-auto">
    <img src="../assets/home/home_majales_logo.png" alt="Majáles logo" class="mx-auto">
    <div class="flex flex-col w-4/5 items-end text-right md:-mt-40">
      <LandingDate />
      <h4 class="landing-desc txt-medium">největší studentský hudební <br />festival Zlínského kraje</h4>
    </div>
  </div>
  <Aftermovie />
</section>

<style>
  #landing {
    background: url('../assets/home/home_landing.png') no-repeat top;
    background-size: 100% 66%;
  }
  .landing-desc {
    font-size: 2.6rem;
  }
</style>