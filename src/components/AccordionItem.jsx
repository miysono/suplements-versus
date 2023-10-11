const AccordionItem = ({
  initialText,
  secondText,
  borderPrimary,
  borderSecondary,
  first,
}) => {
  return (
    <div
      className={`py-3 ${first && "border-y-2"} ${!first && "border-b-2"} ${
        borderPrimary && "border-green-700"
      } ${borderSecondary && "border-teal-700"} border-opacity-20`}
    >
      <details>
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span>{initialText}</span>
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
        <p className="mt-5">{secondText}</p>
      </details>
    </div>
  );
};

export default AccordionItem;
