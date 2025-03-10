<script setup>
import Hero from "@/components/Hero.vue";
import Banner from "@/components/Banner.vue";
import Image from "@/components/Image.vue";
import InfoGraphics from "@/components/InfoGraphics.vue";
import CardGrid from "@/components/CardGrid.vue";
import Footer from "@/components/Footer.vue";

import banner1 from "@/assets/img/sportsBanner1.webp";
import bannerMobile1 from "@/assets/img/sportsBannerMobile1.webp";
import sports1 from "@/assets/img/sportsGrid1.webp";
import sports2 from "@/assets/img/sportsGrid2.webp";
import sports3 from "@/assets/img/sportsGrid3.webp";
import sports4 from "@/assets/img/sportsGrid4.webp";
import sportsSteps1 from "@/assets/img/sportsSteps1.webp";
import sportsSteps2 from "@/assets/img/sportsSteps2.webp";
import sportsSteps3 from "@/assets/img/sportsSteps3.webp";
import sportsLegal1 from "@/assets/img/sportsLegal1.webp";
import sportsLegal2 from "@/assets/img/sportsLegal2.webp";
import sportsLegal3 from "@/assets/img/sportsLegal3.webp";
import image1 from "@/assets/img/sportsIcon1.webp";

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
  document.title = "Panalobet Sports Betting-Bet on your favorite sports";

  // Update the <meta name="description"> tag
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  metaDescription.content =
    "Panalobet Sports is one of the most popular online casino and sports betting platforms in the Philippines. It offers a wide range of casino games, sports betting and e-sports.";

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
    name: "Panalobet Sports Betting-Bet on your favorite sports",
    description:
      "Panalobet Sports is one of the most popular online casino and sports betting platforms in the Philippines. It offers a wide range of casino games, sports betting and e-sports.",
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
    class="mb-32"
    title="Betting at Panalobet Sports Online Casino of the Philippines"
    subTitle="Panalobet is one of the best legal online casinos in the Philippines. Enjoy a wide range of games, including slots, Sports Betting" />

  <div class="flex flex-wrap justify-center items-center gap-5">
    <CardGrid
      :title="`&nbsp;`"
      :duration="1000"
      :imageSrc="sports1"
      :imageMobileSrc="sports1" />
    <CardGrid
      :title="`&nbsp;`"
      :duration="1200"
      :imageSrc="sports2"
      :imageMobileSrc="sports2" />
    <CardGrid
      :title="`&nbsp;`"
      :duration="1400"
      :imageSrc="sports3"
      :imageMobileSrc="sports3" />
    <CardGrid
      :title="`&nbsp;`"
      :duration="1600"
      :imageSrc="sports4"
      :imageMobileSrc="sports4" />
  </div>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    What is Panalobet Sports?
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Panalobet Sports is one of the most popular online casino and sports betting
    platforms in the Philippines. It offers a wide range of casino games, sports
    betting and e-sports, making it an ideal place for players looking for both
    entertainment and the opportunity to win real money.
  </p>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    With a user-friendly interface, secure payment options, and 24/7 customer
    support, online gaming becomes easier and safer for Filipinos.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Why Are Online Casinos and Sports Betting Popular in the Philippines?
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    There are many reasons why online casinos and sports betting continue to
    grow in the country. First, easy access is the main reason. Anyone can play
    using their smartphone or computer, as long as they have an internet
    connection. Second, different games can be chosen, from classic casino games
    to modern e-sports. Third, there is the potential for profit, and some
    players find strategies to make their play more profitable.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Panalobet Sports Features and Services
  </h3>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    Sports Betting
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    At Panalobet, you can bet on various sports such as basketball (PBA and
    NBA), soccer, tennis, and boxing. There are many options for every player,
    from small bets to big bets, depending on your experience and knowledge of
    the game. Additionally, there are in-play or live betting options that allow
    players to place bets while the game is happening, which is more engaging
    for many Filipinos.
  </p>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    Live Casino
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    Panalobet provides an immersive live casino experience to players through
    games such as blackjack, roulette, and baccarat. These games come with live
    dealers that bring a real casino ambiance to your screen, as if you were
    playing in the casino itself. This is one of the features that make
    Panalobet popular among Filipinos.
  </p>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    Slots and Video Poker
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    For those who love the classic casino experience, Panalobet has a large
    selection of slots and video poker games. Each game has different themes and
    jackpot options that provide unique fun and excitement.
  </p>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    E-sports Betting
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    Panalobet also focused on the continued growth of e-sports betting in the
    country. This includes popular games like Dota 2, League of Legends (LoL),
    and Valorant. Many Filipino e-sports enthusiasts enjoy betting on their
    favorite teams and players.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Benefits of Using Panalobet
  </h2>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• User-Friendly Interface –</strong
    >
    The platform is easy to use and understandable even by new players.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Secure Payment Methods –</strong
    >
    Deposit and withdraw money securely using popular payment methods such as
    GCash, PayMaya, and bank transfers.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Customer Support –</strong
    >
    They have 24/7 customer support ready to respond to players' questions.
  </p>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    How to Sign Up and Start Playing at Panalobet Sports
  </h2>
  <div
    class="mb-10 flex flex-col md:flex-row gap-10 bg-midnightGlass backdrop-blur-md rounded-[7px] w-full py-10 px-10">
    <div class="md:w-1/2 w-full">
      <InfoGraphics
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="sportsSteps1"
        :imageMobileSrc="sportsSteps1">
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
          Account Creation:
        </h4>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          To get started, simply go to the Panalobet website and click “Sign
          Up.” Provide the required information such as your name, email
          address, and phone number. Make sure the details are correct for
          easier and faster account verification.
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
          After signing up, you need to deposit funds into your account. There
          are various options such as GCash, PayMaya, and bank transfer.
          Panalobet allows quick and secure depositing of money for more
          seamless gaming.
        </p>
      </div>
    </div>
    <div class="md:w-1/2 w-full">
      <InfoGraphics
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="sportsSteps2"
        :imageMobileSrc="sportsSteps2">
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
        :imageSrc="sportsSteps3"
        :imageMobileSrc="sportsSteps3">
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
          Game Selection:
        </h4>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          The games and sports available can be seen on the homepage of the
          platform. For new players, it can be helpful to start with simpler
          games like slots or table games before jumping into more complex
          sports bets or e-sports.
        </p>
      </div>
    </div>
  </div>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Tips on Correct Sports Betting
  </h2>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Studying Teams and Games –</strong
    >
    Knowledge of teams or players is essential in order to place an informed
    bet.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Betting Based on Stats –</strong
    >
    The stats or performance history of teams can be the basis of smarter
    betting.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Understanding the Odds –</strong
    >
    Understanding the odds is important because it shows how big the winning
    potential is.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Things to Remember on Responsible Gaming
  </h2>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Budgeting for Betting
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    One of the main principles of responsible gaming is setting a budget. Make
    sure you don't exceed the budget you have allocated for betting. It should
    be noted that gaming is only for entertainment and should not be used for
    profit.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Acknowledgment of Limitations
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Know when to stop. If you feel stressed or emotionally drained because of
    losses, this is the signal to take a break. Betting should remain fun and
    not cause a negative impact on personal life.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Account Limitations
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Panalobet provides tools to set betting limits and playing time. These tools
    help players avoid overplaying and ensure responsible betting.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Panalobet Sports Promotions and Bonuses
  </h2>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    • Welcome Bonus:
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Panalobet offers a welcome bonus for new members. It usually consists of a
    percentage of the initial deposit that can be used as additional funds for
    playing.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    • Deposit Bonus and Cashback:
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Apart from the welcome bonus, there are regular promotions for existing
    members such as deposit bonuses and cashback on losing bets.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    • Referral Programs:
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    For members who have friends or family who want to try the platform,
    Panalobet has a referral program that provides an additional bonus for each
    successful referral.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Bonus Maximizing Tips
  </h2>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Read the Terms and Conditions –</strong
    >
    Make sure you understand the bonus conditions to avoid unexpected hassles.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Using the Bonus in the Right Game –</strong
    >
    Find out which game has the highest chance of providing income using bonus
    funds.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    <strong
      class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
      >• Review Wagering Requirements –</strong
    >
    Make sure you can comply with the wagering requirements of the bonus before
    claiming it.
  </p>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Legal Aspects of Online Betting in the Philippines
  </h2>
  <div
    class="mb-10 flex flex-col md:flex-row gap-10 bg-midnightGlass backdrop-blur-md rounded-[7px] w-full py-10 px-10">
    <div class="md:w-1/2 w-full">
      <InfoGraphics
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="sportsLegal1"
        :imageMobileSrc="sportsLegal1">
      </InfoGraphics>
    </div>
    <div class="md:w-1/2 w-full">
      <p
        class="text-left text-2xl sm:text-2xl md:text-3xl lg:text-4xl px-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
        Online Gambling Law
      </p>
      <div class="bg-purple-900/10 w-full rounded-[4px] px-5 py-5">
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          It is important that every player understands the legal state of
          online gambling in the country. Online gambling in the Philippines is
          legal as long as the platform is licensed by PAGCOR.
        </p>
      </div>
    </div>
  </div>
  <div
    class="mb-10 flex flex-col md:flex-row gap-10 bg-midnightGlass backdrop-blur-md rounded-[7px] w-full py-10 px-10">
    <div class="md:w-1/2 w-full">
      <p
        class="text-left text-2xl sm:text-2xl md:text-3xl lg:text-4xl px-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
        Security of Personal Information
      </p>
      <div class="bg-purple-900/10 w-full rounded-[4px] px-5 py-5">
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          Panalobet uses advanced encryption technology to ensure the security
          of players' information.
        </p>
      </div>
    </div>
    <div class="md:w-1/2 w-full">
      <InfoGraphics
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="sportsLegal2"
        :imageMobileSrc="sportsLegal2">
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
        :imageSrc="sportsLegal3"
        :imageMobileSrc="sportsLegal3">
      </InfoGraphics>
    </div>
    <div class="md:w-1/2 w-full">
      <p
        class="text-left text-2xl sm:text-2xl md:text-3xl lg:text-4xl px-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
        Fair Play and Anti-Cheating Policies
      </p>
      <div class="bg-purple-900/10 w-full rounded-[4px] px-5 py-5">
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          Panalobet has strict anti-cheating policies to ensure every player has
          an equal chance to win.
        </p>
      </div>
    </div>
  </div>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Popular Sports to Bet on Panalobet
  </h2>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    • Basketball (PBA and NBA)
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    • Basketball is the most popular sport in the Philippines, especially the
    PBA and NBA.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    • Soccer (FIFA, UEFA)
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    • For soccer fans, there are great betting opportunities on international
    matches such as the FIFA World Cup and UEFA Champions League.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    • Boxing
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    • Boxing is also a popular sport in the country especially when Pinoy boxers
    like Manny Pacquiao have a fight.
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    • E-sports
  </p>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    • E-sports is one of the fastest growing fields in online gaming where you
    can bet on games like Dota 2 and League of Legends.
  </p>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-32 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Betting Strategically at Panalobet Sports
  </h2>
  <p
    class="text-center text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white px-10 md:px-20 lg:px-40">
    All in all, Panalobet Sports is an innovative platform that provides many
    options to players in the Philippines.
  </p>
  <p
    class="text-center text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white px-10 md:px-20 lg:px-40">
    With the right strategy, responsible gaming, and informed decisions, online
    gaming can be a safe and positive experience. Remember that betting is for
    fun and should remain recreational to avoid the negative effects of
    uncontrolled gaming.
  </p>
  <Image
    width="30%"
    :duration="1500"
    :speed="0.8"
    :imageSrc="image1"
    :imageMobileSrc="image1">
  </Image>
  <div class="mb-20"></div>
  <Footer></Footer>
</template>
