function RecentWork({ data }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="w-full md:flex-1 mt-3">
        <span className="inline-block bg-orange-400 text-neutral-900 text-xs font-mono font-semibold px-3 py-1 rounded-full mb-3">
          {data.tag}
        </span>
        <h1 className="text-2xl font-raleway font-bold mb-2">{data.title}</h1>
        <p className="font-mono text-neutral-300 text-xl">{data.description}</p>
      </div>
      <div className="w-full md:w-80 h-40 bg-neutral-700 flex items-center justify-center text-neutral-400 text-sm shrink-0">
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