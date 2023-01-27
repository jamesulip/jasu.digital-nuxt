<script setup lang="ts">
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://etsy360.io/widgets/js/etsy360.js'
  script.setAttribute('data-token', 'gAV6MuWZO6KMKZLkE30FtsH8AArpLDkL9snaaVvEiXaqi6huUawRoxmoVo345Adp')
  // ppend to body
  document.head.appendChild(script)
})
// created hook
</script>

<template>
  <div id="listings">
    asd
  </div>
</template>
