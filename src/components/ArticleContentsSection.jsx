const ArticleContentsSection = ({ title, data }) => {
  return (
    <div className="mt-10 w-full border-y-2 py-5 text-xl border-green-600 rounded">
      <h5 className="text-2xl font-semibold text-green-600">{title}</h5>
      <div className="flex flex-col gap-2.5 mt-5">
        {data.sections.map((el, i) => (
          <h6 key={i} className="hover:underline">
            {i + 1}. {el.title}
          </h6>
        ))}
      </div>
    </div>
  );
};

export default ArticleContentsSection;
