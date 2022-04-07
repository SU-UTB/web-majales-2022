<script>

  import SocItem from '../../../atoms/SocItem.svelte'

  const socItems = [
    {
      linkTo: 'https://www.instagram.com/studentskaunieutb/',
      imgSrc: './assets/socials/su_social.svg',
      imgAlt: 'su',
    },
    {
      linkTo: 'https://www.facebook.com/studentskaunieutb/',
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

<div class="su-socials flex items-center space-x-4 {$$props.class}">
  {#each socItems as socItem}
    <SocItem linkTo={socItem.linkTo} imgSrc={socItem.imgSrc} imgAlt={socItem.imgAlt} />
  {/each}
</div>

