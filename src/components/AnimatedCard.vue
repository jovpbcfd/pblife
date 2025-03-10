<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  duration: {
    type: Number,
    default: 1000, // Duration in milliseconds
  },
  speed: {
    type: String,
    default: "ease-in-out", // Easing
  },
});

const cardRef = ref(null);
const isVisible = ref(false);

const handleAnimation = () => {
  const card = cardRef.value;
  if (card) {
    card.style.transition = `transform ${props.duration}ms ${props.speed}, opacity ${props.duration}ms ${props.speed}`;
    card.style.opacity = "1";
    card.style.transform = "translateX(0)";
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        handleAnimation();
        observer.unobserve(cardRef.value); // Unobserve after animating
      }
    },
    { threshold: 0.1 } // Trigger when 10% of the card is visible
  );

  if (cardRef.value) {
    observer.observe(cardRef.value);
  }

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div
    ref="cardRef"
    class="animated-card opacity-0 transform translate-x-[-100px] bg-midnightGlass backdrop-blur-md rounded-[14px] border-[1.5px] shadow-lg py-4 px-4 max-w-[400px]">
    <slot />
  </div>
</template>

<style scoped>
.animated-card {
  opacity: 0;
  transform: translateX(-100px);
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}

.animated-card:hover {
  transform: scale(1.05) !important; /* Slightly increase the size */
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Add a shadow effect */
  cursor: pointer; /* Change the cursor to a pointer */
  transition: transform 0.03s ease-in, box-shadow 0.03s ease-in; /* Smooth hover transition */
}
</style>
