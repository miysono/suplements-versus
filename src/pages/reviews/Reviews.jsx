import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";
import { allReviews } from "../../assets/data";
import ReviewList from "./components/ReviewList";
import SectionBody from "../../components/SectionBody";
import ReviewItem from "./components/ReviewItem";
import PopularReviewItem from "./components/PopularReviewItem";

const Reviews = () => {
  return (
    <>
      <Navbar />
      <PageBody>
        <SectionBody marginMd>
          <div className="flex mx-28 text-justify">
            <ReviewList title={"Latest reviews"}>
              {allReviews.map((el, _) => (
                <ReviewItem key={_} review={el} />
              ))}
            </ReviewList>
            <ReviewList title={"Most popular reviews"}>
              {Array.from({ length: 6 }, (_, i) => (
                <PopularReviewItem key={i} />
              ))}
            </ReviewList>
          </div>
        </SectionBody>
      </PageBody>
      <Footer />
    </>
  );
};

export default Reviews;
