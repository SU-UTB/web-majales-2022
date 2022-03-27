<script>
  import SectionHeading from "../../atoms/SectionHeading.svelte";
  
  const bands = [
    {
      imgSrc: '../assets/lineup/band1.png',
      bandName: 'UDG',
      bandType: 'CZ POP/ROCK',
      spotify: '',
      ig: '',
      width: 950,
      height: 350
    },
    {
      imgSrc: '../assets/lineup/band2.png',
      bandName: 'VOJTAANO',
      bandType: 'CZ FOLK POP, FOLK RAP',
      spotify: '',
      ig: '',
      width: 626,
      height: 650
    },
    {
      imgSrc: '../assets/lineup/band3.png',
      bandName: 'CIRCUS PROBLEM',
      bandType: 'CZ/EN BALKAN BRASS',
      spotify: '',
      ig: '',
      width: 465,
      height: 280
    },
    {
      imgSrc: '../assets/lineup/band4.png',
      bandName: 'MANIAK',
      bandType: 'CZ RAP',
      spotify: '',
      ig: '',
      width: 465,
      height: 280
    },
    {
      imgSrc: '../assets/lineup/band5.png',
      bandName: 'JAKUB DĚKAN',
      subName: '& BAND',
      bandType: 'CZ ACOUSTIC POP',
      spotify: '',
      ig: '',
      width: 788,
      height: 420
    },
    {
      imgSrc: '../assets/lineup/band7.png',
      bandName: 'TROCHA KLIDU',
      bandType: 'CZ POP/ROCK',
      spotify: '',
      ig: '',
      width: 787,
      height: 420
    }
  ]
  </script>
  
  <div id="band-list" class="flex flex-wrap py-16 justify-between w-11/12 mx-auto">
    {#each bands as band}
      <div class="band-item m-2 relative" style:width={band.width} style:height={band.height}>
        <!-- <VerticalBandSocials /> -->
        <div class="vertical-band-soc flex flex-col space-y-4 absolute left-6 top-16">
          <a href="./">
            <img src="../assets/lineup/spotify.svg" alt="spotify logo" class="w-10 h-10">
          </a>
          <a href="./">
            <img src="../assets/lineup/ig.svg" alt="spotify logo" class="w-10 h-10">
          </a>
        </div>
        <div class="band-desc absolute left-10 bottom-10">
          <h3 class="text-white text-4xl txt-bold">{band.bandName}</h3>
          <p class="text-white text-lg">{band.bandType}</p>
        </div>

        <img src={band.imgSrc} alt={band.imgAlt}>
      </div>
    {/each}
  </div>