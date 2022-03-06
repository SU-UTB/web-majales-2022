<script>
  import NavToPageBluButton from '../../atoms/NavToPageBluBtn.svelte'
</script>

<section id="king-queen" class="text-white">
  <div class="md:w-4/5 mx-auto py-8 md:py-16 flex flex-wrap items-center">
    <div class="king-queen-img w-1/2">
      <img src="../assets/home/king_queen.png" alt="král a královna Majálesu">
    </div>
    <div class="king-queen-desc w-1/2">
      <h5 class="section-heading text-left text-light_blu md:w-4/5 lg:w-3/5 mb-8">Král a královna <br />Majálesu</h5>
      <p class="md:w-4/5 lg:w-3/5 xl:w-1/2 text-dark_blu_txt">
        Utkej se společně se svým fakultním parťákem v Majálesovém turnaji a vybojujte si titul krále a královny univerzity!
      </p>
      <p class="mb-8 md:mb-12 text-dark_blu_txt">
        <span class="txt-bold">
          18. 4. spouštíme registrace
        </span>
        , budete mít natrénováno na urozené disciplíny? Ale nezaspi na vavřínech, registrovat se můžeš do 
        <span class="txt-bold">1. 5.!</span>
      </p>
      <NavToPageBluButton linkText="více informací" linkTo="./majalesKing.html" />
    </div>
  </div>
</section>

<style>
</style>