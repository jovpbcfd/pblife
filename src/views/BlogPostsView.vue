<script>
import Footer from "../components/Footer.vue";
import BlogCard from "../miscellaneous/blogs/BlogCard.vue";
import blogs from "../miscellaneous/blogs/BlogDataSource.js";
import { useRoute, RouterLink } from "vue-router";
import { ref, computed, onMounted } from "vue";
import DOMPurify from "dompurify";

export default {
  components: { Footer, BlogCard },
  setup() {
    const route = useRoute();
    const slug = ref(route.params.slug);
    const blog = ref(null);
    const sanitizedContent = ref(null);
    const loading = ref(true);
    const tocLoading = ref(true);
    const headingsList = ref([]);

    const classMapping = {
      "text-bonusButtonContainer": "w-full flex justify-center py-4",
      "text-paragraph":
        "text-m sm:text-m md:text-ml lg:text-lg text-gray-200 py-1",
      "text-anchor":
        "font-bold bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text hover:text-yellow-200 transition duration-300 hover:underline hover:underline-offset-4 hover:decoration-yellow-200 hover:underline-offset-4 hover:decoration-yellow-200hover:from-transparent hover:to-yellow-200",
      "text-heading2":
        "text-2xl sm:text-2xl md:text-3xl lg:text-3xl bg-gradient-to-r from-yellow-100 to-orange-300 text-transparent bg-clip-text font-bold py-4",
      "blog-pic": "w-full flex justify-center py-4",
      "blog-img": "w-3/5",
      "text-heading3":
        "text-xl sm:text-xl md:text-2xl lg:text-2xl bg-gradient-to-r from-yellow-100 to-orange-500 text-transparent bg-clip-text font-bold py-3",
      "text-heading4":
        "text-lg sm:text-lg md:text-xl lg:text-xl bg-gradient-to-r from-yellow-100 via-red-300 to-orange-400 text-transparent bg-clip-text font-bold py-2",
    };

    const replaceClasses = (html) => {
      return Object.entries(classMapping).reduce(
        (acc, [oldClass, newClass]) => {
          return acc.replace(
            new RegExp(`class="${oldClass}"`, "g"),
            `class="${newClass}"`
          );
        },
        html
      );
    };
    

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

    const updateMetaTags = (blog) => {
      // Update the <title> tag
      document.title = blog.title;

      // Update the <meta name="description"> tag
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = blog.description;

      // Update the <link rel="canonical"> tag
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = window.location.href;
    };

    const generateSchema = (blog) => {
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.description,
        image: blog.image,
        author: {
          "@type": "Person",
          name: blog.Author,
        },
        datePublished: blog.Date,
        dateModified: blog.Date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": window.location.href,
        },
      };
    };

    const injectSchema = (schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    onMounted(() => {
      fetchBlog();
    });

    const fetchBlog = () => {
      const foundBlog = blogs.find((post) => post.slug === slug.value);
      loading.value = false;
      if (foundBlog) {
        blog.value = foundBlog;

        const ctaButtonHTML = `
          <div class="claimBonus animate">
            <a href="example.com" class="">Claim Bonus</a>
          </div>
        `;

        sanitizedContent.value = DOMPurify.sanitize(
          replaceClasses(
            foundBlog.content.replace(
              /<div class="text-bonusButtonContainer"><\/div>/g,
              `<div class="text-bonusButtonContainer">
                ${ctaButtonHTML}
              </div>`
            )
          ),
          {
            USE_PROFILES: { html: true },
          }
        );

        // Dynamically create IDs for headings
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = sanitizedContent.value;
        let headingCounter = 1; // Counter to ensure unique IDs
        tempDiv
          .querySelectorAll(
            ".target > h2, .target > h3, .target > h4, span.target"
          )
          .forEach((heading) => {
            const level = heading.tagName.toLowerCase(); // Get the heading level
            heading.id = `${level}-${blog.value.id}-${headingCounter++}`; // Create a unique ID
          });
        sanitizedContent.value = tempDiv.innerHTML; // Update sanitized content with IDs
        loadHeadings();

        // Update meta tags
        updateMetaTags(foundBlog);

        // Generate and inject schema
        const schema = generateSchema(foundBlog);
        injectSchema(schema);
      } else {
        console.error("Blog post not found!");
      }
    };

    const headings = computed(() => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = sanitizedContent.value || "";
      return Array.from(
        tempDiv.querySelectorAll(
          ".target > h2, .target > h3, .target > h4, span.target"
        )
      ).map((heading) => ({
        text: heading.innerText,
        id: heading.id,
      }));
    });

    // Simulate loading headings one by one
    const loadHeadings = () => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = sanitizedContent.value || "";
      const headingsArray = Array.from(
        tempDiv.querySelectorAll(
          ".target > h2, .target > h3, .target > h4, span.target"
        )
      );

      let index = 0;
      const interval = setInterval(() => {
        if (index < headingsArray.length) {
          headingsList.value.push({
            text: headingsArray[index].innerText,
            id: headingsArray[index].id,
          });
          index++;
        } else {
          clearInterval(interval);
          tocLoading.value = false; // Done loading
        }
      }, 500); // Adjust the interval time to control the speed
    };

    const scrollToHeading = (id) => {
      const target = document.getElementById(id);
      if (target) {
        // Remove any existing highlight class from previous targets
        document.querySelectorAll(".highlight").forEach((el) => {
          el.classList.remove("highlight");
        });

        // Add the highlight class to the target
        target.classList.add("highlight");

        // Remove the highlight class after the effect duration (e.g., 2 seconds)
        setTimeout(() => {
          target.classList.remove("highlight");
        }, 4000);

        const rect = target.getBoundingClientRect(); // Get the target's position
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop; // Current scroll position
        const viewportHeight = window.innerHeight; // Viewport height

        const targetPosition =
          scrollTop + rect.top - viewportHeight / 2 + rect.height / 2;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      } else {
        console.warn("Heading not found: ", id);
      }
    };

    const sortedBlogs = computed(() => [...blogs].sort((a, b) => b.id - a.id));

    const relatedBlogs = computed(() => {
      return sortedBlogs.value.filter((b) => b.id !== blog.value?.id);
    });

    return {
      blog,
      sanitizedContent,
      sortedBlogs,
      relatedBlogs,
      loading,
      headings,
      headingsList,
      tocLoading,
      scrollToHeading,
    };
  },
};
</script>

