import { Link } from "react-router-dom";

const ReviewItem = ({ review }) => {
  return (
    <Link to={`/reviews/${review.id}`}>
      <div className="relative z-0 w-full flex justify-center items-center lg:w-96  hover:scale-105 duration-200 shadow-teal-900 drop-shadow-xl">
        <img
          className="rounded lg:h-96 w-full object-cover"
          src={review.imgSrc}
        />
        <div className="h-full w-full absolute left-0 hover:opacity-0 duration-300 text-gray-200">
          <div className="absolute flex flex-col justify-between shadow-teal-900 left-0 w-40 py-5 h-full px-4 text-lg font-semibold bg-teal-700 border-r-4 border-r-white">
            <p>{review.title}</p>

            <p className="text-base font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>

            <div className="text-base">
              <p>{review.category}</p>
              <p>{review.dateCreated}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReviewItem;
