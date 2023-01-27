<script setup lang="ts">
const { dropdownMenu, setDropdownMenu } = useMenu()
const target = ref(null)
onClickOutside(target, event => setDropdownMenu(false))
</script>

<template>
  <div>
    <!-- create mobile taskbar -->
    <div ref="target" class="fixed top-0 left-0 w-full z-50">
      <div
        class="flex justify-between bg-[#25947a] text-white p-4 md:hidden "
      >
        <!-- animate burger to close icon -->
        <button
          role="button"
          :class="{
            'i-carbon-menu': !dropdownMenu,
            'i-carbon-close': dropdownMenu,
          }" @click="setDropdownMenu()"
        >
          <label class="sr-only">Menu</label>
        </button>

        <a target="_blank" href="https://www.facebook.com/jasulip" class="i-carbon-logo-facebook">
          <label class="sr-only">Facebook</label>
        </a>
        <a target="_blank" href="https://www.instagram.com/jasu.digital" class="i-carbon-logo-instagram">
          <label class="sr-only">Instagram</label>
        </a>
        <RouterLink to="/contact" class="i-carbon-email">
          <label class="sr-only">Email</label>
        </RouterLink>
      </div>
      <div v-if="dropdownMenu" class="bg-white w-full mx-auto md:mx-0 p-8  shadow-lg flex-col justify-between flex md:hidden">
        <div class="logo flex flex-col text-center text-[#25947a]">
          <span class="text-7xl">
            JASU
          </span>
          <span>DIGITAL ARTS</span>
        </div>
        <div>
          <SidebarMenuItem />
        </div>
        <div>
          <img src="/logo.jpg" class="w-1/4 mx-auto">
          <!-- create 3 icons  inline -->
          <div class="flex justify-between md:visible invisible">
            <a target="_blank" href="https://www.facebook.com/jasulip" class="i-carbon-logo-facebook" />
            <a target="_blank" href="https://www.instagram.com/jasu.digital" class="i-carbon-logo-instagram" />
            <a class="i-carbon-email" />
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:flex h-full">
      <div class="max-w-min mx-auto md:mx-0 p-8  flex-col justify-between flex">
        <div class="logo flex flex-col text-center text-[#25947a]">
          <span class="text-7xl">
            JASU
          </span>
          <span>DIGITAL ARTS</span>
        </div>
        <div>
          <SidebarMenuItem />
        </div>
        <div>
          <img src="/logo.jpg" class="w-full">
          <!-- create 3 icons  inline -->
          <div class="flex justify-between ">
            <a target="_blank" href="https://www.facebook.com/jasulip" class="i-carbon-logo-facebook" />
            <a target="_blank" href="https://www.instagram.com/jasu.digital" class="i-carbon-logo-instagram" />
            <div class="i-carbon-email" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
    font-family: 'Amatic SC';
}
</style>
