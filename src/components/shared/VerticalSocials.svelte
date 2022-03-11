<script>
  import SocItem from '../../atoms/SocItem.svelte'
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

<div class="majales_socials_vertical flex flex-col space-y-4 absolute left-10 top-20 md:top-52">
  {#each majales_socials as socItem}
    <SocItem linkTo={socItem.linkTo} imgSrc={socItem.imgSrc} imgAlt={socItem.imgAlt} />
  {/each}
</div>