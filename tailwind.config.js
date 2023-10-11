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

    "./src/layout/Footer.jsx",
    "./src/layout/Navbar.jsx",
    "./src/layout/PageBody.jsx",
    "./src/layout/components/NavItem.jsx",

    "./src/components/Button.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
