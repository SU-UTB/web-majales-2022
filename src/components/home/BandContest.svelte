<script>
  import NavToPageBluButton from '../../atoms/NavToPageBluBtn.svelte'
</script>


<section id="band-contest" class="text-white">
  <div class="md:w-4/5 lg:w-3/5 mx-auto py-8 md:py-16 px-8 md:px-0">
    <h5 class="section-heading text-left md:w-4/5 lg:w-3/5 mb-8">Soutěž kapel</h5>
    <p class="md:w-4/5 lg:w-3/5 xl:w-1/2">
      <span class="txt-bold">Nech sebe a svou kapelu zazářit!</span>
      Nezkusíš, nezažiješ. Přímo na Majálesu se tváří v tvář kolegům utkáte o hlavní cenu, kterou je <span class="txt-bold">roční zásoba piva!</span>
    </p>
    <p class="mb-8 md:mb-12">
      <span class="txt-bold">
        Pošli do 31. 3. svou registraci
      </span>
      a ukaž, co v tobě je!
    </p>
    <NavToPageBluButton linkText="více informací" linkTo="./bandContest.html" />
  </div>
</section>

<style>
  #band-contest {
    background: url('../assets/home/home_band_contest.png') no-repeat center;
  }
</style>