<script setup>
import Hero from "@/components/Hero.vue";
import Banner from "@/components/Banner.vue";
import Image from "@/components/Image.vue";
import InfoGraphics from "@/components/InfoGraphics.vue";
import CardGrid2 from "@/components/CardGrid2.vue";
import Footer from "@/components/Footer.vue";
import FAQs from "@/components/FAQs.vue";

import banner1 from "@/assets/img/fishingBanner1.webp";
import bannerMobile1 from "@/assets/img/fishingBannerMobile1.webp";
import image1 from "@/assets/img/fishingGames1.webp";
import image2 from "@/assets/img/fishingGames2.webp";
import image3 from "@/assets/img/fishingGames3.webp";
import image4 from "@/assets/img/fishingGames4.webp";
import icon1 from "@/assets/img/fishingIcon1.webp";
import steps1 from "@/assets/img/fishingSteps1.webp";
import steps2 from "@/assets/img/fishingSteps2.webp";
import steps3 from "@/assets/img/fishingSteps3.webp";
import icon2 from "@/assets/img/fishingIcon2.webp";

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
  document.title =
    "Exciting Online Fishing Games | Real Game Real Win-Panalobet";

  // Update the <meta name="description"> tag
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  metaDescription.content =
    "Enjoy the thrilling world of online fishing games in Philippines ! Experience realistic gameplay, big rewards, and endless fun. Cast your nets and start winning now!";

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
    name: "Exciting Online Fishing Games | Real Game Real Win-Panalobet",
    description:
      "Enjoy the thrilling world of online fishing games in Philippines ! Experience realistic gameplay, big rewards, and endless fun. Cast your nets and start winning now!",
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

