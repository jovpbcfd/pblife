<script setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
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
  imageSrc: {
    type: String,
    required: true,
  },
  imageMobileSrc: {
    type: String,
    required: true,
  },
});

const cardRef = ref(null);
const isVisible = ref(false);

const handleAnimation = () => {
  const card = cardRef.value;
  if (card) {
    card.style.transition = `transform ${props.duration}ms ease-out, opacity ${props.duration}ms ease-out`;
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
        observer.unobserve(cardRef.value); // Stop observing after animation
      }
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
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
    class="banner-container flex flex-col md:flex-row"
    :style="{ width: props.width }">
    <picture class="md:w-1/3 w-full">
      <source media="(max-width: 767px)" :srcset="imageMobileSrc" />
      <img :src="imageSrc" alt="Betso88" class="banner-image" />
    </picture>
    <div class="md:w-2/3 w-full px-5 py-5">
      <h3
        class="mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-700 via-yellow-900 to-gray-700 text-transparent bg-clip-text">
        {{ title }}
      </h3>
      <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-yellow-900">
        {{ description }}
      </p>
      <!-- <div v-html="formattedDescription">
        {{ description }}
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  position: relative;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center !important;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateX(-50%);
}

.banner-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  background: linear-gradient(
    45deg,
    rgba(255, 215, 0, 0.9),
    rgba(255, 223, 132, 0.9),
    rgba(212, 175, 55, 0.9),
    rgba(240, 220, 130, 0.9)
  );
  background-size: 300% 300%;
  animation: glowBorder 20s linear infinite;
  z-index: -2;
  filter: blur(5px);
}
/* 
.banner-container:hover {
  animation: shake 0.3s;
} */
/* 
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(-10px);
  }
  20% {
    transform: translateX(10px);
  }
  30% {
    transform: translateX(-10px);
  }
  40% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(-10px);
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(5px);
  }
  90% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
} */

.banner-image {
  width: 100%;
  max-width: 250px;
  height: 100%;
  justify-self: center;
  object-fit: cover;
  border: 2px solid transparent;
  border-radius: 10px;
}

@keyframes glowBorder {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
