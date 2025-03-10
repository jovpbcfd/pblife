<script setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "auto",
  },
  duration: {
    type: Number,
    default: 1000,
  },
  speed: {
    type: Number,
    default: 0.5,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  imageMobileSrc: {
    type: String,
    required: true,
  },
});

const imageContainerRef = ref(null);

onMounted(() => {
  const handleScroll = () => {
    if (imageContainerRef.value) {
      const container = imageContainerRef.value;
      if (container.getBoundingClientRect().top < window.innerHeight - 100) {
        animatePopIn(container);
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  const animatePopIn = (element) => {
    element.style.transform = "scale(0.5)";
    const keyframes = [
      { scale: 0, duration: 0 },
      { scale: 1.1, duration: 200 },
      { scale: 0.8, duration: 400 },
      { scale: 1.05, duration: 600 },
      { scale: 0.9, duration: 800 },
      { scale: 1, duration: 900 },
    ];

    keyframes.forEach((keyframe, index) => {
      setTimeout(() => {
        element.style.transition = "transform 200ms ease-in-out";
        element.style.transform = `scale(${keyframe.scale})`;
      }, keyframe.duration);
    });
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <div
    ref="imageContainerRef"
    class="image-container"
    :style="{ width: props.width }">
    <picture>
      <source media="(max-width: 767px)" :srcset="imageMobileSrc" />
      <img :src="imageSrc" alt="Betso88" class="image" />
    </picture>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
}

.image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}
</style>
