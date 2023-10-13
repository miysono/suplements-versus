import { Link } from "react-router-dom";

const ReviewItem = ({ review }) => {
  const { id, imgSrc, title, dateCreated, category, timeToRead } = review;

  return (
    <Link to={id}>
      <div className="flex gap-5 hover:underline">
        <img className="rounded lg:h-60 w-60 object-cover" src={imgSrc} />
        <div className="flex flex-col gap-2.5 text-xl">
          <h2 className="text-2xl font-semibold mb-2.5">{title}</h2>
          <p>{dateCreated}</p>
          <p>{category}</p>
          <p>{timeToRead}</p>
        </div>
      </div>
    </Link>
  );
};

export default ReviewItem;
