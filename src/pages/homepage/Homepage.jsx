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
            imgSrcOne="https://media.istockphoto.com/id/491395412/photo/herbal-medicine-pills-and-mortar-over-bright-background.jpg?s=612x612&w=0&k=20&c=t_uNhNJ0r4LcsOtjhRJG2I8-8MCdrcrwgnyD6Z7mc_Q="
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
            imgSrcOne="https://media.istockphoto.com/id/1414489487/photo/supplements-and-vitamins-on-a-white-background-selective-focus.jpg?s=612x612&w=0&k=20&c=FgfT2r6_yRH8Rlx5R5MGu-rX3fgAMefkl2QSkd_JkSk="
            imgSrcTwo="https://plus.unsplash.com/premium_photo-1666275003927-47bea5a1fb0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            imgSrcThree="https://media.istockphoto.com/id/914503810/photo/alternative-herb-medicine-herbal-vitamin-on-white-background.jpg?s=612x612&w=0&k=20&c=pLrkxMPuJp7dsYqu6K4C1PDFK04TGSBkjzdW3zq-ENc="
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
            imgSrcOne="https://www.sunriseintegration.com/uploads/attachments/ckzbu19b27ealvxp7jpclt9t9-supplements-hero.full.jpg"
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
                <div className="relative z-0 w-full flex justify-center items-center lg:w-96  hover:scale-105 duration-200 shadow-teal-900 drop-shadow-xl">
                  <img
                    className="rounded lg:h-96 w-full object-cover"
                    src={allReviews[i].imgSrc}
                  />
                  <div className="h-full w-full absolute left-0 hover:opacity-0 duration-300 text-gray-200">
                    <div className="absolute flex flex-col justify-between shadow-teal-900 left-0 w-40 py-5 h-full px-4 text-lg font-semibold bg-teal-700 border-r-4 border-r-white">
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
            imgSrcOne="https://media.istockphoto.com/id/464469702/photo/pills-and-multivitamins.jpg?s=612x612&w=0&k=20&c=Kf2UcboSMLrhE0P8GqrGbi0eHbaZ1EaGKp0GWqgpmKQ="
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
