import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";
import { reviewData } from "../../assets/data";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "../pagenotfound/PageNotFound";
const Review = () => {
  const { id } = useParams();
  const data = reviewData.filter((el) => el.id === id);
  console.log(data);

  if (!data.length) return <PageNotFound />;
  return (
    <>
      <Navbar />
      <PageBody>
        <div className="container flex text-black">
          <div className="mx-28 mt-20 w-1/2">
            {/* INTRO */}
            <article className="w-full text-xl">
              {/* TITLE  */}
              <h1 className="text-5xl font-semibold text-green-600">
                {data[0].intro.title}
              </h1>
              <img
                src={data[0].intro.imgSrc}
                className="w-full h-96 mt-10 object-cover"
              />
              <p className="mt-5 text-lg">{data[0].intro.writtenOn}</p>
              <p className="mt-10">{data[0].intro.paragraph}</p>
              <div className="mt-10 w-full border-y-2 py-5 text-xl border-green-600 rounded">
                <h5 className="text-2xl font-semibold text-green-600">
                  Review content
                </h5>
                <div className="flex flex-col gap-2.5 mt-5">
                  <h6 className="hover:underline">1. {data[0].intro.title}</h6>
                  <h6 className="hover:underline">
                    2. {data[0].sectionOne.title}
                  </h6>
                  <h6 className="hover:underline">
                    3. {data[0].sectionTwo.title}
                  </h6>
                  <h6 className="hover:underline">
                    4. {data[0].sectionThree.title}
                  </h6>
                  <h6 className="hover:underline">
                    5. {data[0].sectionFour.title}
                  </h6>
                </div>
              </div>
            </article>

            {/* SECTION 1 */}
            <section className="mt-10 text-xl">
              <h2 className="text-3xl font-semibold">
                {data[0].sectionOne.title}
              </h2>
              <p className="mt-5">{data[0].sectionOne.paragraph}</p>
            </section>

            {/* SECTION 2 */}
            <section className="mt-10 text-xl">
              <h2 className="text-3xl font-semibold">
                {data[0].sectionTwo.title}
              </h2>
              <p className="mt-5">{data[0].sectionTwo.paragraph}</p>
            </section>

            {/* SECTION 3 */}
            <section className="mt-10 text-xl">
              <h2 className="text-3xl font-semibold">
                {data[0].sectionThree.title}
              </h2>
              <p className="mt-5">{data[0].sectionThree.paragraph}</p>
            </section>

            {/* SECTION 4 */}
            <section className="mt-10 text-xl">
              <h2 className="text-3xl font-semibold">
                {data[0].sectionFour.title}
              </h2>
              <p className="mt-5">{data[0].sectionFour.paragraph}</p>
            </section>

            <section className="my-10 text-xl">
              <h2 className="text-3xl font-semibold">Final thoughts</h2>
              <p className="mt-5">{data[0].finalThoughts.paragraph}</p>
            </section>
          </div>
          <aside className="mt-20 w-1/3 border-l-4 mb-20 px-14 border-l-green-100 text-green-600">
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
