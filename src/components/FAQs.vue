<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-midnightGlass rounded-lg shadow">
          <button
            @click="toggleAnswer(index)"
            class="w-full text-left py-4 px-6 focus:outline-none flex items-center justify-between">
            <h4
              class="text-xl sm:text-xl md:text-1xl lg:text-2xl bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold">
              {{ faq.question }}
            </h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === index }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-if="openIndex === index"
            class="overflow-hidden transition-max-height duration-300"
            :style="{ maxHeight: openIndex === index ? '500px' : '0px' }">
            <div
              class="px-6 pb-4 pt-2 text-ml sm:text-m md:text-l lg:text-xl text-white">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  faqs: {
    type: Array,
    required: true,
  },
});

const openIndex = ref(null);

const toggleAnswer = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>
