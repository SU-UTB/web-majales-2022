<script>
  import SocItem from '../../../atoms/SocItem.svelte'
  const majales_socials = [
    {
      linkTo: 'https://www.facebook.com/studentskaunieutb',
      imgSrc: './assets/socials/fb_social.svg',
      imgAlt: 'fb',
    },
    {
      linkTo: 'https://www.instagram.com/majalesutb/',
      imgSrc: './assets/socials/ig_social.svg',
      imgAlt: 'ig',
    },
  ]
</script>

<div class="majales_socials_horizontal w-20 flex justify-between lg:hidden">
  {#each majales_socials as socItem}
    <SocItem linkTo={socItem.linkTo} imgSrc={socItem.imgSrc} imgAlt={socItem.imgAlt} />
  {/each}
</div>