<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

</script>

<template>
    <h3 class="text-3xl text-text-mahak-pink font-bold text-right mb-3 mt-14 mx-3">منابع سوالات</h3>
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

</template>





<!-- 
<script setup>
    import { VueperSlides, VueperSlide } from "vueperslides";
    import "vueperslides/dist/vueperslides.css";
    slides: [
      {
        title: "El Teide Volcano, Spain",
        content: "Photo by Max Rive",
        // You can also provide a URL for the image.
        image: require("../assets/img/Feature.png"),
      },
      // Other slides.
    ];
    </script>
    <template>
      <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :arrows-outside="false"
        :bullets="false"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
      </vueper-slides>
    </template> -->
    
