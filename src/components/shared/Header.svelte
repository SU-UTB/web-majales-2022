<script>
  import HamburgerBtn from '../../atoms/HamburgerBtn.svelte'
  import HeaderNavLink from '../../atoms/HeaderNavLink.svelte'
  import HorizontalSocials from './HeaderComponents/HorizontalSocials.svelte'
  import LogoDateContainer from './HeaderComponents/LogoDateContainer.svelte'

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

  let toggledMenu = false

</script>

<header class="w-full h-20 fixed top-0 z-10">
  <nav class="flex justify-around items-center bg-white relative h-full">
    <LogoDateContainer />
    <HamburgerBtn active={toggledMenu}  handleClick={ () => toggledMenu = !toggledMenu } />
    <ul 
      class="nav-items w-full lg:pt-4 lg:w-auto flex flex-col lg:flex-row items-center lg:space-x-8 space-y-4 lg:space-y-0 absolute lg:static bg-white top-20 lg:top-0" 
      class:toggledMenu>
      {#each navLinks as navLink}
        <HeaderNavLink linkTo={navLink.linkTo} linkText={navLink.linkText} />
      {/each}
      <HorizontalSocials />
    </ul>
  </nav>
</header>

<style>

@media screen and (max-width: 1023px) {
  .nav-items {
    padding: 5% 0;
    transition: .4s;
    transform: translateX(100%);
    z-index: 3;
    box-shadow: 0px 5px 10px -5px rgba(32, 16, 135, 0.5);
  }
}

.toggledMenu {
  transform: translateX(0%);
}

header {
  box-shadow: 0px 4px 15px rgba(32, 16, 135, 0.5);
}
  
</style>