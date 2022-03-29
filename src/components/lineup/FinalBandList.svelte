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

<section id="final-band-list" class="py-12">
  <div class="w-full md:w-4/5 xl:w-3/5 mx-auto">
    <SectionHeading sectionHeadingText="Finalisté soutěže kapel" class="text-light_blu" />
    {#each finalBands as finalBand}
      <div class="final-band-item">
        <img src={finalBand.imgSrc} alt={finalBand.imgAlt}>
      </div>
    {/each}
  </div>
</section>