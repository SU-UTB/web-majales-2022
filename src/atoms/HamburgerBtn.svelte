<script>
  export let active = false
  export let handleClick
</script>


<div 
  class="hamburger-btn lg:hidden cursor-pointer w-8 h-8 z-10" 
  class:active on:click={() => active = !active} on:click={handleClick}>
  <div class="line1 bg-dark_blu"></div>
  <div class="line2 bg-dark_blu"></div>
  <div class="line3 bg-dark_blu"></div>
</div>

<style>

  .line1, .line2, .line3 {
    content: "";
    display: block;
    height: 4px;
    border-radius: 3px;
    margin: 5px 0;
    transition: 0.5s;
  }

  .active .line1 {
    transform: translateY(14px) rotate(135deg);
    margin: 0;
  }

  .active .line3 {
    transform: translateY(-3px) rotate(-135deg);
    margin: 0;
  }

  .active .line2 {
    transform: scale(0);
  }
</style>