<script setup>
// import Hero from "@/components/Hero.vue";
import Banner from "@/components/Banner.vue";
import Image from "@/components/Image.vue";

// import FAQs from "@/components/FAQs.vue";
// import Footer from "@/components/Footer.vue";

import banner1 from "@/assets/img/homeBanner1.webp";
import bannerMobile1 from "@/assets/img/homeBannerMobile1.webp";
import image1 from "@/assets/img/homeIcon1.webp";
import imageMobile1 from "@/assets/img/homeIcon1.webp";
import homeImg2 from "@/assets/img/homeIcon2.webp";
import homeImg3 from "@/assets/img/homeIcon3.webp";

import { onMounted, defineAsyncComponent } from "vue";

const AsyncPromotionAndBonuses = defineAsyncComponent(() => import("@/components/PromotionAndBonuses.vue"))
const AsyncProsAndCons = defineAsyncComponent(() => import("@/components/ReviewProsAndCons.vue"))
const AsyncFooter = defineAsyncComponent(() => import('@/components/Footer.vue'))
const AsyncFaq = defineAsyncComponent(() => import("@/components/FAQs.vue"))
const AsyncHero = defineAsyncComponent(() => import('@/components/Hero.vue'))

onMounted(() => {


  // Add the Google Site Verification meta tag
      const metaTag = document.createElement('meta');
      metaTag.name = 'google-site-verification';
      metaTag.content = '0cIpcNN99uWuuc-olGGE6UnwO9YR0ZgThCBWeOAKC14'; 
      document.head.appendChild(metaTag);
      

  // Preload banner images 
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = '/src/assets/img/homeBanner1.webp';
  link.type = 'image/webp';
  
  document.head.appendChild(link);


  // Update the <title> tag
  document.title = "Panalobet Most Trusted Online Casinos in the Philippines";

  // Update the <meta name="description"> tag
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  metaDescription.content =
    "Panalobet is one of the most trusted online casinos in Philippines. Join now and enjoy Live casino, slots, table games, Arcade, and more, win big bonuses and welcome bonus!";

  // Update the <link rel="canonical"> tag
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = window.location.href;

  //==
  // Add Open Graph meta tags
  const ogTitle = 'Panalobet Most Trusted Online Casinos in the Philippines';
const ogDescription = 'Panalobet is one of the most trusted online casinos in Philippines. Join now and enjoy Live casino, slots, table games, Arcade, and more, win big bonuses and welcome bonus!';
const ogImage = 'https://panalobet.life/assets/homeBanner1-CQD2dBTK.webp';
const ogUrl = window.location.href; // Use the current URL

// OG Title
let metaTagOg = document.querySelector('meta[property="og:title"]');
if (!metaTagOg) {
  metaTagOg = document.createElement('meta');
  metaTagOg.setAttribute('property', 'og:title');
  document.head.appendChild(metaTagOg);
}
metaTagOg.setAttribute('content', ogTitle);

// OG Description
metaTagOg = document.querySelector('meta[property="og:description"]');
if (!metaTagOg) {
  metaTagOg = document.createElement('meta');
  metaTagOg.setAttribute('property', 'og:description');
  document.head.appendChild(metaTagOg);
}
metaTagOg.setAttribute('content', ogDescription);

// OG Image
metaTagOg = document.querySelector('meta[property="og:image"]');
if (!metaTagOg) {
  metaTagOg = document.createElement('meta');
  metaTagOg.setAttribute('property', 'og:image');
  document.head.appendChild(metaTagOg);
}
metaTagOg.setAttribute('content', ogImage);

// OG URL
metaTagOg = document.querySelector('meta[property="og:url"]');
if (!metaTagOg) {
  metaTagOg = document.createElement('meta');
  metaTagOg.setAttribute('property', 'og:url');
  document.head.appendChild(metaTagOg);
}
metaTagOg.setAttribute('content', ogUrl);

// Optionally, you can set other OG tags like og:type, og:site_name, etc.
// Example: OG Type
metaTagOg = document.querySelector('meta[property="og:type"]');
if (!metaTagOg) {
  metaTagOg = document.createElement('meta');
  metaTagOg.setAttribute('property', 'og:type');
  document.head.appendChild(metaTagOg);
}
metaTagOg.setAttribute('content', 'website');
//===


  // Add schema markup
  const schemaScript = document.createElement("script");
  schemaScript.type = "application/ld+json";
  schemaScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Panalobet Most Trusted Online Casinos in the Philippines",
    description:
      "Panalobet is one of the most trusted online casinos in Philippines. Join now and enjoy Live casino, slots, table games, Arcade, and more, win big bonuses and welcome bonus!",
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
    question: "What is Panalobet Casino?",
    answer:
      "Panalobet Casino is an online platform for casino games that offers a variety of games such as JILI slots, Tongits, Bingo, Poker, and many others. The platform is licensed and provides a safe gaming experience for players in the Philippines.",
  },
  {
    question: "How to register at Panalobet Casino?",
    answer:
      "To register, go to Panalobet Casino's official website, click the “Register” or “Sign Up” button, and follow the steps to provide your personal information. You also need to set a username and password to use your account.",
  },
  {
    question: "What types of games can be found at Panalobet Casino?",
    answer:
      "At Panalobet, various types of games can be found including slots, live casino games such as baccarat and roulette, Tongits, Poker, and Bingo. There are also special games from popular providers like JILI Games.",
  },
  {
    question: "Is there a bonus for new members?",
    answer:
      "Yes, Panalobet Casino provides a welcome bonus for newly registered members. They may also provide free spins and additional promotions that can be used in casino games.",
  },
  {
    question: "How to deposit and withdraw at Panalobet Casino?",
    answer:
      "Panalobet Casino has fast and secure deposit and withdrawal methods. You can deposit via bank transfer, e-wallets, and other local payment options. For withdrawal, go to account settings and follow the steps to process your cashout.",
  },
  {
    question: "Is it safe to play at Panalobet Casino?",
    answer:
      "Yes, Panalobet Casino is safe because it uses advanced security measures and encrypts all transactions to ensure the safety of players' information.",
  },
  {
    question: "What if I have a problem with the account or the game?",
    answer:
      "If there is a problem with your account or game, Panalobet Casino's customer service can be contacted which is open 24/7. You can contact them via live chat, email or contact number for immediate assistance.",
  },
  {
    question: "Can Panalobet be played with a mobile phone?",
    answer:
      "Yes, Panalobet Casino is compatible with mobile devices. You can download their mobile app or play on their mobile-friendly website using your smartphone or tablet.",
  },
  {
    question: "Are there promotions for loyal players?",
    answer:
      "Yes, Panalobet Casino has loyalty programs and special promos for regular players. Active members can receive exclusive bonuses and rewards.",
  },
  {
    question: "Is Panalobet Casino legal in the Philippines?",
    answer:
      "Yes, Panalobet Casino is licensed and meets the standards of legality and regulation, so it is a legit online casino that can be played by players in the Philippines.",
  },
];
</script>

