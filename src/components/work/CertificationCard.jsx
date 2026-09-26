function CertificationCard({ certification }) {
  return (
    <a
      href={certification.link}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-neutral-500 p-4 flex justify-between items-start hover:bg-white hover:text-neutral-900 transition-colors"
    >
      <div>
        <h4 className="font-semibold">{certification.title}</h4>
        <p className="text-sm text-neutral-400">{certification.where}</p>
      </div>
      <span className="text-xs text-neutral-400">{certification.date}</span>
    </a>
  );
}

export default CertificationCard;