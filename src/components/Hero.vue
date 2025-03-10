<script setup>
import { defineProps, reactive, Suspense } from "vue";

defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
});

const styleObject = reactive({ marginTop:"1rem", marginBottom:"1rem", fontSize:"1.25rem", lineHeight:"1.75rem", color:"#ffffff" })
</script>
<template>
  <section class="bg-black-700 mt-10">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-200 via-orange-400 to-violet-500 text-transparent bg-clip-text"
          >
          {{ title }}
        </h1>
        <p :style="styleObject">
          {{ subTitle }}
        </p>
      </div>
    </div>
  </section>
</template>
