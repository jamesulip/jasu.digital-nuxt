<script lang="ts" setup>
const route = useRoute();
const {data,pending}= useFetch(`/api/product/${route.params.id}`)
const img = ref(data?.thumbnail)
</script>
<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <!-- Image gallery -->
          <div class="flex flex-col-reverse">
            <!-- Image selector -->
            <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <div class="grid grid-cols-6 gap-6" aria-orientation="horizontal" role="tablist">
                <button @click="img=i.url_500x500" id="tabs-1-tab-1" v-for="i in data?.listing_images" :key="i.id"
                  class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  aria-controls="tabs-1-panel-1" role="tab" type="button">
                  <span class="sr-only"> Angled view </span>
                  <span class="absolute inset-0 overflow-hidden rounded-md">
                    <img :src="i.url_175x175" alt=""
                      class="h-full w-full object-cover object-center">
                  </span>
                  <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                  <span class="ring-transparent pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                  :class="{
                    'ring-indigo-500': img === i.url_500x500,
                    'ring-transparent': img !== i.url_500x500
                  }"
                    aria-hidden="true"></span>
                </button>
              </div>
            </div>

            <div class="aspect-w-1 aspect-h-1 w-full">
              <!-- Tab panel, show/hide based on tab state. -->
              <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                <img :src="img ?? data?.thumbnail" 
                  alt="Angled front view with bag zipped and handles upright."
                  class="h-full w-full object-cover object-center sm:rounded-lg">
              </div>

              <!-- More images... -->
            </div>
          </div>

          <!-- Product info -->
          <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900" v-html="data?.title"></h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl tracking-tight text-gray-900">{{ data?.currency_symbol }} {{ data?.price }}</p>
            </div>
            <div class="mt-6">
              <h3 class="sr-only">Description</h3>
              <div class="space-y-6 text-base text-gray-700" v-html="data?.description">
               
              </div>
            </div>
            <NuxtLink :to="data?.url" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#25947a] hover:opacity-75">
            Add to cart
          </NuxtLink>
          </div>
          <!-- create button to add to cart -->
         
        </div>
      </div>
    </div>
</template>
