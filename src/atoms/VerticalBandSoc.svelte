<script>
  export let spotifyLink, igLink
</script>

<div class="vertical-band-soc flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 absolute {$$props.class}">
  <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
    <img src="./assets/lineup/spotify.svg" alt="spotify logo" class="w-6 h-6 xl:w-10 xl:h-10">
  </a>
  <a href={igLink} target="_blank" rel="noopener noreferrer">
    <img src="./assets/lineup/ig.svg" alt="spotify logo" class="w-6 h-6 xl:w-10 xl:h-10">
  </a>
</div>