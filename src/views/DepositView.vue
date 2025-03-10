<script setup>
import Hero from "@/components/Hero.vue";
import Banner from "@/components/Banner.vue";
import AnimatedCard from "@/components/AnimatedCard.vue";
import Image from "@/components/Image.vue";
import InfoGraphics from "@/components/InfoGraphics.vue";
import Footer from "@/components/Footer.vue";

import banner1 from "@/assets/img/depositBanner1.webp";
import bannerMobile1 from "@/assets/img/depositBannerMobile1.webp";
import icon1 from "@/assets/img/liveCasinoIcon1.webp";
import steps1 from "@/assets/img/liveCasinoSteps1.webp";
import steps2 from "@/assets/img/liveCasinoSteps2.webp";
import steps3 from "@/assets/img/liveCasinoSteps3.webp";

import { onMounted } from "vue";

onMounted(() => {

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


  // Update the <title> tag
  document.title = "Guide to Deposit Panalobet | Online Casino in Philippines";

  // Update the <meta name="description"> tag
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  metaDescription.content =
    "How to Deposit Safely and Easily at Panalobet, learn step-by-step instructions, tips for secure transactions, and available payment options.";

  // Update the <link rel="canonical"> tag
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = window.location.href;

  // Add schema markup
  const schemaScript = document.createElement("script");
  schemaScript.type = "application/ld+json";
  schemaScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Guide to Deposit Panalobet | Online Casino in Philippines",
    description:
      "How to Deposit Safely and Easily at Panalobet, learn step-by-step instructions, tips for secure transactions, and available payment options.",
    url: window.location.href,
    publisher: {
      "@type": "Organization",
      name: "Panalobet",
      logo: {
        "@type": "ImageObject",
        url: "@/assets/img/logo.png", // Replace with the actual logo URL
      },
    },
  });
  document.head.appendChild(schemaScript);
});
</script>

<template>
  <div class="mt-28"></div>
  <Banner
    width="100%"
    :duration="1500"
    :imageSrc="banner1"
    :imageMobileSrc="bannerMobile1" />
  <Hero
    class="mb-10"
    title="Deposit Panalobet, the First Step Towards Victory"
    subTitle="" />

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Introduction
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    • General idea about Panalobet as an online casino.
  </p>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    • Why depositing at Panalobet is important for new players and seasoned
    players alike.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    How to Get Started: Guide to Deposit Panalobet
  </h2>

  <div class="flex flex-wrap justify-center items-center gap-5">
    <AnimatedCard :duration="1000" speed="ease-out">
      <h4
        class="text-center text-xl sm:text-xl md:text-1xl lg:text-2xl bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold mb-2">
        Panalobet Registration:
      </h4>
      <p class="text-center text-ml sm:text-m md:text-l lg:text-xl text-white">
        How to sign up and create an account.
      </p>
    </AnimatedCard>
    <AnimatedCard :duration="1200" speed="ease-out">
      <h4
        class="text-center text-xl sm:text-xl md:text-1xl lg:text-2xl bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold mb-2">
        Choose Deposit Method:
      </h4>
      <p class="text-center text-ml sm:text-m md:text-l lg:text-xl text-white">
        Various payment options at Panalobet. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
    </AnimatedCard>
    <AnimatedCard :duration="1400" speed="ease-out">
      <h4
        class="text-center text-xl sm:text-xl md:text-1xl lg:text-2xl bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold mb-2">
        Deposit Process:
      </h4>
      <p class="text-center text-ml sm:text-m md:text-l lg:text-xl text-white">
        Step-by-step deposit guide.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
    </AnimatedCard>
  </div>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Benefits of Using Deposit Panalobet
  </h2>
  <div
    class="mb-10 flex flex-col md:flex-row gap-10 bg-midnightGlass backdrop-blur-md rounded-[7px] w-full py-10 px-10">
    <div class="md:w-1/2 w-full">
      <InfoGraphics
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="steps1"
        :imageMobileSrc="steps1">
      </InfoGraphics>
    </div>
    <div class="md:w-1/2 w-full">
      <p
        class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold">
        01
      </p>
      <div class="bg-purple-900/10 w-full rounded-[4px] px-5 py-5">
        <h4
          class="text-left text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
          Welcome Bonuses:
        </h4>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          Why depositing is worth it and what newbies can get.
        </p>
      </div>
    </div>
  </div>
  <div
    class="mb-10 flex flex-col md:flex-row gap-10 bg-midnightGlass backdrop-blur-md rounded-[7px] w-full py-10 px-10">
    <div class="md:w-1/2 w-full">
      <p
        class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold">
        02
      </p>
      <div class="bg-purple-900/10 w-full rounded-[4px] px-5 py-5">
        <h4
          class="text-left text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
          Promotions and Incentives:
        </h4>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          Regular bonuses for loyal players.
        </p>
      </div>
    </div>
    <div class="md:w-1/2 w-full">
      <InfoGraphics
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="steps2"
        :imageMobileSrc="steps2">
      </InfoGraphics>
    </div>
  </div>
  <div
    class="mb-10 flex flex-col md:flex-row gap-10 bg-midnightGlass backdrop-blur-md rounded-[7px] w-full py-10 px-10">
    <div class="md:w-1/2 w-full">
      <InfoGraphics
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="steps3"
        :imageMobileSrc="steps3">
      </InfoGraphics>
    </div>
    <div class="md:w-1/2 w-full">
      <p
        class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold">
        03
      </p>
      <div class="bg-purple-900/10 w-full rounded-[4px] px-5 py-5">
        <h4
          class="text-left text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
          Cashback and Free Spins:
        </h4>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          How they help to grow the bankroll.
        </p>
      </div>
    </div>
  </div>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Types of Games Accessible at Deposit Panalobet
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    • Slots and Progressive Jackpot: The most popular.
  </p>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    • Live Casino Games: Games like baccarat, blackjack, and roulette with
    real-time.
  </p>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    • Bingo and Card Games: Difference of.
  </p>

  <div class="flex flex-col md:flex-row mt-20 mb-20 gap-4">
    <div class="md:w-1/2 flex flex-col items-center md:pl-20 lg:pl-20">
      <h2
        class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed pt-5 md:pt-5 lg:pt-10 xl:pt-20">
        Tips for Success in Panalobet
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h2>
      <p class="text-ml sm:text-m md:text-l lg:text-xl text-white mb-5">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Having a Betting Strategy:</strong
        >
        Important.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <p class="text-ml sm:text-m md:text-l lg:text-xl text-white mb-5">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Understanding Games:</strong
        >
        Why it's important to study. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <p class="text-ml sm:text-m md:text-l lg:text-xl text-white mb-5">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Responsible Gaming:</strong
        >
        How to avoid overgaming and stay in control.
      </p>
    </div>
    <div class="md:w-1/2 flex items-center justify-end md:pr-20 lg:pr-52">
      <Image
        width="80%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="icon1"
        :imageMobileSrc="icon1"
        class="object-cover h-full">
      </Image>
    </div>
  </div>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Conclusion
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    • Summary of Panalobet benefits and satisfaction.
  </p>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    • Encourage readers to try their luck and take advantage of Panalobet
    opportunities.
  </p>

  <div class="mb-20"></div>

  <Footer></Footer>
</template>
