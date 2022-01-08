<script>
  export let managerName, managerPos, managerMail
</script>
<h6 class="manager-name text-turq_light uppercase">{ managerName }</h6>
<p class="manager-position">{ managerPos }</p>
<a href={`mailto:${managerMail}`}>{ managerMail }</a>