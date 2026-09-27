import { useShrinkToFit } from "../../hooks/useShrinkToFit";

function ProjectCard({ project, onClick }) {
  const { containerRef, textRef } = useShrinkToFit({ maxFontSize: 40, minFontSize: 12 });

  return (
    <button
      onClick={() => onClick(project)}
      className="group border border-neutral-500 text-left p-4 aspect-square flex flex-col justify-between hover:bg-white hover:text-neutral-900 transition-colors cursor-pointer"
>
       <div>
          <div ref={containerRef} className="h-30 overflow-hidden flex items-start">
            <h4 ref={textRef} className="font-bold leading-tight">
              {project.title}
            </h4>
          </div>
          {project.date && (
            <p className="text-xs text-neutral-400 group-hover:text-neutral-500 mt-1">{project.date}</p>
          )}
        </div>
      <p className="font-mono text-sm text-neutral-300 group-hover:text-neutral-900 mt-2 line-clamp-3">{project.description}</p>
    </button>
  );
}

export default ProjectCard;