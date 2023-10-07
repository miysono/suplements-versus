import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import Reviews from "../pages/reviews/Reviews";

const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
