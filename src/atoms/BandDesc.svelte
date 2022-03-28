<script>
  export let bandName, bandType, bandSubName
</script>

<div class="band-desc absolute {$$props.class}">
  <h3 class="text-white text-4xl txt-bold">{bandName}</h3>
  {#if bandSubName}
    <sup class="text-white text-lg">{bandSubName}</sup>
  {/if}
  <p class="text-white text-lg">{bandType}</p>
</div>