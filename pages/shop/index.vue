<script setup lang="ts">
const {data} = useFetch('/api/listimages')
</script>

<template>
 <section ref="section" class="overflow-hidden text-gray-700 ">
    <hr class="border-[#25947a] mt-10 border-3">
    <div class="w-full text-center p-4">
      <span class="text-[#25947a] text-3xl font-bold">Shop</span>
    </div>
    <div class="mx-auto max-w-2xl lg:max-w-7xl p-10">
      <h2 class="sr-only">Products</h2>
      <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        <div v-for="(product,ind) in data" :key="product.id" class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
            <img :src="product.thumbnail" :alt="product.title" class="h-full w-full object-cover object-center sm:h-full sm:w-full" />
          </div>
          <div class="flex  gap-3 px-1.5 overflow-auto scrollbar scrollbar-rounded scrollbar-w-4px scrollbar-radius-2 scrollbar-track-radius-4 scrollbar-thumb-radius-4">
            <img  @click="product.thumbnail = i.url_500x500" :src="i.url_75x75" class="h-16 w-auto border" v-for="i in product.listing_images" >
          </div>
          <div class="flex flex-1 flex-col space-y-2 p-4">
            <h3 class="text-sm font-medium text-gray-900">
          
              <a :key="`btn-${ind}`" :href="`/shop/${product.id}`">
              
                <span aria-hidden="true"  />
                <span v-html=" product.title "></span>
              </a>
            </h3>
            <div class="flex flex-1 flex-col justify-end">
              <p class="text-base font-medium text-gray-900">{{product.currency_symbol}}{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 </section>
</template>