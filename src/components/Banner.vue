<script setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  priority: {
    type: String,
    default: 'high',
    validator(val) {
      return ['low', 'high', 'auto'].includes(val)
    }
  },
  loading: {
    type: String,
    default: "eager",
    validator(val) {
      return ['lazy', 'eager'].includes(val)
    }
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

// const imageContainerRef = ref(null);
// onMounted(() => {
//   const handleScroll = () => {
//     if (imageContainerRef.value) {
//       const container = imageContainerRef.value;
//       if (container.getBoundingClientRect().top < window.innerHeight - 100) {
//         animateSlideLeft(container);
//       }
//     }
//   };

//   const animateSlideLeft = (element) => {
//     element.style.transform = "translateX(-100%)";
//     setTimeout(() => {
//       element.style.transition = `transform ${props.duration}ms ease-in-out`;
//       element.style.transform = "translateX(0)";
//     }, 10);
//   };

//   window.addEventListener("scroll", handleScroll);

//   onUnmounted(() => {
//     window.removeEventListener("scroll", handleScroll);
//   });
// });
</script>

<template>
  <div ref="cardRef" class="banner-container" :style="{ width: props.width }">
    <picture>
      <source media="(max-width: 767px)" :srcset="imageMobileSrc" />
      <img :src="imageSrc" alt="Betso88" class="banner-image"  :loading="loading" :fetchpriority="priority"/>
    </picture>
  </div>
</template>

<!-- <style scoped>
.banner-container {
  position: relative;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;

  opacity: 0; 
  transform: translateX(-100%);
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
    90deg,
    rgba(255, 110, 199, 0.8),
    rgba(133, 255, 189, 0.8),
    rgba(255, 215, 0, 0.8),
    rgba(255, 110, 199, 0.8)
  );
  background-size: 300% 300%;
  animation: glowBorder 3s linear infinite;
  z-index: -2;
  filter: blur(5px);
}

.banner-container:hover {
  animation: shake 0.3s;
}

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
}

.banner-image {
  width: 100%;
  height: 100%;
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
</style> -->

<style scoped>
.banner-container {
  max-width: 1200px;
  aspect-ratio: 1280 / 336.66;
  width: 100%;
  position: relative;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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
    90deg,
    rgba(255, 110, 199, 0.8),
    rgba(133, 255, 189, 0.8),
    rgba(255, 215, 0, 0.8),
    rgba(255, 110, 199, 0.8)
  );
  background-size: 300% 300%;
  animation: glowBorder 20s linear infinite;
  z-index: -2;
  filter: blur(5px);
}

/* .banner-container:hover {
  animation: shake 0.8s;
} */

/* @keyframes shake {
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
    transform: translateX(-8px);
  }
  40% {
    transform: translateX(8px);
  }
  50% {
    transform: translateX(-6px);
  }
  60% {
    transform: translateX(6px);
  }
  70% {
    transform: translateX(-4px);
  }
  80% {
    transform: translateX(4px);
  }
  90% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(0);
  }
} */

.banner-image {
  width: 100%;
  height: 100%;
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
