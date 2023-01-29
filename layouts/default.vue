<template>
  <main class="h-auto md:h-screen sm:flex">
    <Sidebar />
    <div class="flex-1 bg-gray-200 overflow-auto">
      <RouterView :key="params?.id"/>
    </div>
    <div id="fb-customer-chat" class="fb-customerchat"></div>

  </main>
</template>
<script setup>
const params = useRoute()?.params
useHead({
  meta: [
  
  ],
  bodyAttrs: {
    class: 'font-sans'
  } 
})
</script>
