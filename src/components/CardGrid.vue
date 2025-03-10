<script setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  title: {
    type: String,
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
    class="animated-card cards"
    :style="{ width: props.width }">
    <div class="icon-container">
      <picture>
        <source media="(max-width: 767px)" :srcset="imageMobileSrc" />
        <img :src="imageSrc" alt="Betso88" class="banner-image" />
      </picture>
      <div class="content">
        <h3
          class="card-title text-2xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text font-bold">
          {{ title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards {
  position: relative;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
  max-height: 300px;
  margin-bottom: 100px;
  /* overflow: hidden; */
}
.icon-container {
  /* height: 250px; */
  overflow: hidden;
  position: relative;
  margin-top: -100px !important;
  display: flex;
  justify-self: center;
}

.cards::before {
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

.cards:hover {
  animation: shake 0.6s;
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
}

.banner-image {
  display: flex;
  justify-self: center;
  width: 80%;

  display: block;
  object-fit: cover; /* Maintain aspect ratio and cover the container */
  height: 100%; /* Make the image fill the container */
}

.content {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  padding: 40px 0px;
  /* background-color: rgba(0, 0, 0, 0.2); */
  width: 100%;
}
.card-title {
  text-align: center !important;
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

.animated-card {
  opacity: 0;
  transform: translateX(-100px);
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}
</style>
