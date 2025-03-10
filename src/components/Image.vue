<script setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  loading: {
    type: String,
    default: "lazy",
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

// onMounted(() => {
//   if (imageContainerRef.value) {
//     const container = imageContainerRef.value;
//     container.style.transform = "scale(0.05)";
//     const keyframes = [
//       { scale: 0.05, duration: 0 },
//       { scale: 1.2, duration: 200 },
//       { scale: 0.8, duration: 400 },
//       { scale: 1.1, duration: 600 },
//       { scale: 1, duration: 800 },
//     ];

//     keyframes.forEach((keyframe, index) => {
//       setTimeout(() => {
//         container.style.transition = "transform 200ms ease-in-out";
//         container.style.transform = `scale(${keyframe.scale})`;
//       }, keyframe.duration);
//     });
//   }
// });

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
      { scale: 0.1, duration: 0 },
      { scale: 1.1, duration: 200 },
      { scale: 0.8, duration: 400 },
      { scale: 1.05, duration: 600 },
      { scale: 0.9, duration: 800 },
      { scale: 1, duration: 1000 },
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

console.log(props.loading, props.priority)
</script>

<template>
  <div
    ref="imageContainerRef"
    class="image-container"
    :style="{ width: props.width }">
    <picture>
      <source media="(max-width: 767px)" :srcset="imageMobileSrc" />
      <img :src="imageSrc" alt="Betso88" class="image" :loading="props.loading" />
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

.image-container:hover {
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

.image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}
</style>
