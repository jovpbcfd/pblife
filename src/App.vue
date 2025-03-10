<script setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="max-w-[1400px] mx-auto overflow-x-hidden px-1">
    <Navbar />
    <RouterView />
  </div>
</template>
