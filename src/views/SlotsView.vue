<script setup>
import Hero from "@/components/Hero.vue";
import Banner from "@/components/Banner.vue";
import Image from "@/components/Image.vue";
import Footer from "@/components/Footer.vue";
import AnimatedCard from "@/components/AnimatedCard.vue";

import banner1 from "@/assets/img/slotsBanner1.webp";
import bannerMobile1 from "@/assets/img/slotsBannerMobile1.webp";
import image1 from "@/assets/img/slotsIcon1.webp";
import banner2 from "@/assets/img/slotsBanner2.webp";
import bannerMobile2 from "@/assets/img/slotsBannerMobile2.webp";

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
    "Play the Hottest and Most Exciting Online Slot Games | Panalobet";

  // Update the <meta name="description"> tag
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  metaDescription.content =
    "Join Panalobet to play the hottest online slot games and win up to ₱57,888. Enjoy thrilling gameplay, great security and big prizes now!";

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
    name: "Play the Hottest and Most Exciting Online Slot Games | Panalobet",
    description:
      "Join Panalobet to play the hottest online slot games and win up to ₱57,888. Enjoy thrilling gameplay, great security and big prizes now!",
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
    title="Panalobet | Play the Hottest and Most Exciting Casino Slots and Win ₱57,888"
    subTitle="2025 — Join Panalobet to play the hottest casino games and win up to ₱57,888. Enjoy thrilling gameplay, great security and big prizes now!" />

  <p class="text-center text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Online casino gaming is one of the fastest growing industries in the
    Philippines. Among the many online platforms that offer exciting games,
    Panalobet stands out with its fun-filled slots, beautiful graphics, and
    great odds of winning up to ₱57,888! In this article, we will examine why
    Panalobet has become so popular and how you can play the hottest and most
    exciting casino slots on their platform.
  </p>
  <p
    class="text-center text-ml sm:text-m md:text-l lg:text-xl mb-5 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold">
    Panalobet - The best online real money casino in the Philippines
  </p>
  <Image
    width="30%"
    :duration="1500"
    :speed="0.8"
    :imageSrc="image1"
    :imageMobileSrc="image1">
  </Image>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    What is Panalobet?
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Panalobet slots is an online casino platform known in the Philippines and
    throughout Asia. It has a wide collection of casino games, from card games
    like blackjack and poker, to popular slots. It is one of the platforms that
    allows Filipino players to play their favorite games safely, reliably, and
    full of fun.
  </p>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Panalobet slots offers cutting-edge technology that provides a realistic
    gaming experience. From high-quality graphics to thrilling sound effects,
    every game at Panalobet slots is designed to be fun and rewarding.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Why Choose Panalobet Slots?
  </h2>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    User-Friendly Interface
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Panalobet has a simple interface that is easy to use, even for beginners.
    You don't need much technical knowledge to navigate the platform and start a
    game. In just a few minutes, you can start playing your favorite slot game!
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Different Types of Slot Games
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Panalobet has a wide selection of slot games. Whether you're looking for
    classic slots, modern slots with bonus rounds, or progressive slots with a
    jackpot, you'll find it all at Panalobet. The different themes and styles of
    the game provide different experiences and excitement.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Great Rewards and Prizes
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    One of the main reasons why many people play Panalobet slots is because of
    its huge prizes. Each game has a different payout, and some have a chance to
    win up to ₱57,888 or more. This is no ordinary game; This is your chance to
    win big!
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Security and Safety
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Panalobet uses advanced security to keep players' information safe. They
    have SSL encryption technology that protects every transaction and
    information. Because of this, you can play without any worries.
  </p>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Steps to Getting Started with Panalobet Slots
  </h2>

  <div class="flex flex-wrap justify-center items-center gap-5">
    <AnimatedCard :duration="1000" speed="ease-out">
      <h4
        class="text-center text-xl sm:text-xl md:text-1xl lg:text-2xl bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold mb-2">
        Sign Up to Panalobet:
      </h4>
      <p class="text-center text-ml sm:text-m md:text-l lg:text-xl text-white">
        Signing up to Panalobet is quick and easy. You just need to provide some
        basic information and create an account.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
    </AnimatedCard>
    <AnimatedCard :duration="1200" speed="ease-out">
      <h4
        class="text-center text-xl sm:text-xl md:text-1xl lg:text-2xl bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold mb-2">
        Deposit Fund:
      </h4>
      <p class="text-center text-ml sm:text-m md:text-l lg:text-xl text-white">
        After signing up, you need to make a deposit to start playing your
        favorite game. Panalobet accepts various payment methods, such as credit
        cards, bank transfers, and e-wallets.
      </p>
    </AnimatedCard>
    <AnimatedCard :duration="1400" speed="ease-out">
      <h4
        class="text-center text-xl sm:text-xl md:text-1xl lg:text-2xl bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold mb-2">
        Choose a Slot Game:
      </h4>
      <p class="text-center text-ml sm:text-m md:text-l lg:text-xl text-white">
        With the number of slots you can choose from, choose the game that suits
        your interest and budget. There are games with higher payout rates and
        others with low stakes but big prizes.
      </p>
    </AnimatedCard>
    <AnimatedCard :duration="1600" speed="ease-out">
      <h4
        class="text-center text-xl sm:text-xl md:text-1xl lg:text-2xl bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold mb-2">
        Enjoy and Win!:
      </h4>
      <p class="text-center text-ml sm:text-m md:text-l lg:text-xl text-white">
        Now you can play! Remember to play responsibly and always consider your
        budget.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
    </AnimatedCard>
  </div>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Most Popular Slot Games at Panalobet
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Panalobet offers many slots that feature different themes and gameplay
    mechanics. Here are some of the most popular games you can try:
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Classic Slots
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Classic slots provide simple gameplay and often have three reels. They are
    inspired by traditional slot machines and often have symbols like fruit,
    BAR, and numbers. For players who want a straightforward game, this is the
    perfect choice.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Video Slots
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Video slots have more advanced graphics and often have five or more reels.
    There is usually a theme at the same time, such as adventure, fantasy, or
    action, and full of exciting features such as bonus rounds and free spins.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Progressive Jackpot
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    SlotsProgressive jackpot slots offer the biggest prizes. With each player's
    bet, the jackpot prize increases until someone gets a winning combination.
    At Panalobet, there are games where the jackpot reaches millions, so it's
    worth trying them out!
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Tips and Strategies for Playing Panalobet Slots
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Playing slots is based on luck, but there are some tips that can help
    increase your chances of winning:
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    1. Choose a Slot with High RTP:
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Return to Player (RTP) is a percentage of the total stake that the game
    returns to players over a long period of time. Choose slot games with high
    RTP to increase your chances of winning.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    2. Use Bonuses and Promotions:
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    At Panalobet, there are bonuses and promotions that players can use. For
    example, a welcome bonus provides extra funds to new players.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    3. Start with Small Bets:
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    If you are a beginner, start with a small bet and gradually increase it as
    you become familiar with the game.
  </p>

  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    4. Learn the Game Selection Strategy:
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    There are different types of slots with their own volatility.
    High-volatility slots award larger prizes but appear less often, while
    low-volatility slots award more frequent prizes but are of lower value.
  </p>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Why Panalobet is the Best Choice for Online Slots?
  </h2>
  <Banner
    width="80%"
    :duration="1500"
    :imageSrc="banner2"
    :imageMobileSrc="bannerMobile2" />

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Conclusion
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Playing at Panalobet Slots is a unique experience for Filipino players. With
    so many slot games to choose from, each one has a unique theme and features
    that provide excitement and the opportunity to win big. Best of all, you
    have a chance to win a big prize that can reach ₱57,888 or more!
  </p>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-20 text-white">
    If you are looking for a secure, safe, and exciting platform for online
    casino gaming, Panalobet slots is the answer. Don't hesitate, join Panalobet
    and discover endless fun and the possibility of winning huge prizes.
    Remember, gaming should be done responsibly and for fun.
  </p>
  <Footer></Footer>
</template>
