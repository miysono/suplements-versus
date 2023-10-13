import { useState } from "react";
import Button from "../../../components/Button";
import ArticleContentsSection from "../../../components/ArticleContentsSection";
import SectionBody from "../../../components/SectionBody";

const NewReview = () => {
  const [pageTitle, setPageTitle] = useState("");
  const [introPageParagraph, setIntroPageParagraph] = useState("");
  const [sectionData, setSectionData] = useState([
    { title: "", paragraph: "" },
    { title: "", paragraph: "" },
  ]);

  const id = pageTitle.replace(/ /g, "-").toLowerCase();
  //CREATE A NEW DATE
  const date = new Date();
  const actualDate = date.toDateString();
  const reviewData = {
    id: id,
    intro: {
      title: pageTitle,
      imgSrc:
        "https://cdn.consumerlab.com/images/review/362_image_hires_B%20Vitamin%20Supplements%201400%20x%20787.jpg?size=large",
      writtenOn: actualDate,
      paragraph: introPageParagraph,
    },
    sections: sectionData,
  };
  console.log(reviewData);
  return (
    <div className="min-h-screen min-w-screen flex">
      <div className="min-h-full bg-white">
        <div className="mx-28 mr-14 mt-20 ">
          <article className="w-full text-xl">
            {/* TITLE  */}
            <h1 className="text-5xl font-semibold text-green-600">
              {reviewData.intro.title}
            </h1>
            <img
              src={reviewData.intro.imgSrc}
              className="w-full h-96 mt-10 object-cover"
            />
            <p className="mt-5 text-lg">{reviewData.intro.writtenOn}</p>
            <p className="mt-10">{reviewData.intro.paragraph}</p>
            <ArticleContentsSection
              title={"Review contents"}
              data={reviewData}
            />
          </article>

          {/* Maps through the sections array of our data and return a SectionBody for each of the sections */}
          {/* Useful not to be hardcoded - Admin may want to have more/less sections */}
          {/* SECTION DATA */}
          {reviewData.sections.map((el) => (
            <SectionBody key={el} marginSm>
              <h2 className="text-3xl font-semibold">{el.title}</h2>
              <p className="mt-5">{el.paragraph}</p>
            </SectionBody>
          ))}
        </div>
      </div>
      <div className="min-h-full w-1/3 bg-white p-5">
        <div className="w-full">
          <p>id:{`supplementsversus/reviews/${id}`}</p>
          <p>Page title</p>
          <input
            type="text"
            className="bg-red-200 w-full"
            onChange={(e) => setPageTitle(e.target.value)}
          />
          <p>Page image</p>
          <input type="file" className="w-full" />
          <p>Intro page paragraph</p>
          <input
            type="text"
            className="bg-red-200 w-full"
            onChange={(e) => setIntroPageParagraph(e.target.value)}
          />

          {sectionData.map((el, i) => (
            <>
              <p
                onClick={() => {
                  setSectionData((data) =>
                    data.filter((_, index) => i !== index)
                  );
                }}
              >
                Delete
              </p>
              <p>Section {i + 1}</p>
              <p>Title</p>
              <input
                type="text"
                className="bg-red-200 w-full"
                value={el.title}
                onChange={(e) => {
                  const updatedSectionData = [...sectionData];
                  updatedSectionData[i] = {
                    ...updatedSectionData[i],
                    title: e.target.value,
                  };
                  setSectionData(updatedSectionData);
                }}
              />
              <p>Paragraph</p>
              <input
                value={el.paragraph}
                type="text"
                className="bg-red-200 w-full"
                onChange={(e) => {
                  const updatedSectionData = [...sectionData];
                  updatedSectionData[i] = {
                    ...updatedSectionData[i],
                    paragraph: e.target.value,
                  };
                  setSectionData(updatedSectionData);
                }}
              />
            </>
          ))}
        </div>
        <Button
          onClick={() => {
            setSectionData((data) => [...data, { title: "", paragraph: "" }]);
          }}
        >
          Add a new Section
        </Button>
      </div>
    </div>
  );
};

export default NewReview;
