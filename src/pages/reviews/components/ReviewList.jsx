const ReviewList = ({ title, children }) => {
  return (
    <div className="w-1/2">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <div className="flex flex-col gap-10 my-10">{children}</div>
    </div>
  );
};

export default ReviewList;
