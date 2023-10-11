const ProductItem = ({
  lengthOne,
  lengthTwo,
  lengthThree,
  lengthFour,
  lengthFive,
  lengthSix,
  lengthSeven,
  lengthEight,
  children,
}) => {
  return (
    <div className="w-1/3 lg:w-1/5 flex flex-col justify-center items-center">
      <img
        className="rounded lg:h-60"
        src="https://preview.redd.it/ih6no69aj90y.png?auto=webp&s=8e4f9101f58e0812f3625a51ec65c9b7c050da75"
      />
      <p className="text-center mt-5">{children}</p>
    </div>
  );
};

export default ProductItem;
