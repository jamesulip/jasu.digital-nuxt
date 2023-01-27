<script lang="ts" setup>
const form = ref({
  name: '',
  email: '',
  message: '',
})
</script>

<template>
  <section class="overflow-hidden text-gray-700 h-screen">
    <hr class="border-[#25947a] mt-10 border-3">
    <div class="w-full text-center p-4">
      <span class="text-[#25947a] text-3xl font-bold">Contact Me</span>
    </div>

    <!-- create form for name email and message -->
    <form netlify-honeypot="bot-field" name="Contact Us Page" method="post" netlify>
      <input type="hidden" name="form-name" value="Contact Us Page">
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field">
        </label>
      </p>
      <div class="flex flex-col gap-3 p-4 max-w-md mx-auto">
        <div class="flex flex-col gap-3">
          <label for="name" class="text-[#25947a] font-bold">Name</label>
          <input id="name" v-model="form.name" name="name" type="text" class="border-[#25947a] border-1 p-2">
        </div>
        <div class="flex flex-col gap-3">
          <label for="email" class="text-[#25947a] font-bold">Email</label>
          <input id="email" v-model="form.email" name="email" type="email" class="border-[#25947a] border-1 p-2">
        </div>
        <div class="flex flex-col gap-3">
          <label for="message" class="text-[#25947a] font-bold">Message</label>
          <textarea id="message" v-model="form.message" name="message" class="border-[#25947a] border-1 p-2" />
        </div>
        <div class="flex flex-col gap-3">
          <button type="submit" role="button" class="bg-[#25947a] text-white p-2 disabled:bg-[#25947a] disabled:opacity-65 disabled:cursor-no-drop">
            Send
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>

</style>
