const SectionTitle = ({ colorSecondary, center, children }) => {
  return (
    <h2
      className={`${!colorSecondary && "text-green-600"} ${
        colorSecondary && "text-teal-700"
      } text-2xl lg:text-4xl font-semibold ${center && "text-center"}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
