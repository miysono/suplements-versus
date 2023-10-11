import AccordionBody from "../../components/AccordionBody";
import AccordionItem from "../../components/AccordionItem";
import Button from "../../components/Button";
import SectionBody from "../../components/SectionBody";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";
import HomepageIntro from "./components/HomepageIntro";
import InfoSection from "./components/InfoSection";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import SectionTitle from "./components/SectionTitle";

import { allReviews } from "../../assets/data";
import { Link } from "react-router-dom";

const tealImgPlaceholder =
  "https://re-mm-assets.s3.amazonaws.com/product_photo/46610/large_large_PolyTeal-2-3-JOMAR_322UP_1471509939.jpg";
const greenImgPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEUEggQAfQCgw6Cqz6oAewCjyKO01bS9273e7d4AeQAAdQCbwJv+//7y9/Ll8eXY6tjR5tHJ4smu0q4AcQDQ4dBHeLN8AAABbElEQVR4nO3dSUoDARRF0UpX6ewS3f9azUAEcWAIhHiq7lnBu/MPf3h6fnl9O522F+PF6svmp+XtNn9aXeM8XmP7y24Y3/f7/frb4r9a3+ZwHMb1MGWL5QwKz5MvXC0ePeKuKvRV6KvQV6GvQl+FvkvhpkJbhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoW8WhcsKbRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0VeibxcVQhbgKfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0zeILS4W4Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+FvlkUnidfOK4fPeKuKvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Vei7FG4rtFXoq9BXoa9CX4W+Cn0V+uZReFhM2f447I7LKTt+fAID6BDSZpXAFwAAAABJRU5ErkJggg==";

const Homepage = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      {/* MAIN */}
      <PageBody>
        {/* INTRO SECTION */}
        <HomepageIntro />

        {/* TRY COMPARISON */}
        <SectionBody marginXl>
          <InfoSection
            colorSecondary
            imgSrcOne={tealImgPlaceholder}
            btnContentOne="Call to action"
            titleContent="Compare supplements using our comparison app!"
            paragraphContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            corrupti corporis facilis necessitatibus exercitationem, nisi
            enim iste deserunt aliquam? Rerum nam harum neque laboriosam
            corrupti accusantium voluptas provident impedit debitis?"
          />
        </SectionBody>

        {/* LATEST ARTICLES */}
        <SectionBody marginXl>
          <InfoSection
            colorSecondary
            reversed
            multipleImgs
            btnContentOne="Call to action"
            titleContent="Check our latest articles!"
            paragraphContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium quis, dolor facere dolorem cumque vel."
          />
        </SectionBody>

        {/* TOP PRODUCTS */}
        <SectionBody marginXl paddingMd bgPrimary>
          <SectionTitle center>Top products</SectionTitle>

          <ProductList>
            {Array.from({ length: 8 }, (_, i) => (
              <ProductItem key={_}>Product Name</ProductItem>
            ))}
          </ProductList>

          <div className="mx-8 flex justify-center lg:text-xl mt-5">
            <Button
              color="primary"
              outlined={true}
              aditionalStyling="w-full lg:w-96"
            >
              Call to action
            </Button>
          </div>
        </SectionBody>

        {/* WHY US SECTION */}
        <SectionBody marginXl>
          <InfoSection
            reversed
            multipleBtns
            imgSrcOne={greenImgPlaceholder}
            btnContentOne="Call to action"
            btnContentTwo="Call to action"
            titleContent="Why Supplements Versus?"
            paragraphContent="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, nisi minus. Quibusdam quasi, quo rerum expedita
            eum, neque quis sunt ducimus enim fugiat accusantium corrupti
            molestias temporibus sequi praesentium doloremque?"
          />
        </SectionBody>

        {/* CHECK OUT OUR REVIEWS */}
        <SectionBody marginXl paddingMd bgSecondary textSecondary>
          <SectionTitle center colorSecondary>
            Check out our reviews!
          </SectionTitle>
          <div className="mt-10 mx-8 flex gap-10 flex-wrap items-center justify-center lg:mx-28">
            {Array.from({ length: 3 }, (_, i) => (
              <Link key={i} to={`/reviews/${allReviews[i].id}`}>
                <div className="relative w-full flex justify-center items-center lg:w-96  hover:scale-105 duration-200 shadow-teal-900 drop-shadow-xl">
                  <img
                    className="rounded lg:h-96 w-full object-cover"
                    src={allReviews[i].imgSrc}
                  />
                  <div className="h-full w-full absolute left-0 hover:opacity-0 duration-300 text-gray-900">
                    <div className="absolute flex flex-col justify-between shadow-teal-900 left-0 w-40 py-5 h-full px-4 text-lg font-semibold bg-teal-100 border-r-4 border-r-white">
                      <p>{allReviews[i].title}</p>

                      <p className="text-base font-normal">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>

                      <div className="text-base">
                        <p>{allReviews[i].category}</p>
                        <p>{allReviews[i].dateCreated}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mx-8 mt-10 lg:text-xl flex justify-center lg:mx-28">
            <Link to="/reviews">
              <Button
                color="secondary"
                outlined={true}
                aditionalStyling="w-full lg:w-96"
              >
                Go to reviews!
              </Button>
            </Link>
          </div>
        </SectionBody>

        {/* STILL HAVE QUESTIONS? */}
        <SectionBody marginXl>
          <InfoSection
            colorSecondary
            imgSrcOne={tealImgPlaceholder}
            btnContentOne="Call to action"
            titleContent="Still have questions?"
            paragraphContent="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, nisi minus. Quibusdam quasi, quo rerum expedita
            eum, neque quis sunt ducimus enim fugiat accusantium corrupti
            molestias temporibus sequi praesentium doloremque?"
          />
        </SectionBody>

        {/* FAQ */}
        <SectionBody marginXl paddingMd bgSecondary textSecondary>
          <div className="mx-8 lg:mx-28">
            <SectionTitle colorSecondary center>
              Frequently Asked Questions
            </SectionTitle>
            <AccordionBody>
              <AccordionItem
                first
                borderSecondary
                initialText="FAQ"
                secondText="Answer"
              />
              <AccordionItem
                borderSecondary
                initialText="FAQ"
                secondText="Answer"
              />
              <AccordionItem
                borderSecondary
                initialText="FAQ"
                secondText="Answer"
              />
              <AccordionItem
                borderSecondary
                initialText="FAQ"
                secondText="Answer"
              />
              <AccordionItem
                borderSecondary
                initialText="FAQ"
                secondText="Answer"
              />
            </AccordionBody>
          </div>
        </SectionBody>
      </PageBody>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Homepage;
