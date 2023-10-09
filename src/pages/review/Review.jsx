import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";
import { reviewData } from "../../assets/data";
import { useParams } from "react-router-dom";
const Review = () => {
  const { id } = useParams();
  const data = reviewData.filter((el) => el.id === id);

  if (!data.length) return <p>Page not found</p>;
  return (
    <>
      <Navbar />
      <PageBody>
        {/* TITLE  */}
        <p>{data[0].intro.title}</p>
        <p>{data[0].intro.paragraph}</p>
        <p>{data[0].intro.writtenOn}</p>
        <img src={data[0].intro.imgSrc} />

        <p>{data[0].sectionOne.title}</p>
        <p>{data[0].sectionOne.paragraph}</p>

        <p>{data[0].sectionTwo.title}</p>
        <p>{data[0].sectionTwo.paragraph}</p>

        <p>{data[0].sectionThree.title}</p>
        <p>{data[0].sectionThree.paragraph}</p>

        <p>{data[0].sectionFour.title}</p>
        <p>{data[0].sectionFour.paragraph}</p>
      </PageBody>
      <Footer />
    </>
  );
};

export default Review;
