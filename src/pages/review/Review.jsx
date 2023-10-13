import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";
import SectionBody from "../../components/SectionBody";
import { reviewData } from "../../assets/data";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "../pagenotfound/PageNotFound";
import ArticleContentsSection from "../../components/ArticleContentsSection";
const Review = () => {
  const { id } = useParams();
  const data = reviewData.filter((el) => el.id === id);
  const usefulData = data[0];
  if (!data.length) return <PageNotFound />;
  return (
    <>
      <Navbar />
      <PageBody>
        {/* Page is divided into 2 sections. The article itself and an aside section */}
        <div className="container flex text-black">
          {/* BODY OF THE FIRST SECTION */}
          <div className="mx-28 mr-14 mt-20 w-1/2">
            {/* INTRO */}
            {/* Title, image, date posted, table of contents, brief description */}
            <article className="w-full text-xl">
              {/* TITLE  */}
              <h1 className="text-5xl font-semibold text-green-600">
                {usefulData.intro.title}
              </h1>
              <img
                src={usefulData.intro.imgSrc}
                className="w-full h-96 mt-10 object-cover"
              />
              <p className="mt-5 text-lg">{usefulData.intro.writtenOn}</p>
              <p className="mt-10">{usefulData.intro.paragraph}</p>
              <ArticleContentsSection
                title={"Review contents"}
                data={usefulData}
              />
            </article>

            {/* Maps through the sections array of our data and return a SectionBody for each of the sections */}
            {/* Useful not to be hardcoded - Admin may want to have more/less sections */}
            {/* SECTION DATA */}
            {usefulData.sections.map((el) => (
              <SectionBody key={el} marginSm>
                <h2 className="text-3xl font-semibold">{el.title}</h2>
                <p className="mt-5">{el.paragraph}</p>
              </SectionBody>
            ))}
          </div>

          {/* ASIDE/SECOND PART  */}
          {/* All related reviews  */}
          <aside className="mt-20 w-1/3 border-l-4 mb-20 px-14 pr-28 border-l-green-100 text-green-600">
            <h3 className="text-4xl font-semibold">More reviews</h3>
            {Array.from({ length: 5 }, (_, i) => (
              <Link key={i}>
                <div className="w-full flex mt-5 gap-5 hover:underline h-24">
                  <img
                    src={data[0].intro.imgSrc}
                    className="w-24 object-cover"
                  />
                  <div className="flex flex-col text-lg w-full overflow-hidden">
                    <p className="font-semibold truncate">Placeholder title</p>
                    <p className="truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Possimus, odit.
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </PageBody>

      <Footer />
    </>
  );
};

export default Review;
