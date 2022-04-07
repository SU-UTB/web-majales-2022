<script>
import BandDesc from "../../atoms/BandDesc.svelte";

  import SectionHeading from "../../atoms/SectionHeading.svelte";
import VerticalBandSoc from "../../atoms/VerticalBandSoc.svelte";
import LineupBand from "../../molecules/LineupBand.svelte";
  

  const udg = {
    imgSrc: './assets/lineup/band1.png',
    imgSrcM: './assets/lineup/m_band1.png',
    bandName: 'UDG',
    bandType: 'CZ POP/ROCK',
    spotify: 'https://open.spotify.com/artist/142qig5MMgVIqfwDf1pFae?si=NLE_m8H-QCirpgxPNY7nvg',
    ig: 'https://instagram.com/udg_official?utm_medium=copy_link',
    width: 950,
    height: 350
  }

  const vojtano = {
    imgSrc: './assets/lineup/band2.png',
    imgSrcM: './assets/lineup/m_band2.png',
    bandName: 'VOJTAANO',
    bandType: 'CZ FOLK POP, FOLK RAP',
    spotify: 'https://open.spotify.com/artist/2wHicAG4gMIseKmYuPUcIw?si=B5o_gAELQLqQx7XJTl3GFw',
    ig: 'https://instagram.com/vojtaano.zavesky?utm_medium=copy_link',
    width: 626,
    height: 650
  }

  const bandsFirst = [    
    {
      imgSrc: './assets/lineup/band3.png',
      imgSrcM: './assets/lineup/m_band3.png',
      bandName: 'CIRCUS PROBLEM',
      bandType: 'CZ/EN BALKAN BRASS',
      spotify: 'https://open.spotify.com/artist/4qdvQfgXPe8YPr8neLX4Ld?si=G7ofv1wESfCdiNAbCpkB-g',
      ig: 'https://instagram.com/circusproblemband?utm_medium=copy_link',
      width: 465,
      height: 280
    },
    {
      imgSrc: './assets/lineup/band4.png',
      imgSrcM: './assets/lineup/m_band4.png',
      bandName: 'MANIAK',
      bandType: 'CZ RAP',
      spotify: 'https://open.spotify.com/artist/5j8tFACNcARCZifgjtUJa2?si=_lVcArZRTtS7DSH9NxyKLQ',
      ig: 'https://instagram.com/moneyjak?utm_medium=copy_link',
      width: 465,
      height: 280
    },
  ]

  const bandsSecond = [
    
    {
      imgSrc: './assets/lineup/band5.png',
      imgSrcM: './assets/lineup/m_band5.png',
      bandName: 'JAKUB DĚKAN',
      subName: '& BAND',
      bandType: 'CZ ACOUSTIC POP',
      spotify: 'https://open.spotify.com/artist/2pwjkmMQFMGyCn2oD6ON7Q?si=AWIZk56QRmySx-aGYGgIyQ',
      ig: 'https://instagram.com/jakubdekanband_official?utm_medium=copy_link',
      width: 788,
      height: 420
    },
    {
      imgSrc: './assets/lineup/band7.png',
      imgSrcM: './assets/lineup/m_band7.png',
      bandName: 'TROCHA KLIDU',
      bandType: 'CZ POP/ROCK',
      spotify: 'https://open.spotify.com/artist/4tof5QydIwHaXAilgL1HFA?si=dFAn8PcHT_Gsd56iO6RPaw',
      ig: 'https://instagram.com/trochaklidu?utm_medium=copy_link',
      width: 787,
      height: 420
    }
  ]
  </script>
  
  <div id="band-list" class="py-20 w-full px-4 md:px-0 md:w-4/5 mx-auto overflow-hidden">
    <div class="band-list-first flex flex-wrap">
      <div class="lg:grid w-full lg:w-8/12 grid-cols-2 lg:grid-rows-2 lg:gap-2 lg:px-2">
        <LineupBand class="w-full col-span-2 mb-4 lg:mb-0" band={udg}>
          <div class="absolute bottom-2 md:bottom-4 left-4 sm:left-8" slot="band-desc">
            <h3 class="text-white text-2xl sm:text-3xl lg:text-2xl 2xl:text-4xl txt-extrabold">{udg.bandName}</h3>
            <p class="text-white text-sm sm:text-lg">{udg.bandType}</p>
          </div>
          <VerticalBandSoc class="bottom-4 md:bottom-8 lg:top-14 right-4 sm:right-8 lg:left-8" slot="band-socials"
            spotifyLink={udg.spotify} igLink={udg.ig}
          />
        </LineupBand>
        {#each bandsFirst as band}
          <LineupBand class="w-full mb-4 lg:mb-0" band={band}>
            <div class="absolute bottom-2 md:bottom-4 left-4 sm:left-8" slot="band-desc">
              <h3 class="text-white text-2xl sm:text-3xl lg:text-2xl 2xl:text-4xl txt-extrabold">{band.bandName}</h3>
              <p class="text-white text-sm sm:text-lg">{band.bandType}</p>
            </div>
            <VerticalBandSoc class="bottom-4 md:bottom-8 lg:top-14 right-4 sm:right-8 lg:left-8 " slot="band-socials" 
            spotifyLink={band.spotify} igLink={band.ig}
            />
          </LineupBand>
        {/each}
      </div>
      <LineupBand class="w-full lg:w-4/12 mb-4 lg:mb-0" band={vojtano}>
        <div class="absolute bottom-2 md:bottom-4 left-4 sm:left-8 lg:right-8" slot="band-desc">
          <h3 class="text-white text-2xl sm:text-3xl lg:text-2xl 2xl:text-4xl txt-extrabold">{vojtano.bandName}</h3>
          <p class="text-white text-sm sm:text-lg">{vojtano.bandType}</p>
        </div>
        <VerticalBandSoc class="bottom-4 md:bottom-8 lg:bottom-48 right-4 sm:right-8" slot="band-socials" 
        spotifyLink={vojtano.spotify} igLink={vojtano.ig}
        />
      </LineupBand>
    </div>
    <div class="band-list-second flex lg:py-2 lg:pl-2">
      <div class="lg:grid w-full grid-cols-2 lg:grid-rows-1 lg:gap-2">
        {#each bandsSecond as band}
          <LineupBand class="w-full mb-4 lg:mb-0" band={band}>
            <div class="absolute bottom-2 md:bottom-4 left-4 sm:left-8" slot="band-desc">
              <h3 class="text-white text-2xl sm:text-3xl lg:text-2xl 2xl:text-4xl txt-extrabold">{band.bandName}
                {#if band.subName}
                  <sup class="text-white text-lg">{band.subName}</sup>
                {/if}
              </h3>
              <p class="text-white text-sm sm:text-lg">{band.bandType}</p>
            </div>
            <VerticalBandSoc class="bottom-4 md:bottom-8 lg:bottom-12 right-8" slot="band-socials"
            spotifyLink={band.spotify} igLink={band.ig}
            />
          </LineupBand>
        {/each}
      </div>
    </div>
  </div>