<template>
  <div class="mt-32 mb-4">
    <div v-if="loading" class="text-center mt-64 mb-64">
      <h1 class="text-yellow-100 text-6xl font-bold mb-6">Loading ...</h1>
    </div>
    <div v-else-if="blog">
      <section
        class="mb-2 sm:mb-2 md:mb-4 lg:mb-4 flex flex-col md:flex-row gap-10 bg-midnightGlass backdrop-blur-md rounded-[7px] w-full p-6 sm:p-6 md:p-8 lg:p-10">
        <header>
          <h1
            class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
            {{ blog.title }}
          </h1>
          <p
            class="text-m sm:text-m md:text-ml lg:text-lg text-gray-300 text-center">
            {{ blog.Author }} <strong>&bull;</strong> {{ blog.Date }}
          </p>
        </header>
      </section>
      <section
        class="flex flex-col md:flex-row items-start gap-2 sm:gap-2 md:gap-4 lg:gap-4">
        <aside
          class="md:w-2/10 w-full h-auto bg-midnightGlass p-2"
          style="position: sticky !important; top: 20px; z-index: 10">
          <p
            class="text-center text-m md:text-ml lg:text-l bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold py-2 md:py-2 lg:py-4">
            Table Of Contents
          </p>
          <div class="text-center tableOfContents" v-if="tocLoading">
            <p class="highlight">Loading table of contents ...</p>
          </div>
          <div v-else>
            <ul>
              <li
                class="mb-3"
                v-for="(heading, index) in headingsList"
                :key="index">
                <a
                  :href="'#' + heading.id"
                  @click.prevent="scrollToHeading(heading.id)"
                  class="text-gray-200 hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-100 hover:to-red-200 hover:bg-clip-text text-m md:text-ml lg:text-l"
                  >{{ heading.text }}</a
                >
              </li>
            </ul>
          </div>
        </aside>

        <main class="md:w-6/10 w-full">
          <header>
            <img :src="blog.image" :alt="blog.title" class="w-full mb-4" />
          </header>
          <div class="blogContent" v-html="sanitizedContent"></div>
        </main>

        <aside class="md:w-2/10 w-full h-auto bg-midnightGlass p-2">
          <p
            class="text-center text-m md:text-ml lg:text-l bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold py-2 md:py-2 lg:py-4">
            More
          </p>
          <div class="flex flex-wrap justify-center gap-2 md:gap-2 lg:gap-4">
            <BlogCard
              v-for="blog in sortedBlogs"
              :key="blog.id"
              :image="blog.image"
              :title="blog.title"
              :link="blog.link" />
          </div>
        </aside>
      </section>
    </div>
    <div v-else class="text-center mt-64 mb-64">
      <h1 class="text-yellow-100 text-6xl font-bold mb-6">
        404 Blog Not Found !!!
      </h1>
      <RouterLink
        to="/blogs"
        class="text-white bg-yellow-500 text-shadow-md hover:bg-yellow-600 rounded-md px-3 py-2 mt-4"
        >Go Back
      </RouterLink>
    </div>
  </div>
  <Footer></Footer>
</template>

<style>
.claimBonus {
  border: 2px solid #eec668;
  color: #710c03;
  background: linear-gradient(to top, #b8860b 0%, #ffd700 50%, #fffacd 100%);
  box-shadow: 0px 0px 3px 2px #b58c23, 0px 0px 2px 2px #ffd700 inset;

  border-radius: 50px;
  font-weight: 900;
  font-size: 22px;
  text-shadow: 0px 0px 3px #ac8b38;
  padding: 12px 36px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  opacity: 0; /* Start hidden */
}

.claimBonus.animate {
  opacity: 1; /* Make visible */
  animation: bounceZoom 0.5s ease-in-out; /* Animation effect */
}

@keyframes bounceZoom {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-20px) scale(1.1);
  }
  60% {
    transform: translateY(-10px) scale(1.05);
  }
}

.claimBonus:hover {
  background: linear-gradient(to top, #ffd700 0%, #fffacd 50%, #ffebcd 100%);
  box-shadow: 0px 0px 8px 4px #ffd700, 0px 0px 5px 3px #fffacd inset;
  border-color: #ffd914;
  transform: translateY(-3px);
  text-shadow: 0px 0px 8px #ffd700;
}

.highlight {
  color: transparent; /* Make the text color transparent */
  background: linear-gradient(
    90deg,
    #ffff00,
    #ffbb00,
    #ffb108,
    #7bff08,
    #ffff00
  ); /* Apply the gradient */
  background-size: 200% 100%; /* Make the gradient larger than the text */
  background-position: 100% 50%; /* Initially position the gradient off-screen */
  display: inline-block;
  animation: gradientMove 3s linear infinite;
  -webkit-background-clip: text; /* Use the background as the text color */
  background-clip: text; /* Standard version for background clip */
}

@keyframes gradientMove {
  0% {
    background-position: 100% 50%; /* Start with gradient on the right */
  }
  100% {
    background-position: -100% 50%; /* Move gradient to the left */
  }
}
</style>
