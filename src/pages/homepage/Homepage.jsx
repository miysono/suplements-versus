import AccordionBody from "../../components/AccordionBody";
import AccordionItem from "../../components/AccordionItem";
import Button from "../../components/Button";
import SectionBody from "../../components/SectionBody";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";
import HomepageIntro from "./components/HomepageIntro";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import SectionTitle from "./components/SectionTitle";

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
          <div className="mx-8 lg:mx-28 lg:flex lg:justify-between lg:items-center">
            <img
              className="w-full rounded lg:w-2/5 lg:h-72 "
              src="https://re-mm-assets.s3.amazonaws.com/product_photo/46610/large_large_PolyTeal-2-3-JOMAR_322UP_1471509939.jpg"
            />
            <div className="text-lg mt-5 lg:mt-0 lg:w-1/2">
              <SectionTitle colorSecondary>
                Compare supplements using our comparison app!
              </SectionTitle>
              <p className="text-xl mt-2.5 lg:mt-5 text-teal-700">
                Placeholder description, placeholder description, placeholder
                decription,
              </p>
              <Button color="secondary" aditionalStyling="w-full lg:w-96">
                Call to action
              </Button>
            </div>
          </div>
        </SectionBody>

        {/* LATEST ARTICLES */}
        <SectionBody marginXl>
          <div className="mx-8 lg:flex lg:items-center lg:justify-between lg:mx-28">
            <div className="lg:w-1/4">
              <SectionTitle colorSecondary>
                Check our latest articles!
              </SectionTitle>
              <p className="text-xl mt-2.5 lg:mt-5 text-teal-700">
                Placeholder description, placeholder description, placeholder
                decription,
              </p>
              <Button
                color="secondary"
                aditionalStyling="hidden lg:block lg:w-96"
              >
                Call to action
              </Button>
            </div>
            <div className="flex flex-col gap-5 mt-5 lg:mt-0 lg:flex-row lg:w-2/3">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="rounded">
                  <img
                    className="rounded h-96"
                    src="https://re-mm-assets.s3.amazonaws.com/product_photo/46610/large_large_PolyTeal-2-3-JOMAR_322UP_1471509939.jpg"
                  />
                </div>
              ))}
            </div>
            <Button
              color="secondary"
              aditionalStyling="w-full lg:hidden lg:w-96"
            >
              Call to action
            </Button>
          </div>
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
          <div className="mx-8 lg:flex lg:justify-between lg:items-center lg:mx-28">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEUEggQAfQCgw6Cqz6oAewCjyKO01bS9273e7d4AeQAAdQCbwJv+//7y9/Ll8eXY6tjR5tHJ4smu0q4AcQDQ4dBHeLN8AAABbElEQVR4nO3dSUoDARRF0UpX6ewS3f9azUAEcWAIhHiq7lnBu/MPf3h6fnl9O522F+PF6svmp+XtNn9aXeM8XmP7y24Y3/f7/frb4r9a3+ZwHMb1MGWL5QwKz5MvXC0ePeKuKvRV6KvQV6GvQl+FvkvhpkJbhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoW8WhcsKbRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0VeibxcVQhbgKfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0zeILS4W4Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+FvlkUnidfOK4fPeKuKvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Vei7FG4rtFXoq9BXoa9CX4W+Cn0V+uZReFhM2f447I7LKTt+fAID6BDSZpXAFwAAAABJRU5ErkJggg=="
              className="w-full rounded lg:hidden lg:w-1/3 lg:h-72"
            />
            <div className="mt-5 lg:mt-0 lg:w-1/2 lg:text-xl">
              <SectionTitle>Why Supplements Versus?</SectionTitle>
              <p className="mt-2.5 text-xl lg:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, nisi minus. Quibusdam quasi, quo rerum expedita
                eum, neque quis sunt ducimus enim fugiat accusantium corrupti
                molestias temporibus sequi praesentium doloremque?
              </p>
              <div className="flex flex-col lg:gap-5 lg:flex-row">
                <Button color="primary" aditionalStyling="w-full lg:w-72">
                  Call to action
                </Button>
                <Button
                  color="secondary"
                  outlined={true}
                  aditionalStyling="w-full lg:w-48"
                >
                  Call to action
                </Button>
              </div>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEUEggQAfQCgw6Cqz6oAewCjyKO01bS9273e7d4AeQAAdQCbwJv+//7y9/Ll8eXY6tjR5tHJ4smu0q4AcQDQ4dBHeLN8AAABbElEQVR4nO3dSUoDARRF0UpX6ewS3f9azUAEcWAIhHiq7lnBu/MPf3h6fnl9O522F+PF6svmp+XtNn9aXeM8XmP7y24Y3/f7/frb4r9a3+ZwHMb1MGWL5QwKz5MvXC0ePeKuKvRV6KvQV6GvQl+FvkvhpkJbhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoW8WhcsKbRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0VeibxcVQhbgKfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0zeILS4W4Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+FvlkUnidfOK4fPeKuKvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Vei7FG4rtFXoq9BXoa9CX4W+Cn0V+uZReFhM2f447I7LKTt+fAID6BDSZpXAFwAAAABJRU5ErkJggg=="
              className="hidden lg:block w-1/3 rounded h-72"
            />
          </div>
        </SectionBody>

        {/* CHECK OUT OUR REVIEWS */}
        <SectionBody marginXl paddingMd bgSecondary textSecondary>
          <SectionTitle center colorSecondary>
            Check out our reviews!
          </SectionTitle>
          <div className="mt-10 mx-8 flex gap-5 flex-wrap items-center justify-center lg:mx-28">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                className="w-full flex justify-center items-center lg:w-96 "
              >
                <img
                  className="rounded lg:h-96 w-full"
                  src="https://preview.redd.it/ih6no69aj90y.png?auto=webp&s=8e4f9101f58e0812f3625a51ec65c9b7c050da75"
                />
              </div>
            ))}
          </div>
          <div className="mx-8 mt-10 lg:text-xl flex justify-center lg:mx-28">
            <Button
              color="secondary"
              outlined={true}
              aditionalStyling="w-full lg:w-96"
            >
              Call to action
            </Button>
          </div>
        </SectionBody>

        {/* STILL HAVE QUESTIONS? */}
        <SectionBody marginXl>
          <div className="mx-8 lg:flex lg:justify-between lg:items-center lg:mx-28">
            <img
              className="w-full lg:w-2/5 lg:h-72 rounded"
              src="https://re-mm-assets.s3.amazonaws.com/product_photo/46610/large_large_PolyTeal-2-3-JOMAR_322UP_1471509939.jpg"
            />
            <div className="mt-5 lg:w-1/2 lg:text-xl lg:mt-0 text-teal-700">
              <SectionTitle colorSecondary>Still have questions?</SectionTitle>
              <p className="mt-2.5 text-xl lg:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, nisi minus. Quibusdam quasi, quo rerum expedita
                eum, neque quis sunt ducimus enim fugiat accusantium corrupti
                molestias temporibus sequi praesentium doloremque?
              </p>
              <Button
                color="secondary"
                outlined={true}
                aditionalStyling="w-full lg:w-96"
              >
                Call to action
              </Button>
            </div>
          </div>
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
