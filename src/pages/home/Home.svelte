<script>
  import Footer from '../../components/shared/Footer.svelte'
  import Header from '../../components/shared/Header.svelte'

  import Landing from '../../components/home/Landing.svelte'
  import Aftermovie from '../../components/home/Aftermovie.svelte'
  import About from '../../components/home/About.svelte'
  import Lineup from '../../components/home/Lineup.svelte'
  import BandContest from '../../components/home/BandContest.svelte'
  import KingQueen from '../../components/home/KingQueen.svelte'
  import Partners from '../../components/home/Partners.svelte'
</script>

<Header />
<main>
  <Landing />
  <Aftermovie />
  <About />
  <Lineup />
  <BandContest />
  <KingQueen />
  <Partners />
</main>
<Footer />

<style>
  h1 {
    text-align: center;
  }
</style>