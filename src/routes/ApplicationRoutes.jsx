import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import Reviews from "../pages/reviews/Reviews";
import Review from "../pages/review/Review";

const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="reviews/:id" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
