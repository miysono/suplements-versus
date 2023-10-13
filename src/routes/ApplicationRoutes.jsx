import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import Reviews from "../pages/reviews/Reviews";
import Review from "../pages/review/Review";
import PageNotFound from "../pages/pagenotfound/PageNotFound";
import TopTen from "../pages/top10/TopTen";
import RdaList from "../pages/rdalist/RdaList";
import Wiki from "../pages/wiki/Wiki";
import AboutUs from "../pages/aboutus/AboutUs";
import ContactUs from "../pages/contact/ContactUs";
import Login from "../pages/login/Login";
import AdminDashboard from "../pages/admin-dashboard/AdminDashboard";
import NewReview from "../pages/admin-dashboard/components/NewReview";
const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="reviews/:id" element={<Review />} />
        <Route path="top-10" element={<TopTen />} />
        <Route path="rda-list" element={<RdaList />} />
        <Route path="wiki" element={<Wiki />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="register" element={<Register />} /> */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="adm-dashboard" element={<AdminDashboard />}>
          <Route path="new-review" element={<NewReview />} />
          {/* <Route path="edit-review" element={<Editeview />} />
          <Route path="delete-review" element={<DeleteReview />} />
          <Route path="new-article" element={<NewArticle />} />
          <Route path="edit-article" element={<EditArticle />} />
          <Route path="delete-article" element={<DeleteArticle />} />
          <Route path="new-comparator-item" element={<NewComparatorItem />} />
          <Route path="edit-comparator-item" element={<EditComparatorItem />} />
          <Route
            path="delete-comparator-item"
            element={<DeleteComparatorItem />}
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
