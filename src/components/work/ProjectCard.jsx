import { useShrinkToFit } from "../../hooks/useShrinkToFit";

function ProjectCard({ project, onClick }) {
  const { containerRef, textRef } = useShrinkToFit({ maxFontSize: 22, minFontSize: 12 });

  return (
    <button
      onClick={() => onClick(project)}
      className="border border-neutral-500 text-left p-4 aspect-square flex flex-col justify-between hover:bg-white hover:text-neutral-900 transition-colors"
    >
      <div ref={containerRef} className="h-20 overflow-hidden flex items-start">
        <h4 ref={textRef} className="font-mono font-bold leading-tight">
          {project.title}
        </h4>
      </div>
      <p className="font-mono text-sm text-neutral-300 mt-2 line-clamp-3">{project.description}</p>
    </button>
  );
}

export default ProjectCard;