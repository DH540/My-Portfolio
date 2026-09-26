import { skillCategories } from "../../data/skills";
import BouncingLogos from "../skills/BouncingLogos";

function Skills() {
  const projectMgmt = skillCategories.find((c) => c.id === "project-management");
  const technicalTools = skillCategories.find((c) => c.id === "technical-tools");

  return (
    <section id="skills" className="bg-white text-neutral-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-raleway font-semibold text-center mb-3">Skills</h2>
        <p className="font-mono text-neutral-500 text-center max-w-2xl mx-auto mb-12">
          I have built and reinforced my experience around these tools while
          continuously learning new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: Software Development */}
          <div className="border border-neutral-300 p-6 relative min-h-80">
            <h3 className="absolute -top-3 left-4 bg-white px-2 text-sm font-mono font-semibold uppercase tracking-wide">
              {projectMgmt.title}
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {projectMgmt.items.map((item, i) => (
                <span
                  key={i}
                  className="border border-neutral-300 rounded-full px-4 py-2 text-lg font-mono text-neutral-600 bg-white hover:bg-neutral-900 hover:text-white transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: Technical Tools*/}
          <div className="border border-neutral-300 p-6 relative h-full">
            <h3 className="absolute -top-3 left-4 bg-white px-2 text-sm font-mono font-semibold uppercase tracking-wide">
              {technicalTools.title}
            </h3>
            <div className="h-64">
              <BouncingLogos items={technicalTools.items} />
            </div>
          </div>
          </div>
        </div>
    </section>
  );
}

export default Skills;