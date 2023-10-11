import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";
import { allReviews } from "../../assets/data";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <>
      <Navbar />
      <PageBody>
        <section className="container mt-20">
          <div className="flex mx-28">
            <div className="w-1/2">
              <h1 className="text-4xl font-semibold">Latest reviews</h1>
              <div className="flex flex-col-reverse gap-10 my-10">
                {allReviews.map((el, _) => (
                  <Link key={el.id} to={el.id}>
                    <div className="flex gap-5 hover:underline">
                      <img
                        className="rounded lg:h-60 w-60 object-cover"
                        src={el.imgSrc}
                      />
                      <div className="flex flex-col gap-2.5 text-xl">
                        <h2 className="text-2xl font-semibold mb-2.5">
                          {el.title}
                        </h2>
                        <p>{el.dateCreated}</p>
                        <p>{el.category}</p>
                        <p>{el.timeToRead}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-4xl font-semibold">Most popular reviews</h1>
              <div className="flex flex-col gap-10 my-10">
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    key={_}
                    className="text-xl flex flex-col gap-2.5 hover:underline"
                  >
                    <h2 className="text-2xl font-semibold">Review title</h2>
                    <p className="mt-2.5">
                      Review description: lorem lorem lorem lorem lorem
                    </p>
                    <p>October 15, 2023</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageBody>
      <Footer />
    </>
  );
};

export default Reviews;
