
<template>
  <RouterLink
    :to="link"
    target="_blank"
    class="cardGridBlog"
  >
    <picture v-if="image">
      <source media="(min-width: 768px)" :srcset="`${image}`" />
      <img
        :src="`${image}`"
        :alt="title || 'Blog Image'"
        :title="title || 'Blog Image'"
      />
    </picture>

    <div class="p-2">
      <h4 v-if="title" class="card-title text-xl sm:text-xl md:text-1xl lg:text-2xl bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text font-bold py-2">
        {{ title }}
      </h4>

      <!-- <p class="text-sm md:text-m lg:text-l text-gray-400 py-2">
        <span v-if="Author">{{ Author }}</span> • <span v-if="Date">{{ Date }}</span>
      </p> -->
      <div v-if="Author && Date">
        <p class="text-sm md:text-m lg:text-l text-gray-400 py-2">
        <span >{{ Author }} • {{ Date }}</span>
      </p>
      </div>
      <!-- <p class="text-sm md:text-m lg:text-l text-gray-400 py-2">
        <span v-if="Author">{{ Author }}</span>
        <span v-if="Author && Date"> • </span>
        <span v-if="Date">{{ Date }}</span>
      </p> -->

      <p v-if="description" class="text-m md:text-ml lg:text-lg text-gray-200">
        {{
          description
            .split(/(<span[^>]*>.*?<\/span>)/g)
            .map((part, index) => {
              if (part.match(/<span[^>]*>.*?<\/span>/)) {
                return `<span key="${index}" class="${
                  part.includes("fontWeightBold") ? "fontWeightBold colorPri" : ""
                }">${part.replace(/<\/?span[^>]*>/g, "")}</span>`;
              }
              return part;
            })
            .join("")
        }}
      </p>

      <div v-if="buttonText" class="py-4">
        <div class="">
          <span class="text-m md:text-ml lg:text-l bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold">{{ buttonText || "" }}</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    image: String,
    title: String,
    Author: String,
    Date: String,
    description: String,
    buttonText: String
  }
}
</script>

<style scoped>
 .cardGridBlog {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 400px;
  height: auto;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(173, 137, 46, 0.9);
  border-radius: 7px;
}

 .cardGridBlog:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(173, 137, 46, 0.9);
  z-index: 5;
}

@media (max-width: 768px) {
   .cardGridBlog {
    max-width: 380px;
    height: auto;
  }
}

 .cardGridBlog img {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
 }
</style>
