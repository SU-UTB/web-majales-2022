<script>
  import FooterItemHeadline from '../../atoms/FooterItemHeadline.svelte'
  import FooterManagerItem from '../../molecules/FooterManagerItem.svelte'
  import FooterNavLink from '../../atoms/FooterNavLink.svelte'
  import FooterLink from '../../atoms/FooterLink.svelte'
  import SocialsContainer from './FooterComponents/SocialsContainer.svelte'


  const managers = [
    {
      name: 'LEONA VYHNÁLKOVÁ',
      pos: 'manažerka projektu',
      mail: 'vyhnalkova@sutb.cz'
    },
    {
      name: 'Rastík škojec',
      pos: 'koordinátor spolupráce',
      mail: 'skojec@sutb.cz'
    },
    {
      name: 'MICHAELA FILIPCOVÁ',
      pos: 'public relations',
      mail: 'filipcova@sutb.cz'
    },
  ]

  const behindTheScenesGuyz = [
    {
      name: 'Adam Utíkal',
      pos: 'statutární zástupce',
      mail: 'utikal@sutb.cz'    
    },
    {
      name: 'Fifko Tomeš',
      pos: 'správa webu a IT',
      mail: ''    
    },
    {
      name: 'Klárka bárová',
      pos: 'webdesign a vizuální zpracování',
      mail: ''    
    }
  ]

  const navLinks = [
    {
      linkTo: '/lineup.html',
      linkText: 'lineup'
    },
    {
      linkTo: '/bandContest.html',
      linkText: 'soutěž kapel'
    },
    {
      linkTo: '/majalesKing.html',
      linkText: 'král majálesu'
    },
    {
      linkTo: '/partners.html',
      linkText: 'partneři'
    },
    {
      linkTo: '/contact.html',
      linkText: 'kontakt'
    }
  ]

  const footerLinks = [
    {
      linkTo: 'sunovy.utb.cz',
    },
    {
      linkTo: 'utb.cz',
    },
    {
      linkTo: 'su@utb.cz',
      isMailLink: true
    }
  ]
</script>

<footer class="py-12">
  <div class="footer-inner flex flex-col items-center md:items-start md:flex-row text-center md:text-left justify-around">
    <div class="footer-nav-links mb-4 md:mb-0">
      <FooterItemHeadline headlineText="majáles" class="mb-4 md:mb-6" />
      {#each navLinks as navLink}
        <div class="footer-nav-link mb-2">
          <FooterNavLink linkTo={navLink.linkTo} linkText={navLink.linkText} />
        </div>
      {/each}
      <div class="footer-contact-links flex flex-col mt-4 md:mt-6 items-center md:items-start">
        {#each footerLinks as footerLink}
          <FooterLink isMailLink={footerLink.isMailLink} linkTo={footerLink.linkTo} />
        {/each}
      </div>
    </div>
    <div class="managers flex flex-col justify-between space-y-8 my-4 md:my-0">
      {#each managers as manager}
        <div class="footer-manager-item">
          <FooterManagerItem managerName={manager.name} managerPos={manager.pos} managerMail={manager.mail} />
        </div>
      {/each}
    </div>
    <div class="footer-contacts flex flex-col items-center md:items-start">
        <SocialsContainer />
      <div class="footer-guyz flex flex-col">
        {#each behindTheScenesGuyz as guy}
          <div class="footer-guy-item mb-8">
            <FooterManagerItem managerName={guy.name} managerPos={guy.pos} managerMail={guy.mail} />
          </div>
        {/each}
      </div>
    </div>
  </div>
  <h6 class="text-center mt-8 md:mt-12 uppercase txt-bold">©Studentská unie utb, 2022</h6>
</footer>

<style>
  footer {
    background-image: url('../assets/footer_img.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>