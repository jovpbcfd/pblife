<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import logo from "@/assets/img/logo.png";
import social1 from "@/assets/img/social1.png";
import social2 from "@/assets/img/social2.png";
import social3 from "@/assets/img/social3.png";
import social4 from "@/assets/img/social4.png";
import provider1 from "@/assets/img/provider1.png";
import provider2 from "@/assets/img/provider2.png";
import provider3 from "@/assets/img/provider3.png";
import provider4 from "@/assets/img/provider4.png";
import provider5 from "@/assets/img/provider5.png";
import provider6 from "@/assets/img/provider6.png";
import provider7 from "@/assets/img/provider7.png";
import provider8 from "@/assets/img/provider8.png";
import license1 from "@/assets/img/license1.svg";
import license2 from "@/assets/img/license2.svg";
import responsible1 from "@/assets/img/responsible1.svg";
import responsible2 from "@/assets/img/responsible2.svg";

const isScrolled = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 300; // Adjust scroll threshold as needed
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <!-- border-[1.5px] border-glow - for glow animation paste this in the class lists -->
  <footer
    class="flex flex-col md:flex-row gap-10 bg-midnightGlass backdrop-blur-md rounded-[7px] shadow-lg w-full py-10 px-10">
    <div class="md:w-1/3 bg-purple-900/10 w-full py-5 rounded-[4px]">
      <div class="w-full flex flex-col items-center justify-center">
        <RouterLink
          to="/"
          class="flex items-center mb-5 hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[100px] max-w-[170px]"
            :src="logo"
            alt="Logo" />
        </RouterLink>
        <p
          class="text-center mb-5 text-ml sm:text-m md:text-l lg:text-xl text-white">
          Hassle-Free Login Steps at Panalobet Casino: Head over to the
          <a
            href="https://Panalobet.com"
            class="bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold"
            >Panalobet Casino website</a
          >
          and locate the “<a
            href="https://Panalobet.com"
            class="bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold"
            >Login</a
          >” button.
        </p>
        <div class="flex flex-row gap-5">
          <RouterLink
            to="/"
            class="flex items-center hover:scale-105 transition-transform duration-200">
            <img
              class="h-auto min-w-[40px] max-w-[60px]"
              :src="social1"
              alt="Facebook" />
          </RouterLink>
          <RouterLink
            to="/"
            class="flex items-center hover:scale-105 transition-transform duration-200">
            <img
              class="h-auto min-w-[40px] max-w-[60px]"
              :src="social2"
              alt="Messenger" />
          </RouterLink>
          <RouterLink
            to="/"
            class="flex items-center hover:scale-105 transition-transform duration-200">
            <img
              class="h-auto min-w-[40px] max-w-[60px]"
              :src="social3"
              alt="Telegram" />
          </RouterLink>
          <RouterLink
            to="/"
            class="flex items-center hover:scale-105 transition-transform duration-200">
            <img
              class="h-auto min-w-[40px] max-w-[60px]"
              :src="social4"
              alt="Agent" />
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="md:w-1/3 w-full flex flex-col md:flex-row rounded-[4px]">
      <div class="md:w-1/2 bg-purple-900/10 w-full py-5">
        <div class="text-center text-m sm:text-m md:text-ml lg:text-l">
          <p class="text-white font-bold mb-5">Quick Navigation</p>
          <a
            href="https://Panalobet.com"
            class="bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-200"
            >Panalobet Website</a
          ><br />
          <a
            href="https://Panalobet.com"
            class="bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-200"
            >Panalobet Casino</a
          ><br />
          <a
            href="https://Panalobet.com"
            class="bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-200"
            >Panalobet Casino Website</a
          ><br />
        </div>
      </div>
      <div class="md:w-1/2 bg-purple-900/10 w-full py-5">
        <div class="text-center text-m sm:text-m md:text-ml lg:text-l">
          <p class="text-white font-bold mb-5">Services</p>
          <a
            href="https://Panalobet.com"
            class="bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-200"
            >Panalobet Website</a
          ><br />
          <a
            href="https://Panalobet.com"
            class="bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-200"
            >Panalobet Casino</a
          ><br />
          <a
            href="https://Panalobet.com"
            class="bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-200"
            >Panalobet Casino Website</a
          ><br />
        </div>
      </div>
    </div>
    <div class="md:w-1/3 bg-purple-900/10 w-full py-5 rounded-[4px]">
      <div class="flex flex-wrap justify-center items-center gap-5 mb-5">
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[40px] max-w-[60px]"
            :src="provider1"
            alt="Provider" />
        </RouterLink>
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[40px] max-w-[60px]"
            :src="provider2"
            alt="Provider" />
        </RouterLink>
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[40px] max-w-[60px]"
            :src="provider3"
            alt="Provider" />
        </RouterLink>
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[40px] max-w-[60px]"
            :src="provider4"
            alt="Provider" />
        </RouterLink>
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[40px] max-w-[60px]"
            :src="provider5"
            alt="Provider" />
        </RouterLink>
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[40px] max-w-[60px]"
            :src="provider6"
            alt="Provider" />
        </RouterLink>
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[40px] max-w-[60px]"
            :src="provider7"
            alt="Provider" />
        </RouterLink>
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[40px] max-w-[60px]"
            :src="provider8"
            alt="Provider" />
        </RouterLink>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-5 mb-5">
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[80px] max-w-[100px]"
            :src="license1"
            alt="License" />
        </RouterLink>
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[80px] max-w-[100px]"
            :src="license2"
            alt="License" />
        </RouterLink>
      </div>
      <div class="flex flex-wrap justify-center items-center gap-5 mb-5">
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[80px] max-w-[100px]"
            :src="responsible1"
            alt="Responsible" />
        </RouterLink>
        <RouterLink
          to="/"
          class="hover:scale-105 transition-transform duration-200">
          <img
            class="h-auto min-w-[80px] max-w-[100px]"
            :src="responsible2"
            alt="Responsible" />
        </RouterLink>
      </div>
    </div>

    <!-- <button
      v-if="isScrolled"
      @click="scrollToTop"
      class="fixed bottom-20 right-10 z-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-200 rounded-lg py-2 px-3 shadow-lg transition-all duration-300 hover:scale-105"
      style="background-color: rgba(128, 0, 128, 0.2)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-white">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
      </svg>
    </button> -->
  </footer>
  <button
    v-if="isScrolled"
    @click="scrollToTop"
    class="fixed bottom-10 right-10 z-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 rounded-lg py-2 px-3 shadow-lg transition-all duration-300 hover:scale-105"
    style="background-color: rgba(128, 0, 128, 0.2)">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      style="stroke: #fff6c3"
      class="w-6 h-6">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
    </svg>
  </button>
</template>

<style scoped>
/* @keyframes glow {
  0% {
    border-color: #ff6ec7;
  }
  33% {
    border-color: #85ffbd;
  }
  66% {
    border-color: #ffd700;
  }
  100% {
    border-color: #ff6ec7;
  }
}
.border-glow {
  animation: glow 3s linear infinite;
} */
</style>
