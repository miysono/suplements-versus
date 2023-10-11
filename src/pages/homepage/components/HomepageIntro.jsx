import Button from "../../../components/Button";

const HomepageIntro = () => {
  return (
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
  );
};

export default HomepageIntro;
