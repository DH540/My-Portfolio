import highwayImage from "../assets/The Highway.png";
import GPPBImage from "../assets/GPPB-MORS.png";
import EMG from "../assets/Einstein's Memory Game.png";

export const projects = [
  {
    id: "highway",
    title: "The Highway: A Traffic Simulation Game Prototype",
    date: "Jun 2026 - Present",
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
    date: "Dec 2024 - Jul 2025",
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
    title: "Eintstein's Memory Game: A Course Project",
    date: "Oct 2024 - Nov 2024",
    description: "A Java-based memory game where players match pairs of cards within a limited time. The game features a 4×4 card grid, score tracking, timed gameplay, player feedback, and basic menu and audio controls.",
    roles: ["Project Manager", "Developer - Assets Integration"],
    contributions: 
    ["Sourced and organized the visual and audio assets used throughout the game.", 
     "Integrated the collected assets into the Java application to support the game's visual interface and audio experience", 
     "Tested and Documented the game's functionality and performance to ensure a smooth user experience"],
    technologies: ["Java", "ChatGPT"],
    links: {
      live: null,
      github: "https://github.com/DH540/Einstein-s-Memory-Game",
      docs: null,
    },
    image: EMG,
  },
];