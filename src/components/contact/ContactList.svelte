<script>
  import ContactItem from '../../atoms/ContactItem.svelte'

  const contacts = [
    {
      name: 'LEONA VYHNÁLKOVÁ',
      pos: 'manažerka projektu',
      mail: 'vyhnalkova@sutb.cz'
    },
    {
      name: 'Adam Utíkal',
      pos: 'statutární zástupce',
      mail: 'utikal@sutb.cz' 
    },
    {
      name: 'Rastislav Škojec',
      pos: 'koordinátor spolupráce',
      mail: 'skojec@sutb.cz'
    },
    {
      name: 'MICHAELA FILIPCOVÁ',
      pos: 'public relations',
      mail: 'filipcova@sutb.cz'
    },
  ]
</script>

<section id="contact-list">
  {#each contacts as contact}
    <ContactItem />
  {/each}
</section>