import { useEffect, useState } from "react";

function Modal({ isOpen, content, onClose }) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsAnimating(false);

      const timeout = setTimeout(() => {
        setIsAnimating(true);
      }, 10);

      return () => clearTimeout(timeout);
    }

    setIsAnimating(false);

    const timeout = setTimeout(() => {
      setShouldRender(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [isOpen, content]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!shouldRender || !content) return null;

  const {
    title,
    roles = [],
    description,
    contributions = [],
    technologies = [],
    links,
    image,
  } = content;

  return (
    <div
      className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 py-8 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[60] bg-white rounded-full w-10 h-10 flex items-center justify-center text-neutral-700 hover:text-neutral-900 shadow-md hover:bg-neutral-100 transition-colors cursor-pointer"
      >
        ✕
      </button>

      <div
        className={`bg-white text-neutral-900 max-w-5xl w-full max-h-full overflow-y-auto relative transition-all duration-300 ${
          isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image / screenshot */}
        <div className="w-full h-120 bg-neutral-200 flex items-center justify-center text-neutral-400 text-sm">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            "Image placeholder"
          )}
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-raleway font-bold mb-1">{title}</h3>
          {roles.length > 0 && (
            <p className="font-mono text-neutral-500 mb-4">{roles.join(" | ")}</p>
          )}

          {description && (
            <p className="font-mono text-neutral-700 text-justify leading-relaxed mb-6">{description}</p>
          )}

          {contributions.length > 0 && (
            <div className="mb-6">
              <p className="font-semibold mb-2">Contributions:</p>
              <ul className="list-disc list-inside space-y-1 text-neutral-700">
                {contributions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <hr className="border-neutral-200 mb-6" />

          {technologies.length > 0 && (
            <div className="mb-6">
              <p className="font-raleway font-semibold mb-3">Related Technologies</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-neutral-300 rounded-full px-4 py-2 text-sm font-mono text-neutral-600 bg-white hover:bg-neutral-900 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="font-raleway font-semibold mb-3">Links</p>

            {links?.live || links?.github || links?.docs ? (
              <div className="flex flex-wrap gap-2">
                {links.live && (
                  <a href={links.live} target="_blank" rel="noopener noreferrer" className="border border-neutral-300 rounded-full px-4 py-2 text-sm font-mono text-neutral-600 bg-white hover:bg-neutral-900 hover:text-white transition-colors">
                    Live
                  </a>
                )}
                {links.github && (
                  <a href={links.github} target="_blank" rel="noopener noreferrer" className="border border-neutral-300 rounded-full px-4 py-2 text-sm font-mono text-neutral-600 bg-white hover:bg-neutral-900 hover:text-white transition-colors">
                    GitHub Repo
                  </a>
                )}
                {links.figma && (
                  <a href={links.figma} target="_blank" rel="noopener noreferrer" className="border border-neutral-300 rounded-full px-4 py-2 text-sm font-mono text-neutral-600 bg-white hover:bg-neutral-900 hover:text-white transition-colors">
                    Figma
                  </a>
                )}
                {links.docs && (
                  <a href={links.docs} target="_blank" rel="noopener noreferrer" className="border border-neutral-300 rounded-full px-4 py-2 text-sm font-mono text-neutral-600 bg-white hover:bg-neutral-900 hover:text-white transition-colors">
                    Technical Documents
                  </a>
                )}
              </div>
            ) : (
              <p className="text-neutral-400 text-sm italic">Currently working on it</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;