<script setup>
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import BlogCard from "@/miscellaneous/blogs/BlogCard.vue";
import blogs from "@/miscellaneous/blogs/BlogDataSource.js";
import { onMounted } from "vue";


// Computed property to sort blogs by ID (newest to oldest)
// const sortedBlogs = computed(() =>
//   [...blogs.value].sort((a, b) => b.id - a.id)
// );

onMounted(() => {

 // Google Tag Manager Script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZJGFR0Z13J';
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-ZJGFR0Z13J');
    };


  // Update the <title> tag
  document.title = "Panalobet - Blogs";

  // Update the <meta name="description"> tag
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  metaDescription.content =
    "";

  // Update the <link rel="canonical"> tag
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = window.location.href;

});

</script>
<template>
  <div>
    <div class="mt-40"></div>
    <Hero
      class="mb-10"
      title="Panalobet - Blogs"
      subTitle="Panalobet Casino is known as one of the most trusted online casinos in the Philippines." />

    <section class="p-2 md:p-2 lg:p-4">
      <div class="flex flex-wrap justify-center gap-2 md:gap-2 lg:gap-4">
        <BlogCard
          v-for="blog in blogs"
          :key="blog.id"
          :image="blog.image"
          :title="
            blog.title.length > 45
              ? blog.title.substring(0, 45) + ' ...'
              : blog.title
          "
          :Author="blog.Author"
          :Date="blog.Date"
          :description="
            blog.description.length > 100
              ? blog.description.substring(0, 100) + ' ...'
              : blog.description
          "
          :link="blog.link"
          :buttonText="blog.buttonText" />
      </div>
    </section>
    <div class="mt-10"></div>

    <Footer></Footer>
  </div>
</template>
