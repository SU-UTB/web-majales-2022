<script>
  import FooterManagerItem from '../atoms/FooterManagerItem.svelte'

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
    // {
    //   name: 'adam utíkal',
    //   pos: 'prezident Studentské unie',
    //   mail: 'utikal@sutb.cz'
    // },
  ]
</script>

<footer class="bg-dark_blue">
  <div class="footer-manager-item">
    {#each managers as manager}
      <FooterManagerItem managerName={manager.name} managerPos={manager.pos} managerMail={manager.mail} />
    {/each}
  </div>
</footer>