const ProductList = ({ children }) => {
  return (
    <div className="mt-10 mx-8 flex gap-5 flex-wrap items-center justify-center lg:mx-28">
      {children}
    </div>
  );
};

export default ProductList;
