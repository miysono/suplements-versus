import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";

const Reviews = () => {
  return (
    <>
      <Navbar />
      <PageBody>
        <section className="container mt-20">
          <div className="flex mx-28">
            <div className="w-1/2">
              <h1 className="text-4xl font-semibold">Latest reviews</h1>
              <div className="flex flex-col gap-10 my-10">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="flex gap-5">
                    <img
                      className="rounded lg:h-60"
                      src="https://re-mm-assets.s3.amazonaws.com/product_photo/46610/large_large_PolyTeal-2-3-JOMAR_322UP_1471509939.jpg"
                    />
                    <div className="flex flex-col gap-2.5 text-xl">
                      <h2 className="text-2xl font-semibold mb-2.5">
                        Article title
                      </h2>
                      <p>October 10, 2023</p>
                      <p>Category</p>
                      <p>Time to read</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-4xl font-semibold">Most popular reviews</h1>
              <div className="flex flex-col gap-10 my-10">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={_} className="text-xl flex flex-col gap-2.5">
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
