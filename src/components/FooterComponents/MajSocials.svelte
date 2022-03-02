<script>  
  import SocItem from '../../atoms/SocItem.svelte'

  const socItems = [
    {
      linkTo: './',
      imgSrc: './assets/socials/maj_social.png',
      imgAlt: 'majales',
    },
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

<div class="maj-socials flex items-center justify-center space-x-4 {$$props.class}">
  {#each socItems as socItem}
    <SocItem linkTo={socItem.linkTo} imgSrc={socItem.imgSrc} imgAlt={socItem.imgAlt} />
  {/each}
</div>