<script>
import FooterLink from "../../atoms/FooterLink.svelte";
import NewsItemLink from "../../atoms/NewsItemLink.svelte";


  const newsList = [
    {
      imgSrc: './assets/news/news_1.jpg',
      category: 'doprovodný program',
      headlineTxt: 'MAJÁLESOVÁ STEZKA ZLÍNEM',
      description: 'Přeješ si poznat všechna zákoutí města Zlína? Chceš získat roční předplatné na sdílená kola Nextbike? Projdi naší poznávací stezkou, posbírej jedenáct písmen, slož z nich dvě slova a výslednou tajenku vlož do našeho soutěžního formuláře. Lovu zdar!',
      linkTo: 'https://forms.gle/9xTH6LPR2Zn9iZ9c6',
      linkTxt: 'odkaz na formulář'
    },
    // {
    //   imgSrc: './assets/news/news_1.png',
    //   category: 'doprovodný program',
    //   headlineTxt: 'silent disco',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eu lorem risus commodo a eu. Eros sollicitudin bibendum enim mauris, montes, consequat morbi. Faucibus a in ac ultricies senectus eget pretium, et sed. Maecenas eu volutpat morbi habitant. ',
    //   linkTo: 'https://open.spotify.com/playlist/6QaUdPiQBjDGGgjr8Gubwm?si=01dc16744e384d06',
    //   linkTxt: 'spotify playlist'
    // },
    // {
    //   imgSrc: './assets/news/news_1.png',
    //   category: 'Král a královna Majálesu',
    //   headlineTxt: 'registrace na krále a královnu spuštěny!',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eu lorem risus commodo a eu. Eros sollicitudin bibendum enim mauris, montes, consequat morbi. Faucibus a in ac ultricies senectus eget pretium, et sed. Maecenas eu volutpat morbi habitant. ',
    //   linkTo: './',
    //   linkTxt: 'registruj se!'
    // },
  ]
</script>

<section id="news-list" class="relative -top-36 py-6">
  <div class="news-wrapper px-4 md:w-4/5 mx-auto">
    {#each newsList as newsItem}
      <div class="flex mb-12 lg:justify-between flex-wrap">
        <div class="news-item-img lg:w-4/12">
          <a href={newsItem.linkTo} target="_blank" rel="noopener noreferrer">
            <img class="block object-cover object-center w-full h-full" src={newsItem.imgSrc} alt={newsItem.headlineTxt}>
          </a>
        </div>
        <div class="news-item-txt py-4 px-2 lg:px-4 lg:w-8/12">
          <div class="news-item-category px-4 py-2 bg-dark_blu text-white mb-4 max-w-max">
            {newsItem.category}
          </div>
          <h4 class="text-pinky text-2xl txt-extrabold mb-8 uppercase">{newsItem.headlineTxt}</h4>
          <p class="mb-4">{newsItem.description}</p>
          <div class="flex items-center justify-between">
            <hr class="w-1/2 sm:w-7/12 lg:w-3/4 bg-dark_blu_txt" />
            <NewsItemLink linkTo={newsItem.linkTo} linkTxt={newsItem.linkTxt} />
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>