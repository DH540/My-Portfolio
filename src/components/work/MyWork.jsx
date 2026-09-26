import { recentWork } from "../../data/recentWork";
import { projects } from "../../data/projects";
import { certifications } from "../../data/certifications";
import { useModal } from "../../hooks/useModal";
import RecentWork from "./RecentWork";
import ProjectCard from "./ProjectCard";
import CertificationCard from "./CertificationCard";
import Modal from "../ui/Modal";

function MyWork() {
  const { isOpen, content, openModal, closeModal } = useModal();

  return (
    <section id="my-work" className="bg-neutral-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">My Work</h2>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-12">
          Follow my recent activity or view the projects and certifications
          I've acquired, developed, or managed personally and
          collaboratively.
        </p>

        {/* Recent Work */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Recent Work</h3>
          <RecentWork data={recentWork} />
        </div>

        {/* Highlighted Projects */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Highlighted Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={openModal} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </div>
      </div>

      {/* Shared modal, fed whatever project was clicked */}
      <Modal isOpen={isOpen} content={content} onClose={closeModal} />
    </section>
  );
}

export default MyWork;