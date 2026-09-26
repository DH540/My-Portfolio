function RecentWork({ data }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-1 mt-3">
        <span className="inline-block bg-orange-400 text-neutral-900 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {data.tag}
        </span>
        <h3 className="text-xl font-bold mb-2">{data.title}</h3>
        <p className="text-neutral-300 text-sm">{data.description}</p>
      </div>
      <div className="w-full md:w-64 h-40 bg-neutral-700 flex items-center justify-center text-neutral-400 text-sm shrink-0">
        {data.image ? (
          <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        ) : (
          "Image placeholder"
        )}
      </div>
    </div>
  );
}

export default RecentWork;