<template>
  <div class="mt-28"></div>
  <div class="min-h-[974.678px]">
    <Banner
      width="100%"
      :duration="1500"
      :imageSrc="banner1"
      :imageMobileSrc="bannerMobile1" />
    <AsyncHero
      class="mb-5"
      title="Panalobet - The best online real money casino in the Philippines"
      subTitle="Panalobet Casino is known as one of the most trusted online casinos in the Philippines. With the increasing number of online casino players in the country, having a platform with a safe and thrilling gaming experience becomes essential. In this article, we will discuss the reasons why Panalobet is considered the leading and best online real money casino in the Philippines. From their games, bonuses, customer service, and security, let's find out why many Filipinos choose Panalobet Casino." />
    <Image
      width="30%"
      :duration="1500"
      :speed="0.8"
      :imageSrc="image1"
      :imageMobileSrc="imageMobile1">
    </Image>
  </div>
  <div
  class="hidden md:flex flex-col mt-20 mb-2 text-xl sm:text-xl md:text-1xl lg:text-2xl bg-gradient-to-r from-yellow-100 to-red-200 text-transparent bg-clip-text font-bold">
  Table Content
  <div
    :class="[
      'hidden md:flex bg-midnightGlass backdrop-blur-md rounded-[14px] border-[1.5px] shadow-lg',
    ]">
    <div class="flex items-center justify-between py-2 px-4 gap-10">
      <div class="md:w-1/5">
        <a
          href="https://www.Panalobet.com/"
          target="_blank"
          :class="['text-ml sm:text-m md:text-l lg:text-xl text-white']"
        >1. Why Panalobet Casino is the Best Online Casino?</a>
      </div>
      <div class="md:w-1/5">
        <a
          href="https://www.Panalobet.com/"
          target="_blank"
          :class="['text-ml sm:text-m md:text-l lg:text-xl text-white']"
        >2. How to Register and Play at Panalobet?</a>
      </div>
      <div class="md:w-1/5">
        <a
          href="https://www.Panalobet.com/"
          target="_blank"
          :class="['text-ml sm:text-m md:text-l lg:text-xl text-white']"
        >3. Panalobet Promotions and Bonuses</a>
      </div>
      <div class="md:w-1/5">
        <a
          href="https://www.Panalobet.com/"
          target="_blank"
          :class="['text-ml sm:text-m md:text-l lg:text-xl text-white']"
        >4. Advantages and Disadvantages of Panalobet Casino</a>
      </div>
      <div class="md:w-1/5">
        <a
          href="https://www.Panalobet.com/"
          target="_blank"
          :class="['text-ml sm:text-m md:text-l lg:text-xl text-white']"
        >5. Frequently Asked Questions about Panalobet Casino</a>
      </div>
    </div>
  </div>
