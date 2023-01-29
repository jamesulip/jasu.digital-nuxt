<template>
  <main class="h-auto md:h-screen sm:flex">
    <Sidebar />
    <div class="flex-1 bg-gray-200 overflow-auto">
      <RouterView />
    </div>
    <div id="fb-customer-chat" class="fb-customerchat"></div>

  </main>
</template>
<script setup>
useHead({
  meta: [
  
  ],
  bodyAttrs: {
    class: 'font-sans'
  } 
})
</script>
