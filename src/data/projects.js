import highwayImage from "../assets/The Highway.png";
import GPPBImage from "../assets/GPPB-MORS.png";

export const projects = [
  {
    id: "highway",
    title: "The Highway: A Traffic Simulation Game Prototype",
    description: "A personal project as an attempt to develop a simple arcade game where players take on the role of a traffic camera tasked with catching temporarily restricted vehicles on a busy four-lane highway. Vehicles spawn randomly at varying speeds and may change lanes, challenging players to identify and catch restricted vehicles while avoiding three missed catches.",
    roles: ["Game Designer", "Developer"],
    contributions: [],
    technologies: ["GDScript", "Godot", "Claude Code"],
    links: null,
    image: highwayImage,
  },
  {
    id: "project-2",
    title: "GPPB-MORS: An Online Consultation Request System",
    description: "A web-based consultation request system designed to streamline GPPB-TSO's consultation scheduling and request management. The system provides real-time booking, a live calendar, online request forms, user account management, and automated email notifications to improve scheduling efficiency and communication.",
    roles: ["Project Manager", "Frontend Developer"],
    contributions: 
    ["Collaborated with the client to identify business requirements and select appropriate tools for system development.",
     "Led a development team in designing interactive system prototypes using Figma to define user workflows and webpage interactions.",
     "Integrated automated email notification workflows using EmailJS to facilitate communication between administrators and clients"],
    technologies: ["HTML", "CSS", "JavaScript", "EmailJS", "Figma", "Slack", "ChatGPT", "Google Workspace"],
    links: {
      live: "https://dh540.github.io/GPPB-MORS/",
      github: "https://github.com/DH540/GPPB-MORS",
      docs: null,
    },
    image: GPPBImage,
  },
  {
    id: "project-3",
    title: "Project #3: Placeholder",
    description: "Put a sample project intro here",
    roles: ["Role 1", "Role 2"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor felis sapien. Aenean gravida orci et sodales tincidunt.",
    contributions: ["Contribution #1", "Contribution #2", "Contribution #3"],
    technologies: ["Tech #1", "Tech #2", "Tech #3"],
    links: [
      { label: "Live", url: "#" },
      { label: "GitHub Repo", url: "#" },
      { label: "Technical Documents", url: "#" },
    ],
    image: null,
  },
];