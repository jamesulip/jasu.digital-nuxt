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
  <ul class="max-w-xs md:text-left text-center text-[18pt] font-bold flex flex-col md:gap-5 gap-1">
    <li v-for="menuItem in menu" :key="menuItem.name">
      <!-- if item.link is link -->
      <a
        v-if="menuItem.link.includes('http')"
        class="block  rounded-md"
        :class="{ 'text-[#25947a]': $route.path === menuItem.link }"
        :href="menuItem.link"
        target="_blank"
        @click="tt"
      >
        {{ menuItem.name }}
      </a>
      <!-- if item.link is route -->

      <RouterLink
        v-else
        class="block  rounded-md"
        :class="{ 'text-[#25947a]': $route.path === menuItem.link }"
        :to="menuItem.link"
        @click="tt"
      >
        {{ menuItem.name }}
      </RouterLink>
    </li>
  </ul>
</template>
