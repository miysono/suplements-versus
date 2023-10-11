import Button from "../../../components/Button";
import SectionTitle from "./SectionTitle";

const InfoSection = ({
  colorSecondary,
  reversed,
  multipleImgs,
  imgSrcOne,
  imgSrcTwo,
  imgSrcThree,
  multipleBtns,
  btnContentOne,
  btnContentTwo,
  titleContent,
  paragraphContent,
}) => {
  const multipleImgsSrc = [imgSrcOne, imgSrcTwo, imgSrcThree];
  return (
    <div
      className={`mx-8 ${
        multipleImgs && "flex flex-col-reverse"
      } lg:flex lg:justify-between ${
        reversed && "lg:flex-row-reverse"
      } lg:items-center lg:mx-28`}
    >
      {!multipleImgs && (
        <img
          className={`w-full object-cover ${
            reversed ? "lg:w-1/3" : "lg:w-2/5"
          } lg:h-72 rounded`}
          src={imgSrcOne}
        />
      )}
      {multipleImgs && (
        <div className="flex flex-col gap-5 mt-5 lg:mt-0 lg:flex-row lg:w-2/3">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="rounded w-1/3">
              <img
                className="rounded w-full h-96 object-cover"
                src={multipleImgsSrc[i]}
              />
            </div>
          ))}
        </div>
      )}
      <div
        className={`mt-5 ${
          multipleImgs ? "lg:w-1/4" : "lg:w-1/2"
        } lg:text-xl lg:mt-0 ${
          colorSecondary ? "text-teal-700" : "text-green-700"
        }`}
      >
        <SectionTitle colorSecondary={colorSecondary}>
          {titleContent}
        </SectionTitle>
        <p className="mt-2.5 text-xl lg:mt-5">{paragraphContent}</p>
        <div
          className={`flex flex-col lg:gap-5 lg:flex-row ${
            reversed && "lg:flex-row-reverse lg:justify-end"
          }`}
        >
          <Button
            color={`${colorSecondary ? "secondary" : "primary"}`}
            outlined={multipleBtns && reversed ? true : false}
            aditionalStyling={`w-full ${multipleBtns ? "lg:w-48" : "lg:w-96"}`}
          >
            {btnContentOne}
          </Button>
          {multipleBtns && (
            <Button
              color={`${colorSecondary ? "secondary" : "primary"}`}
              outlined={multipleBtns && !reversed ? true : false}
              aditionalStyling={`w-full ${reversed ? "lg:w-72" : "lg:w-48"}`}
            >
              {btnContentTwo}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
