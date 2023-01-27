<script lang="ts" setup>
const { setDropdownMenu } = useMenu()
const menu = ref([
  {
    name: 'GALLERY',
    link: '/',
  },
  {
    name: 'ABOUT',
    link: '/about',
  },
  {
    name: 'SHOP',
    link: '/shop',
  },
  {
    name: 'ETSY SHOP',
    link: 'https://www.etsy.com/shop/jasudigitalarts',
  },
  {
    name: 'CONTACT',
    link: '/contact',
  },
])
function tt() {
  setDropdownMenu(false)
}
</script>

<template>
  <ul class="max-w-xs sm:text-left text-center text-[18pt] font-bold flex flex-col mx-auto md:gap-5 gap-1">
    <li v-for="menuItem in menu" :key="menuItem.name">
      <!-- if item.link is link -->
      <a
        v-if="menuItem.link.includes('http')"
        class="block  rounded-md hover:!text-[#25947a]"
        :class="{ 'text-[#25947a]': $route.path === menuItem.link }"
        :href="menuItem.link"
        target="_blank"
        @click="tt"
      >
        {{ menuItem.name }}
      </a>
      <!-- if item.link is route -->

      <NuxtLink
        v-else
        class="block  rounded-md hover:!text-[#25947a]"
        :class="{ 'text-[#25947a]': $route.path === menuItem.link }"
        :to="menuItem.link"
        @click="tt"
      >
        {{ menuItem.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
