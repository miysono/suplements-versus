import AccordionBody from "../components/AccordionBody";
import AccordionItem from "../components/AccordionItem";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className="pt-20 border-t-4 border-green-100 text-green-600 flex flex-col items-center justify-start overflow-x-hidden">
      <div className="container">
        <div className="mx-8 flex flex-col lg:flex-row lg:mx-28 lg:justify-between">
          <h1 className="text-3xl font-semibold text-center lg:text-left">
            Suplement Versus
          </h1>

          <div className="hidden lg:flex lg:gap-32">
            <div className="flex flex-col text-xl gap-5">
              <h3 className="text-2xl font-semibold">Wiki</h3>
              <div className="flex flex-col gap-2.5">
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
              </div>
            </div>
            <div className="flex flex-col  text-xl gap-5">
              <h3 className="text-2xl font-semibold">About us</h3>
              <div className="flex flex-col gap-2.5">
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
              </div>
            </div>
            <div className="flex flex-col text-xl gap-5">
              <h3 className="text-2xl font-semibold">More</h3>
              <div className="flex flex-col gap-2.5">
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
              </div>
            </div>
          </div>

          <div className="text-xl w-full lg:hidden">
            <AccordionBody>
              <AccordionItem
                first
                borderPrimary
                initialText="Wiki"
                secondText="Answer"
              />
              <AccordionItem
                borderPrimary
                initialText="About us"
                secondText="Answer"
              />
              <AccordionItem
                borderPrimary
                initialText="More"
                secondText="Answer"
              />
            </AccordionBody>
          </div>

          <div className=" mt-10 flex flex-col">
            <h2 className="text-2xl font-semibold">Subscribe to newsletter!</h2>
            <p className="text-lg">Lorem ipsum dolor sit</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b-2 border-green-600 h-12 text-xl"
            />
            <Button type="button" outlined={true} color="primary">
              Join
            </Button>
          </div>
        </div>
        <p className="mx-8 text-center text-lg lg:text-xl pt-20 pb-5">
          Copyright © 2023 SupplementsVersus. All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
