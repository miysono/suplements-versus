import Button from "../../components/Button";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";

export default function Homepage() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="min-h-screen text-green-600 flex flex-col items-center justify-start overflow-x-hidden">
        {/* INTRO SECTION */}
        <section className="container mt-10 lg:mt-20 ">
          <div className="mx-8 my-auto lg:flex lg:justify-between lg:items-center lg:mx-28">
            <div className="lg:w-1/2">
              {/* TITLE */}
              <h1 className="text-4xl leading-snug font-semibold lg:leading-snug lg:text-7xl ">
                Placeholder text with slogan
              </h1>
              {/* SLOGAN */}
              <h2 className="text-4xl font-semibold italic mt-5  text-teal-700 lg:mt-10 lg:text-7xl ">
                Placeholder Slogan
              </h2>
              {/* BUTTONS */}
              <div className="flex flex-col mt-5 lg:flex-row lg:gap-5 lg:mt-10 lg:text-lg">
                {/* BUTTON FULL*/}
                <Button color="primary" aditionalStyling="w-full lg:w-96">
                  Call to action
                </Button>
                {/* BUTTON OUTLINED*/}
                <Button
                  color="primary"
                  outlined={true}
                  aditionalStyling="w-full lg:w-56"
                >
                  Call to action
                </Button>
              </div>
              <div className="mt-10 lg:hidden">
                <p className="text-3xl font-semibold text-teal-700">
                  We solve problems.
                </p>
              </div>
              {/* CERTIFICATIONS */}
              <div className="text-teal-700 text-sm flex items-center justify-between mt-5 gap-4 lg:mt-10 lg:gap-16 lg:text-lg">
                <div className="flex items-center flex-col gap-2.5 text-center lg:text-left lg:flex-row">
                  <img
                    className="w-8 lg:w-16 rounded-full"
                    src="https://re-mm-assets.s3.amazonaws.com/product_photo/46610/large_large_PolyTeal-2-3-JOMAR_322UP_1471509939.jpg"
                  />
                  <p>
                    Placeholder <br /> text
                  </p>
                </div>
                <div className="flex items-center flex-col gap-2.5 text-center lg:text-left lg:flex-row">
                  <img
                    className="w-8 lg:w-16 rounded-full"
                    src="https://re-mm-assets.s3.amazonaws.com/product_photo/46610/large_large_PolyTeal-2-3-JOMAR_322UP_1471509939.jpg"
                  />
                  <p>
                    Placeholder <br /> text
                  </p>
                </div>
                <div className="flex items-center flex-col gap-2.5 text-center lg:text-left lg:flex-row">
                  <img
                    className="w-8 lg:w-16 rounded-full"
                    src="https://re-mm-assets.s3.amazonaws.com/product_photo/46610/large_large_PolyTeal-2-3-JOMAR_322UP_1471509939.jpg"
                  />
                  <p>
                    Placeholder <br /> text
                  </p>
                </div>
              </div>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEUEggQAfQCgw6Cqz6oAewCjyKO01bS9273e7d4AeQAAdQCbwJv+//7y9/Ll8eXY6tjR5tHJ4smu0q4AcQDQ4dBHeLN8AAABbElEQVR4nO3dSUoDARRF0UpX6ewS3f9azUAEcWAIhHiq7lnBu/MPf3h6fnl9O522F+PF6svmp+XtNn9aXeM8XmP7y24Y3/f7/frb4r9a3+ZwHMb1MGWL5QwKz5MvXC0ePeKuKvRV6KvQV6GvQl+FvkvhpkJbhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoW8WhcsKbRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0VeibxcVQhbgKfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0zeILS4W4Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+FvlkUnidfOK4fPeKuKvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Vei7FG4rtFXoq9BXoa9CX4W+Cn0V+uZReFhM2f447I7LKTt+fAID6BDSZpXAFwAAAABJRU5ErkJggg=="
              className="absolute w-80 opacity-50 top-20 right-0 -z-10 lg:top-auto lg:right-auto lg:relative lg:opacity-100 lg:w-1/3 rounded-full"
            />
          </div>
        </section>

        {/* TRY COMPARISON */}
        <section className="container mt-40 ">
          <div className="mx-8 lg:mx-28 lg:flex lg:justify-between lg:items-center">
            <img
              className="w-full rounded lg:w-2/5 lg:h-72 "
              src="https://re-mm-assets.s3.amazonaws.com/product_photo/46610/large_large_PolyTeal-2-3-JOMAR_322UP_1471509939.jpg"
            />
            <div className="text-lg mt-5 lg:mt-0 lg:w-1/2">
              <h2 className="text-2xl font-semibold text-teal-700 lg:leading-normal lg:text-4xl">
                Compare sumplements using our website now!
              </h2>
              <p className="text-xl mt-2.5 lg:mt-5 text-teal-700">
                Placeholder description, placeholder description, placeholder
                decription,
              </p>
              <Button color="secondary" aditionalStyling="w-full lg:w-96">
                Call to action
              </Button>
            </div>
          </div>
        </section>

        {/* LATEST ARTICLES */}
        <section className="container mt-40">
          <div className="mx-8 lg:flex lg:items-center lg:justify-between lg:mx-28">
            <div className="lg:w-1/4">
              <h2 className="text-2xl font-semibold text-teal-700 ">
                Check our latest articles!
              </h2>
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
        </section>

        {/* TOP PRODUCTS */}
        <section className="mt-40 pt-20 bg-green-100 container">
          <h2 className="mx-8 font-semibold text-2xl text-green-700 text-center lg:text-4xl lg:mx-28">
            Top products
          </h2>
          <div className="mt-10 mx-8 flex gap-5 flex-wrap items-center justify-center lg:mx-28">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="w-1/3 lg:w-1/5 flex flex-col justify-center items-center"
              >
                <img
                  className="rounded lg:h-60"
                  src="https://preview.redd.it/ih6no69aj90y.png?auto=webp&s=8e4f9101f58e0812f3625a51ec65c9b7c050da75"
                />
                <p className="text-center mt-5">Product name</p>
              </div>
            ))}
          </div>
          <div className="mx-8 flex justify-center lg:text-xl mt-5 mb-20">
            <Button
              color="primary"
              outlined={true}
              aditionalStyling="w-full lg:w-96"
            >
              Call to action
            </Button>
          </div>
        </section>

        {/* WHY US SECTION */}
        <section className="mt-40 container">
          <div className="mx-8 lg:flex lg:justify-between lg:items-center lg:mx-28">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEUEggQAfQCgw6Cqz6oAewCjyKO01bS9273e7d4AeQAAdQCbwJv+//7y9/Ll8eXY6tjR5tHJ4smu0q4AcQDQ4dBHeLN8AAABbElEQVR4nO3dSUoDARRF0UpX6ewS3f9azUAEcWAIhHiq7lnBu/MPf3h6fnl9O522F+PF6svmp+XtNn9aXeM8XmP7y24Y3/f7/frb4r9a3+ZwHMb1MGWL5QwKz5MvXC0ePeKuKvRV6KvQV6GvQl+FvkvhpkJbhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoW8WhcsKbRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0VeibxcVQhbgKfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0zeILS4W4Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+FvlkUnidfOK4fPeKuKvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Vei7FG4rtFXoq9BXoa9CX4W+Cn0V+uZReFhM2f447I7LKTt+fAID6BDSZpXAFwAAAABJRU5ErkJggg=="
              className="w-full rounded lg:hidden lg:w-1/3 lg:h-72"
            />
            <div className="mt-5 lg:mt-0 lg:w-1/2 lg:text-xl">
              <h2 className=" text-2xl lg:text-4xl font-semibold">
                Why Supplements Versus?
              </h2>
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
        </section>

        {/* CHECK OUT OUR REVIEWS */}
        <section className="mt-40 pt-20 pb-20 bg-teal-100 container text-teal-700">
          <h2 className=" font-semibold text-center text-2xl lg:text-4xl lg:mx-28 ">
            Check out our reviews!
          </h2>
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
        </section>

        {/* STILL HAVE QUESTIONS? */}
        <section className="mt-40 container">
          <div className="mx-8 lg:flex lg:justify-between lg:items-center lg:mx-28">
            <img
              className="w-full lg:w-2/5 lg:h-72 rounded"
              src="https://re-mm-assets.s3.amazonaws.com/product_photo/46610/large_large_PolyTeal-2-3-JOMAR_322UP_1471509939.jpg"
            />
            <div className="mt-5 lg:w-1/2 lg:text-xl lg:mt-0 text-teal-700">
              <h2 className="text-2xl lg:text-4xl font-semibold">
                Still curious?
              </h2>
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
        </section>

        {/* FAQ */}
        <section className="mt-40 py-20 container bg-teal-100 text-teal-700">
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">
            Frequently asked questions
          </h2>

          <div className="mx-auto px-8 lg:px-28">
            <div className="max-w-3xl mx-auto mt-10">
              <div className="py-3 border-y-2 border-teal-700 border-opacity-20">
                <details>
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Frequently asked question</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-5">Answer</p>
                </details>
              </div>
              <div className="py-3 border-b-2 border-teal-700 border-opacity-20">
                <details>
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Frequently asked question</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-5">Answer</p>
                </details>
              </div>
              <div className="py-3 border-b-2 border-teal-700 border-opacity-20">
                <details>
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Frequently asked question</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-5">Answer</p>
                </details>
              </div>
              <div className="py-3 border-b-2 border-teal-700 border-opacity-20">
                <details>
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Frequently asked question</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-5">Answer</p>
                </details>
              </div>
              <div className="py-3 border-b-2 border-teal-700 border-opacity-20">
                <details>
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Frequently asked question</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-5">Answer</p>
                </details>
              </div>
              <div className="py-3 border-b-2 border-teal-700 border-opacity-20">
                <details>
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Frequently asked question</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-5">Answer</p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
