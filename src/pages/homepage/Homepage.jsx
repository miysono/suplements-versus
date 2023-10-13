import AccordionBody from "../../components/AccordionBody";
import AccordionItem from "../../components/AccordionItem";
import SectionBody from "../../components/SectionBody";
import Button from "../../components/Button";

import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";

import HomepageIntro from "./components/HomepageIntro";
import InfoSection from "./components/InfoSection";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import SectionTitle from "./components/SectionTitle";
import ReviewItem from "./components/ReviewItem";
import ReviewList from "./components/ReviewList";

import { allReviews, allProducts } from "../../assets/data";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      {/* NAVBAR COMPONENT*/}
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
          {/* ADD 8 PRODUCT ITEMS TO THE LIST */}
          <ProductList>
            {Array.from({ length: 8 }, (_, i) => (
              <ProductItem key={_} product={allProducts[i]}></ProductItem>
            ))}
          </ProductList>
          <div className="mx-8 flex justify-center lg:text-xl mt-5">
            <Button
              color="primary"
              outlined={true}
              aditionalStyling="w-full lg:w-96"
            >
              All recomended products
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
          <ReviewList>
            {Array.from({ length: 3 }, (_, i) => (
              <ReviewItem key={allReviews[i]} review={allReviews[i]} />
            ))}
          </ReviewList>
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
            {/* FAQ ACCORDION */}
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
