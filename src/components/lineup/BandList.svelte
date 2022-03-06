<script>
  import SectionHeading from "../../atoms/SectionHeading.svelte";
  
  const bands = [
    {
      imgSrc: '',
      imgAlt: ''
    },
    {
      imgSrc: '',
      imgAlt: ''
    },
    {
      imgSrc: '',
      imgAlt: ''
    },
    {
      imgSrc: '',
      imgAlt: ''
    },
    {
      imgSrc: '',
      imgAlt: ''
    }
  ]
  </script>
  
  <section id="band-list">
    {#each bands as band}
      <div class="band-item">
        <img src={band.imgSrc} alt={band.imgAlt}>
      </div>
    {/each}
  </section>