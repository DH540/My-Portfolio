import { skillCategories } from "../../data/skills";

function Skills() {
  const softwareDev = skillCategories.find((c) => c.id === "software-development");
  const projectMgmt = skillCategories.find((c) => c.id === "project-management");
  const otherTools = skillCategories.find((c) => c.id === "other-tools");

  return (
    <section id="skills" className="bg-white text-neutral-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">Skills</h2>
        <p className="text-neutral-500 text-center max-w-2xl mx-auto mb-12">
          I have built and reinforced my experience around these tools while
          continuously learning new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: Software Development */}
          <div className="border border-neutral-300 p-6 relative">
            <h3 className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold uppercase tracking-wide">
              {softwareDev.title}
            </h3>
            <ul className="space-y-2 text-neutral-600 pt-2">
              {softwareDev.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right column: Project Management + Other Tools */}
          <div className="grid grid-rows-2 gap-6">
            <div className="border border-neutral-300 p-6 relative">
              <h3 className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold uppercase tracking-wide">
                {projectMgmt.title}
              </h3>
              <ul className="space-y-2 text-neutral-600 pt-2">
                {projectMgmt.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="border border-neutral-300 p-6 relative">
              <h3 className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold uppercase tracking-wide">
                {otherTools.title}
              </h3>
              <ul className="space-y-2 text-neutral-600 pt-2">
                {otherTools.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;