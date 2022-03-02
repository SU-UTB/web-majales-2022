<script>
  export let linkTo
  export let isMailLink
</script>

<a 
  href={isMailLink ? `mailto:${linkTo}` : `https://${linkTo}`} 
  target="_blank"
  rel="noopener noreferrer"
  class="text-dark_blu underline max-w-max"
>
  {linkTo}
</a>