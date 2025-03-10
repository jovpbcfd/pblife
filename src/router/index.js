import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import SportsView from "@/views/SportsView.vue";
// import SlotsView from "@/views/SlotsView.vue";
// import FishingView from "@/views/FishingView.vue";
// import LiveCasinoView from "@/views/LiveCasinoView.vue";
// import DepositView from "@/views/DepositView.vue";
// import PromotionView from "@/views/PromotionView.vue";
// import BlogsView from "@/views/BlogsView.vue";
// import BlogPostsView from "@/views/BlogPostsView.vue";
// import NotFoundView from "@/views/NotFoundView.vue";

// import { defineAsyncComponent } from "vue";



const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("@/views/HomeView.vue"),
		},
		{
			path: "/sports",
			name: "Sports",
			component: () => import("@/views/SportsView.vue"),
		},
		{
			path: "/slots",
			name: "Slots",
			component: () => import("@/views/SlotsView.vue"),
		},
		{
			path: "/fishing",
			name: "Fishing",
			component: () => import("@/views/FishingView.vue"),
		},
		{
			path: "/live-casino",
			name: "Live Casino",
			component: () => import("@/views/LiveCasinoView.vue"),
		},
		{
			path: "/deposit",
			name: "Deposit",
			component: () => import("@/views/DepositView.vue"),
		},
		{
			path: "/promotion",
			name: "Promotion",
			component: () => import("@/views/PromotionView.vue"),
		},
		{
			path: "/blogs",
			name: "Blogs",
			component: () => import("@/views/BlogsView.vue"),
		},
		{
			path: "/blogs/:slug",
			name: "BlogPosts",
			component: () => import("@/views/BlogPostsView.vue"),
			props: true,
		},
		{
			path: "/:catchAll(.*)",
			name: "not-found",
			component: () => import("@/views/NotFoundView.vue"),
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition; // Restore saved scroll position if available (e.g., back/forward buttons)
		} else {
			return { top: 0 }; // Always scroll to top on navigation
		}
	},
});
// Navigation guard to check if the route is a blog post
router.beforeEach((to, from, next) => {
  if (to.path.startsWith("/blogs/")) {
    // Adjust links or perform any necessary actions for blog posts
    console.log("Navigating to a blog post:", to.path);
  }
  next(); // Proceed to the next middleware or route
});

export default router;
