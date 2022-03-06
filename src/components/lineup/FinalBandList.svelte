<script>
import SectionHeading from "../../atoms/SectionHeading.svelte";


const finalBands = [
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
]
</script>

<section id="final-band-list">
  <SectionHeading sectionHeadingText="Finalisté soutěže kapel" class="text-light_blu" />
  {#each finalBands as finalBand}
    <div class="final-band-item">
      <img src={finalBand.imgSrc} alt={finalBand.imgAlt}>
    </div>
  {/each}
</section>