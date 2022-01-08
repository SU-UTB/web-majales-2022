<script>
  import FooterManagerItem from '../atoms/FooterManagerItem.svelte'
  import FooterNavLink from '../atoms/FooterNavLink.svelte'
  import FooterLink from '../atoms/FooterLink.svelte'
  import SocialsContainer from '../components/SocialsContainer.svelte'

  const managers = [
    {
      name: 'LEONA VYHNÁLKOVÁ',
      pos: 'hlavní manažer',
      mail: 'vyhnalkova@sutb.cz'
    },
    {
      name: 'rastislav škojec',
      pos: 'fundraising',
      mail: 'skojec@sutb.cz'
    },
    {
      name: 'MICHAELA FILIPCOVÁ',
      pos: 'public relations',
      mail: 'filipcova@sutb.cz'
    },
  ]

  const president = {
    name: 'adam utíkal',
    pos: 'prezident Studentské unie',
    mail: 'utikal@sutb.cz'    
  }

  const navLinks = [
    {
      linkTo: '/partneri',
      linkText: 'partneři'
    },
    {
      linkTo: '/kontakty',
      linkText: 'kontakt'
    },
  ]
</script>

<footer class="bg-dark_blue md:px-8 md:py-16 flex flex-col md:flex-row justify-around">
  <div class="footer-nav-links">
    {#each navLinks as navLink}
      <div class="footer-nav-link">
        <FooterNavLink linkTo={navLink.linkTo} linkText={navLink.linkText} />
      </div>
    {/each}
  </div>
  <div class="managers flex flex-col justify-between space-y-4">
    {#each managers as manager}
      <div class="footer-manager-item">
        <FooterManagerItem managerName={manager.name} managerPos={manager.pos} managerMail={manager.mail} />
      </div>
    {/each}
  </div>
  <div class="footer-contacts flex flex-col justify-between">
    <div>
      <SocialsContainer />
      <div class="footer-contact-links flex flex-col md:mt-6">
        <FooterLink linkTo="su.utb.cz" />
        <FooterLink linkTo="utb.cz" />
      </div>
    </div>
    <div class="footer-president">
      <FooterManagerItem managerName={president.name} managerPos={president.pos} managerMail={president.mail} />
    </div>
  </div>
</footer>

<style>
</style>