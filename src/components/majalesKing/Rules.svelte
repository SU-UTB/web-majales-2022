<script>
  import NavToPageBluBtn from "../../atoms/NavToPageBluBtn.svelte"
  import SectionHeading from "../../atoms/SectionHeading.svelte"
  </script>
  
  <section id="rules-band-contest" class="pt-12 relative -top-40">
    <div class="flex justify-center px-8 md:px-4">
      <div class="w-full md:w-4/5 xl:w-3/5">
        <SectionHeading class="text-light_blu">
          <span slot="raw-txt">Pravidla pro účast v soutěži Král a&nbsp;Královna Majálesu UTB 2022</span>
        </SectionHeading>
        <ol class="">
          <li>Zúčastnit se může každý, kdo je <span class="txt-bold">v tomto roce studentem UTB</span> (i dálkové studium).</li>
          <li>Soutěží se <span class="txt-bold">v párech.</span> Každý pár se musí skládat z jednoho muže a&nbsp;jedné ženy.</li>
          <li>Celý tým musí být ze <span class="txt-bold">stejné fakulty.</span></li>
          <li>Registrovat se je možné <span class="txt-bold">od 18. 4. 00:01 do 1. 5. 23:59.</span></li>
          <li>Registrace probíhá pomocí přihlašovacího formuláře.</li>
          <li>Pro výhru v soutěži je potřeba účastnit se <span class="txt-bold">všech kol soutěže,</span> které proběhnou <span class="txt-bold">6. 5. v areálu konání akce.</span> <br />Způsob jednotlivých soutěžních kol bude upřesněn. <span class="txt-bold">Kola budou bodovaná.</span></li>
          <li>Čas a&nbsp;místo srazu v den soutěže bude upřesněn skrze e-maily účastníků.</li>
        </ol>
        <div class="mt-12 md:mt-20">
          <NavToPageBluBtn linkText="registruj se!" linkTo="" />
        </div>
      </div>
    </div>
  </section>
  
  <style>
    li {
      margin-bottom: 1rem;
    }
  </style>