<script setup>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    
    </script>

<template>
  <div class="bg-result-blue">
    <div class="flex justify-end py-5 mx-3">
    <h3 class="font-bold pr-2 text-2xl">آخرین آثار</h3>
  </div>
  
  <vueper-slides
          class="no-shadow "
          :visible-slides="3"
          slide-multiple
          :gap="3"
          :slide-ratio="1 / 4"
          :dragging-distance="200"
          :arrows-outside="false"
          :bullets="false"
          :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
          <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" />

        </vueper-slides>
  </div>
  
</template>