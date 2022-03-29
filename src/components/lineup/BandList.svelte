<script>
import BandDesc from "../../atoms/BandDesc.svelte";

  import SectionHeading from "../../atoms/SectionHeading.svelte";
import VerticalBandSoc from "../../atoms/VerticalBandSoc.svelte";
import LineupBand from "../../molecules/LineupBand.svelte";
  

  const udg = {
    imgSrc: './assets/lineup/band1.png',
    bandName: 'UDG',
    bandType: 'CZ POP/ROCK',
    spotify: '',
    ig: '',
    width: 950,
    height: 350
  }

  const vojtano = {
    imgSrc: './assets/lineup/band2.png',
    bandName: 'VOJTAANO',
    bandType: 'CZ FOLK POP, FOLK RAP',
    spotify: '',
    ig: '',
    width: 626,
    height: 650
  }

  const bandsFirst = [    
    {
      imgSrc: './assets/lineup/band3.png',
      bandName: 'CIRCUS PROBLEM',
      bandType: 'CZ/EN BALKAN BRASS',
      spotify: '',
      ig: '',
      width: 465,
      height: 280
    },
    {
      imgSrc: './assets/lineup/band4.png',
      bandName: 'MANIAK',
      bandType: 'CZ RAP',
      spotify: '',
      ig: '',
      width: 465,
      height: 280
    },
  ]

  const bandsSecond = [
    
    {
      imgSrc: './assets/lineup/band5.png',
      bandName: 'JAKUB DĚKAN',
      subName: '& BAND',
      bandType: 'CZ ACOUSTIC POP',
      spotify: '',
      ig: '',
      width: 788,
      height: 420
    },
    {
      imgSrc: './assets/lineup/band7.png',
      bandName: 'TROCHA KLIDU',
      bandType: 'CZ POP/ROCK',
      spotify: '',
      ig: '',
      width: 787,
      height: 420
    }
  ]
  </script>
  
  <div id="band-list" class="py-20 w-4/5 mx-auto overflow-hidden">
    <div class="band-list-first flex flex-wrap">
      <div class="lg:grid w-full lg:w-8/12 grid-cols-2 lg:grid-rows-2 lg:gap-2 lg:px-2">
        <LineupBand class="w-full col-span-2 mb-4 lg:mb-0" band={udg}>
          <div class="absolute bottom-10 left-8" slot="band-desc">
            <h3 class="text-white text-4xl txt-bold">{udg.bandName}</h3>
            <p class="text-white text-lg">{udg.bandType}</p>
          </div>
          <VerticalBandSoc class="top-16 left-8" slot="band-socials" />
        </LineupBand>
        {#each bandsFirst as band}
          <LineupBand class="w-full mb-4 lg:mb-0" band={band}>
            <div class="absolute bottom-10 left-8" slot="band-desc">
              <h3 class="text-white text-4xl txt-bold">{band.bandName}</h3>
              <p class="text-white text-lg">{band.bandType}</p>
            </div>
            <VerticalBandSoc class="top-16 left-8" slot="band-socials" />
          </LineupBand>
        {/each}
      </div>
      <LineupBand class="w-full lg:w-4/12 mb-4 lg:mb-0" band={vojtano}>
        <div class="absolute bottom-10 right-8" slot="band-desc">
          <h3 class="text-white text-4xl txt-bold">{vojtano.bandName}</h3>
          <p class="text-white text-lg">{vojtano.bandType}</p>
        </div>
        <VerticalBandSoc class="bottom-48 right-8" slot="band-socials" />
      </LineupBand>
    </div>
    <div class="band-list-second flex lg:py-2 lg:pl-2">
      <div class="lg:grid w-full grid-cols-2 lg:grid-rows-1 lg:gap-2">
        {#each bandsSecond as band}
          <LineupBand class="w-full mb-4 lg:mb-0" band={band}>
            <div class="absolute bottom-10 left-8" slot="band-desc">
              <h3 class="text-white text-4xl txt-bold">{band.bandName}
                {#if band.subName}
                  <sup class="text-white text-lg">{band.subName}</sup>
                {/if}
              </h3>
              <p class="text-white text-lg">{band.bandType}</p>
            </div>
            <VerticalBandSoc class="bottom-12 right-8" slot="band-socials" />
          </LineupBand>
        {/each}
      </div>
    </div>
  </div>