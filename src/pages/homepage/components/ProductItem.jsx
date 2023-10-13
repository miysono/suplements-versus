const ProductItem = ({ product }) => {
  const { imgSrc, name, price } = product;
  return (
    <div className="relative w-1/3 lg:w-1/5 flex flex-col hover:scale-105 duration-300">
      <img className="rounded object-cover h-60 w-full" src={imgSrc} />
      <div className="absolute w-full h-full hover:opacity-0 duration-300">
        <div className="absolute bottom-0 bg-green-600 w-full text-white font-semibold">
          <p className="text-center p-3 pb-0 truncate">{name}</p>
          <p className="text-center p-3 pt-1.5">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
