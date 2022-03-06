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
  <SectionHeading sectionHeadingText="Finalisté soutěže kapel" />
  {#each finalBands as finalBand}
    <div class="final-band-item">
      <img src={finalBand.imgSrc} alt={finalBand.imgAlt}>
    </div>
  {/each}
</section>