const faqData = [
  {
    question: "Q1: What are the main ways to win at Panalobet Fishing?",
    answer:
      "Use the right strategy, target the high-point fish, and study the fish's movements.",
  },
  {
    question: "Q2: Can prizes be withdrawn?",
    answer:
      "Yes, your winnings can be withdrawn using payment options such as GCash or PayMaya.",
  },
  {
    question: "Q3: Does it have a mobile app?",
    answer:
      "Yes, Panalobet has a mobile-friendly version that is easy to access with a smartphone.",
  },
];
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
    title="Panalobet online fishing games community | Panalobet live"
    subTitle="Panalobet Fishing games provide a unique fishing experience using technology and graphics that show the realistic sea and different types of fish." />

  <div class="flex flex-wrap justify-center items-center gap-2 mb-20">
    <CardGrid2 :duration="1200" :imageSrc="image1" :imageMobileSrc="image1" />
    <CardGrid2 :duration="1300" :imageSrc="image2" :imageMobileSrc="image2" />
    <CardGrid2 :duration="1400" :imageSrc="image3" :imageMobileSrc="image3" />
    <CardGrid2 :duration="1500" :imageSrc="image4" :imageMobileSrc="image4" />
  </div>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Panalobet Fishing: Online Fishing Games Community in the Philippines
  </h2>
  <p class="text-center text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Panalobet Fishing is a featured game on Panalobet, a well-known online
    casino and betting platform in the Philippines. These fishing games are
    known for providing fun, adrenaline, and the chance to win big prizes. For
    Filipinos looking for fun and exciting entertainment, Panalobet Fishing is
    one of the top-picks.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    What is Panalobet and Why Are Online Fishing Games Popular?
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Panalobet is a premier online gaming platform in the Philippines known for
    various games such as slots, sports betting, and above all, online fishing
    games. Panalobet Fishing games provide a unique fishing experience using
    technology and graphics that show the realistic sea and different types of
    fish. Apart from being fun, every player has great potential to earn real
    money through cash rewards and jackpots.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Why are Fishing Games Popular in the Philippines?
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Many Filipinos are fond of fishing games because of the following:
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Easy to Play :</strong
    >
    The mechanics are simple, so it's easy for anyone to learn.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Exciting Rewards :</strong
    >
    Each fish catch has corresponding points or prizes that can be exchanged for
    real money.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• With Social Interaction :</strong
    >
    Panalobet fishing games also feature a multiplayer mode where you can
    compete with other players.
  </p>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Panalobet Fishing Game Types and Their Characteristics
  </h2>

  <div class="flex flex-col md:flex-row mt-10 gap-4">
    <div class="md:w-1/2 flex items-center md:pl-20 lg:pl-20">
      <p class="text-ml sm:text-m md:text-l lg:text-xl text-white">
        Panalobet Fishing has different games that every player can try. Each
        game has its own characteristics and style that provide a more enjoyable
        experience.
      </p>
    </div>
    <div class="md:w-1/2 flex items-center justify-end md:pr-20 lg:pr-52">
      <Image
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="icon1"
        :imageMobileSrc="icon1"
        class="object-cover h-full">
      </Image>
    </div>
  </div>
  <!-- <div class="flex flex-col md:flex-row mt-10 gap-10">
    <div class="md:w-1/2">
      <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
        Panalobet Fishing has different games that every player can try. Each game
        has its own characteristics and style that provide a more enjoyable
        experience.
      </p>
    </div>
    <div class="md:w-1/2">
      <Image
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="homeImg3"
        :imageMobileSrc="homeImg3">
      </Image>
    </div>
  </div> -->

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Popular Types of Fishing Games in Panalobet
  </h2>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    • Classic Fishing
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    In this game, different types of fish can be caught with different points.
    The higher the score, the bigger the reward.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    • Multiplayer Fishing
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    In this type of game, one can compete with other players. It's more fun and
    provides an opportunity to increase the prize.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    • Boss Battle
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    This is one of the most exciting types of fishing game in Panalobet where
    there are big bosses or special types of fish that give a big jackpot.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Features of Panalobet Fishing
  </h2>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Realistic Graphics :</strong
    >
    The visuals are very realistic, like being under the sea.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Different Species of Fish :</strong
    >
    There are small and large fish with different values, so you can plan your
    catch.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Exclusive Tools :</strong
    >
    Players have access to tools and equipment that help with higher catches,
    such as special guns.
  </p>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    How to Sign Up and Start Playing Panalobet Fishing
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
          Account Registration:
        </h4>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          • Open the Panalobet website and click on “Sign Up” or “Register.”
        </p>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          • Provide the required information such as name, email address, and
          phone number.
        </p>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          • Complete the verification process to ensure the security of your
          account.
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
          Deposit of Funds:
        </h4>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          After registering, you need to deposit money into your account to buy
          coins or bullets to use for fishing. Panalobet accepts major payment
          methods in the Philippines such as GCash, PayMaya, and bank transfers.
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
          Start the Game:
        </h4>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          Select “Fishing” from the main menu and select a game of your choice.
          Take time to get used to the game before investing large sums.
        </p>
      </div>
    </div>
  </div>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Strategies and Tips to Win at Panalobet Fishing
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    In Panalobet Fishing, the right strategy is important to have a greater
    chance of winning and getting the jackpot.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Basic Tips for playing Panalobet Fishing
  </h3>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    • Choose the Right Target:
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    Catch high scoring fish rather than focusing on small fish.
  </p>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    • Use the Right Gun or Ammunition:
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    At Panalobet Fishing, there are different types of gun or ammunition
    suitable for different sizes of fish.
  </p>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    • Beware of Boss Battles:
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    The Boss has a big reward but requires more resources, so plan carefully
    before catching it.
  </p>

  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Advanced Strategy to Gain more Odd in Panalobet Fishing Games
  </h3>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    • Learning Patterns:
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    Observe the movement of the fish in each round to better predict their
    behavior.
  </p>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    • Time Management:
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    Don't use up all the bullets in one round; allow for opportunities for
    high-point fish to appear.
  </p>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    • Choose the Right Game:
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    If you are a beginner, it is better to start with lower betting options to
    hone your skills.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Responsible Gaming: How to Manage Your Budget and Risk
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Playing Panalobet Fishing should only be considered a hobby. Here are some
    ways to make sure you're being a responsible player.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Setting a Budget
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Start with a small budget. Fishing games are easily addictive, so proper
    planning of your resources is important.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Enforcement Limitation
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Use Panalobet tools for daily or weekly spending limits. There are settings
    that will help you avoid over-betting.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Breaks and Timeouts
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Sometimes, too much addiction to the game can cause stress or fatigue. Set
    time limits and take breaks.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Panalobet Community: Interact with Fellow Players
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    One of the exciting parts of Panalobet Fishing is the interaction with the
    community of fellow players. Here are some ways to get involved in the
    Panalobet community.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Multiplayer Competitions
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Join regular competitions with big prizes. These competitions allow players
    to cooperate or compete for higher scores.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Inviting Friends
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    You can invite friends to Panalobet Fishing, play together, and work
    together to catch big fish or Bosses.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Events and Promotions
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Panalobet regularly has events and promos exclusively for fishing games.
    Here there are extra rewards and bonuses available for active players.
  </p>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    FAQs (Frequently Asked Questions) about Panalobet Fishing
  </h2>
  <FAQs :faqs="faqData" />

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-32 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    How to Become an Expert in Panalobet Fishing
  </h2>
  <p
    class="text-center text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white px-10 md:px-20 lg:px-40">
    Panalobet Fishing is not just a game but also an opportunity to win prizes
    and interact with the community of fellow players. With the right strategy,
    gaming discipline, and active community participation, you can become an
    expert in this game.
  </p>
  <Image
    width="30%"
    :duration="1500"
    :speed="0.8"
    :imageSrc="icon2"
    :imageMobileSrc="icon2">
  </Image>
  <div class="mb-20"></div>

  <Footer></Footer>
</template>
