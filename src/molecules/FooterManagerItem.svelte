<script>
  import FooterItemHeadline from '../atoms/FooterItemHeadline.svelte'
  export let managerName, managerPos, managerMail
</script>
<FooterItemHeadline headlineText={managerName} />
<p class="manager-position">{ managerPos }</p>
<a href={`mailto:${managerMail}`}>{ managerMail }</a>