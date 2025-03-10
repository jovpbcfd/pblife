<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import logo from "@/assets/img/logo.webp";
import sortedBlogs from "@/miscellaneous/blogs/BlogDataSource.js";

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const route = useRoute();
const blogLinks = ref([]);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(async () => {
  window.addEventListener("scroll", handleScroll);
  const blogs = await sortedBlogs(); // Fetch blog data
  blogLinks.value = blogs.map((blog) => ({
    to: `/blogs/${blog.slug}`, // Construct blog post URLs
    label: blog.title,
  }));
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/sports", label: "Sports" },
  { to: "/slots", label: "Slots" },
  { to: "/fishing", label: "Fishing" },
  { to: "/live-casino", label: "Live Casino" },
  { to: "/deposit", label: "Deposit" },
  { to: "/promotion", label: "Promotion" },
  { to: "/blogs", label: "Blogs", isBlogParent: true },
  ...blogLinks.value,
];

// Computed property for active link styling
const activeLinkClass = computed(() => (link) => {
  if (link.isBlogParent) {
    return route.path.startsWith("/blogs")
      ? "bg-yellow-400 text-black font-bold"
      : "text-white hover:text-black";
  } else if (route.path === link.to) {
    return "bg-yellow-400 text-black font-bold";
  } else {
    return "text-white hover:text-black";
  }
});
</script>

<template>
  <nav
    :class="[
      'fixed top-4 left-1/2 transform -translate-x-1/2 p-4 transition-all',
      isScrolled ? 'bg-midnightGlass backdrop-blur-md' : 'bg-deepPurple',
      'rounded-[14px] border-[1.5px] border-glow shadow-lg z-50',
      isMenuOpen ? 'w-full' : '',
    ]">
    <div
      :class="[
        'flex items-center justify-between gap-6 px-6',
        isMenuOpen ? 'flex flex-col' : 'flex-row',
      ]">
      <RouterLink to="/" class="flex items-center block min-h-[52px] min-w-[170px]" @click="closeMenu">
        <img
          class="h-full w-full"
          :src="logo"
          alt="Logo" />
      </RouterLink>

      <div
        :class="[
          'flex flex-grow justify-center gap-4',
          isMenuOpen ? 'flex-col items-center' : 'hidden lg:flex',
        ]">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="[
            'flex items-center whitespace-nowrap rounded-md px-3 py-2 hover:bg-yellow-400 transform transition-transform duration-200 hover:scale-105',
            activeLinkClass(link), // Use the computed property here
          ]"
          @click="closeMenu">
          {{ link.label }}
        </RouterLink>
      </div>

      <a
        href="https://www.Panalobet.com/"
        target="_blank"
        :class="[
          'border-[2px] border-[#eec668] bg-gradient-to-t from-[#b8860b] via-[#ffd700] to-[#fffacd] shadow-[0px_0px_3px_2px_#b58c23,0px_0px_2px_2px_#ffd700_inset] rounded-[7px] font-semibold text-shadow-md px-6 py-2 cursor-pointer transition-all transform duration-300 hover:scale-105 hover:brightness-110 active:scale-95 flex items-center justify-center',
          isMenuOpen ? 'flex-col items-center' : 'hidden lg:flex ',
        ]">
        Register
      </a>

      <button
        class="block md:hidden text-white focus:outline-none transition-transform duration-500 ease-in-out hover:rotate-180"
        @click="toggleMenu">
        <span class="sr-only">Toggle Menu</span>
        <span v-if="!isMenuOpen" class="block w-6 h-0.5 bg-white mb-1"></span>
        <span v-if="!isMenuOpen" class="block w-6 h-0.5 bg-white mb-1"></span>
        <span v-if="!isMenuOpen" class="block w-6 h-0.5 bg-white"></span>
        <span
          v-if="isMenuOpen"
          class="block w-6 h-0.5 bg-white transform rotate-45 translate-y-3"></span>
        <span
          v-if="isMenuOpen"
          class="block w-6 h-0.5 bg-white transform -rotate-45 translate-x-0"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
@keyframes glow {
  0% {
    border-color: #ff6ec7;
  }
  20% {
    border-color: #ffd700;
  }
  40% {
    border-color: #85ffbd;
  }
  80% {
    border-color: #00beee;
  }
  100% {
    border-color: #ff6ec7;
  }
}

.border-glow {
  animation: glow 3s linear infinite;
}

@media (max-width: 1024px) {
  button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 24px;
    height: 24px;
    padding: 0;
  }

  button span {
    transition: transform 1s ease, opacity 1s ease;
  }
}
</style>
