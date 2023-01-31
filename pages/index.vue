<script setup lang="ts">
const images = Array.from({ length: 41 }, (_, i) => `/gallery/img${i}.jpg`)

useSeoMeta({
  title: 'Home',
  description: 'I am Julie Ann Santos Ulip, a highly skilled and accomplished freelance artist. I have been honing my craft from a young age and was discovered by my art teacher at the age of 10. With the support of my family and guidance from my teacher, I went on to pursue a degree in Fine Arts with a major in Advertising Design at Far Eastern University. I graduated Magna Cum Laude and decided to continue my career as a freelancer, exploring various branches of visual arts such as tattooing, sculpting, and animation. My focus has now centered around digital illustrations, particularly portraits. In my free time, I continue to work on my personal paintings and other crafts, always striving to improve my skills.'
})


// check window size responsive
const responsive = ref(0)
// get window size without using window
const section = ref(null)
useResizeObserver(section, (entries) => {
  const entry = entries[0]
  const { width } = entry.contentRect
  responsive.value = width
})
const getDeviceType = computed(() => {
  if (responsive.value < 640)
    return 1
  if (responsive.value < 768)
    return 2
  if (responsive.value < 1024)
    return 3
  if (responsive.value < 1280)
    return 4
  if (responsive.value > 1536)
    return 5
  else
    return 6
})

const randomImagesChunks = computed(() => {
  return images.reduce((acc, _, i) => {
    const chunkIndex = Math.floor(i / Math.ceil(images.length / getDeviceType.value))
    if (!acc[chunkIndex])
      acc[chunkIndex] = []
    acc[chunkIndex].push(images[i])
    return acc
  }, [])
})
</script>

<template>
  <section ref="section" class="overflow-hidden text-gray-700 ">
    <hr class="border-[#25947a] mt-10 border-3">
    <div class="w-full text-center p-4">
      <span class="text-[#25947a] text-3xl font-bold">Gallery</span>
    </div>
    <div class="flex gap-3 p-4"  >
      <div v-for="col in randomImagesChunks" :key="`row-${col}`" class="flex flex-col gap-3 w-full  ">
        <div  v-for="(row, ind) in col" :key="`col-${row}`" class="flex flex-row gap-3">
          <img :alt="`img-${ind}`" :src="row" class="w-full min-w-32 min-h-32">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
