<script>
  export let contactName, contactPos, contactMail
</script>

<div class="contact-item my-6 mx-4 text-center {$$props.class}">
  <div class="mx-auto contact-desc">
    <h6 class="text-pinky uppercase txt-bold mb-2 md:mb-4">{contactName}</h6>
    <p class="manager-position">{ contactPos }</p>
    <a class="txt-normal" href={`mailto:${contactMail}`}>{ contactMail }</a>
  </div>
</div>

<style>

@media screen and (min-width: 768px) {
  .contact-item {
    width: 40%;
    margin: 1rem 2%;
  } 
}

@media screen and (min-width: 1024px) {
  .contact-item {
    width: 24%;
    margin: 1rem 2%;
  }
}

.contact-desc {
    width: fit-content;
    min-width: 82%;
  }
  
</style>
