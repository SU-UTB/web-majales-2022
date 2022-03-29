<script>
  export let sectionHeadingText = ""
</script>

<h5 class="text-3xl txt-bold md:w-4/5 lg:w-3/5 mb-8 {$$props.class}">
  {sectionHeadingText}
  <slot name="raw-txt"></slot>
</h5>
