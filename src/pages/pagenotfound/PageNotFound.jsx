import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <PageBody>
        <section className="text-teal-600 my-20 flex items-center flex-col h-screen">
          <h1 className="text-6xl text-center mb-5 font-semibold">
            Page not found!
          </h1>
          <Link to="/">
            <Button color="secondary" outlined={true} aditionalStyling="w-72">
              Go to Homepage
            </Button>
          </Link>
        </section>
      </PageBody>
      <Footer />
    </>
  );
};

export default PageNotFound;
