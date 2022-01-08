<script>
  import majSocImg from '../../public/assets/socials/maj_social.svg'
  import fbSocImg from '../../public/assets/socials/fb_social.svg'
  import igSocImg from '../../public/assets/socials/ig_social.svg'

  import SocItem from '../atoms/SocItem.svelte'

  const socialItems = [
    {
      imgSrc: majSocImg,
      imgAlt: 'majáles',
    },
    {
      imgSrc: fbSocImg,
      imgAlt: 'facebook',
    },
    {
      imgSrc: igSocImg,
      imgAlt: 'instagram',
    },
  ]

</script>

<div class="socials-container flex space-x-4">
  {#each socialItems as socItem}
    <SocItem imgSrc={socItem.imgSrc} imgAlt={socItem.imgAlt} />
  {/each}
</div>