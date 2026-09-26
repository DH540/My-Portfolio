import { socials } from "../../data/socials";

function Footer() {
  return (
    <footer id="contact" className="bg-neutral-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-neutral-800 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <p className="font-bold text-xl">DH</p>

          <div>
            <p className="font-raleway font-semibold">Dylan Hope Salazar</p>
            <p className="font-mono text-sm text-neutral-400">Metro Manila, Philippines</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center hover:border border-neutral-600 "
            >
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" alt="GitHub" className="w-9 h-9" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center hover:border border-neutral-600 "
            >
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png" alt="LinkedIn" className="w-9 h-9" />
            </a>
          </div>
          <a
            href={`mailto:${socials.email}`}
            className="bg-orange-400 text-neutral-900 font-raleway font-semibold px-4 py-2 hover:bg-orange-300 transition-colors"
          >
            Email Me
          </a>
        </div>
      </div>
      
      <div className="bg-neutral-900 border-t border-neutral-800 text-center text-xs text-neutral-500 py-4">
        © 2026 Dylan Hope Salazar
      </div>
    </footer>
  );
}

export default Footer;