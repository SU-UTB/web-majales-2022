<script>
  import ContactList from '../../components/contact/ContactList.svelte'
import GoogleMap from '../../components/contact/GoogleMap.svelte';
  import Landing from '../../components/contact/Landing.svelte'

  import Footer from '../../components/shared/Footer.svelte'
  import Header from '../../components/shared/Header.svelte'
</script>

<Header />
<main>
  <Landing />
  <ContactList />
  <GoogleMap />
</main>
<Footer />