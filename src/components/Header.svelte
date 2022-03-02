<script>
  import HeaderNavLink from '../atoms/HeaderNavLink.svelte'
  import LogoDateContainer from '../components/HeaderComponents/LogoDateContainer.svelte'

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
      linkTo: '/newsFeed.html',
      linkText: 'aktuality'
    },
    {
      linkTo: '/partners.html',
      linkText: 'partneři'
    },
    {
      linkTo: '/contact.html',
      linkText: 'kontakt'
    },
  ]

</script>

<header class="bg-white py-4">
  <nav class="flex justify-around items-center">
    <LogoDateContainer />
    <ul class="nav-items flex space-x-8">
      {#each navLinks as navLink}
          <HeaderNavLink linkTo={navLink.linkTo} linkText={navLink.linkText} />
      {/each}
    </ul>
  </nav>
</header>