</div>
  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Why Panalobet Casino is the Best Online Casino?
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    The success of Panalobet Casino is not only in their wide selection of games
    but also in additional services and features that are truly engaging for
    players. Here are some of the reasons why Panalobet Casino is the leader in
    the online casino industry of the Philippines:
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    1.User-Friendly Interface and Mobile Compatibility
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Panalobet has a simple and easy-to-use interface that allows players to
    quickly find their favorite games. Moreover, the website is also compatible
    with mobile devices, so you can play anywhere, anytime.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    2.Top-Notch Security
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    One of the main concerns of gamers is the security of their information. At
    Panalobet, they use advanced security measures such as SSL encryption to
    ensure the safety of every transaction and personal information of their
    players.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    3.Legality and Licensing
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-2 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <a
      href="https://Panalobet.com"
      class="bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold"
      >Panalobet Casino</a
    >
    is fully licensed and regulated by the gaming authorities, which means they
    follow strict regulations for fair and transparent play. Being licensed
    gives players extra confidence that their money and data are in the right
    hands.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Wide Selection of Games Panalobet is known for their wide range of games,
    from favorite slots, live casino, and table games like baccarat, poker, and
    blackjack. Each game is designed to provide a thrilling experience and high
    payouts for lucky players.
  </p>
  <p
    class="text-center text-ml sm:text-m md:text-l lg:text-xl mt-10 mb-5 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold">
    Panalobet - The best online real money casino in the Philippines
  </p>
  <Image
    width="30%"
    :duration="1500"
    :speed="0.8"
    :imageSrc="homeImg2"
    :imageMobileSrc="homeImg2"
    fetchpriority="low"
    loading="lazy"
    />


  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Games at Panalobet Casino
  </h2>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    1. Favorite Slots
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Slot games are one of the main attractions of Panalobet Casino. With so much
    choice, every player can find a game that matches their taste, whether it's
    simple classic slots or modern video slots with special features like free
    spins and jackpot bonuses.
  </p>
  <ul class="px-5 md:px-5 lg:px-10 xl:px-20">
    <li>
      <p
        class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >JILI Slots:</strong
        >
        Known for their high quality graphics and innovative features, JILI
        slots are a favorite among Filipinos due to their thematic design and
        easy mechanics.
      </p>
    </li>
    <li>
      <p
        class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Progressive Jackpot Slots:</strong
        >
        For players seeking bigger prizes, progressive jackpot slots offer the
        chance to win huge amounts that keep growing with every bet.
      </p>
    </li>
  </ul>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    2. Live Casino Games
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    At Panalobet, players can enjoy real-time fun with their live casino games.
    These games are hosted by real dealers, so players feel like they are in a
    real casino.
  </p>
  <ul class="px-5 md:px-5 lg:px-10 xl:px-20">
    <li>
      <p
        class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Live Baccarat:</strong
        >
        A classic and favorite game of Filipinos, live casino baccarat provides
        instant excitement with every bet.
      </p>
    </li>
    <li>
      <p
        class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Live Roulette:</strong
        >
        A game of luck, roulette provides a variety of betting options that
        players can play with.
      </p>
    </li>
  </ul>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    3. Table and Card Games
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-2 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Aside from slots and live games,
    <a
      href="https://Panalobet.com"
      class="bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold"
      >Panalobet Casino</a
    >
    has a wide selection of table games like poker, blackjack, and other card
    games that provide a bit of strategy and fun for more serious players.
  </p>
  <ul class="px-5 md:px-5 lg:px-10 xl:px-20">
    <li>
      <p
        class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Poker:</strong
        >
        One of the most popular casino games, poker requires skill and proper
        strategy. At Panalobet, you can play Texas Hold'em, Omaha, and various
        variants.
      </p>
    </li>
    <li>
      <p
        class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Tongits:</strong
        >
        A well-known card game in the Philippines, tongits has its own charm and
        is the reason why it is popular among casino players in the country.
      </p>
    </li>
  </ul>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    4. Bingo and Other Games
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-2 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Panalobet doesn't just focus on traditional casino games. They also have
    games like bingo, which is popular among Filipinos, as well as other
    mini-games that are easy to play and fun for all types of players.
  </p>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    How to Register and Play at Panalobet
  </h2>
  <p class="text-center text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Registering at Panalobet Casino is quick and easy. Follow the following
    steps to start playing and enjoying their bonuses and games.
  </p>

  <div class="flex flex-col md:flex-row mt-10 gap-10">
    <div class="md:w-2/3">
      <h3
        class="mb-5 text-2xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
        Visit Panalobet Casino Official Website
      </h3>

      <p class="px-5 mb-5 text-ml sm:text-m md:text-l lg:text-xl text-white">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Fill the Registration Form:</strong
        >
        Enter the required information such as your name, email, and other
        details.
      </p>
      <p class="px-5 mb-5 text-ml sm:text-m md:text-l lg:text-xl text-white">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Create a Secure Login:</strong
        >
        Be sure to use a strong and secure password for your account.
      </p>
      <p class="px-5 mb-5 text-ml sm:text-m md:text-l lg:text-xl text-white">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Deposit Funds:</strong
        >
        Select the deposit method you prefer and deposit funds to start playing.
      </p>
      <p class="px-5 mb-5 text-ml sm:text-m md:text-l lg:text-xl text-white">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Start Playing:
        </strong>
        Choose a game from their wide selection and start your gaming experience
        at Panalobet.
      </p>
    </div>
    <div class="md:w-1/3">
      <Image
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="homeImg3"
        :imageMobileSrc="homeImg3">
      </Image>
    </div>
  </div>

 <AsyncPromotionAndBonuses />

  <AsyncProsAndCons />

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Frequently Asked Questions (FAQs) about Panalobet Casino
  </h2>
  <AsyncFaq :faqs="faqData" />
  <AsyncFooter />
</template>
