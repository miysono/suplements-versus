/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",

    //Pages
    "./src/pages/wiki/Wiki.jsx",
    "./src/pages/top10/TopTen.jsx",
    "./src/pages/reviews/Reviews.jsx",
    "./src/pages/review/Review.jsx",
    "./src/pages/rdalist/RdaList.jsx",
    "./src/pages/pagenotfound/PageNotFound.jsx",
    "./src/pages/login/Login.jsx",
    "./src/pages/login/Register.jsx",
    "./src/pages/homepage/Homepage.jsx",
    "./src/pages/contact/ContactUs.jsx",
    "./src/pages/aboutus/AboutUs.jsx",

    "./src/pages/homepage/components/HomepageIntro.jsx",
    "./src/pages/homepage/components/ProductItem.jsx",
    "./src/pages/homepage/components/ProductList.jsx",
    "./src/pages/homepage/components/SectionTitle.jsx",
    "./src/pages/homepage/components/InfoSection.jsx",
    "./src/pages/homepage/components/ReviewItem.jsx",
    "./src/pages/homepage/components/ReviewList.jsx",

    "./src/pages/reviews/components/PopularReviewItem.jsx",
    "./src/pages/reviews/components/ReviewItem.jsx",
    "./src/pages/reviews/components/ReviewList.jsx",

    "./src/layout/Footer.jsx",
    "./src/layout/Navbar.jsx",
    "./src/layout/PageBody.jsx",
    "./src/layout/components/NavItem.jsx",

    "./src/components/Button.jsx",
    "./src/components/AccordionBody.jsx",
    "./src/components/AccordionItem.jsx",
    "./src/components/SectionBody.jsx",
    "./src/components/ArticleContentsSection.jsx",

    "./src/pages/admin-dashboard/AdminDashboard.jsx",
    "./src/pages/admin-dashboard/components/NewReview.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
