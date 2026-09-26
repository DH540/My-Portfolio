import { socials } from "../../data/socials";

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-left">
          <p className="font-bold text-xl">DH</p>
          
            <div>
              <p className="font-semibold">Dylan Hope Salazar</p>
              <p className="text-sm text-neutral-400">Metro Manila, Philippines</p>
            </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-neutral-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            GH
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-neutral-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            IN
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="bg-orange-400 text-neutral-900 font-semibold px-4 py-2 hover:bg-orange-300 transition-colors"
          >
            Email Me
          </a>
        </div>
      </div>

      <div className="border-t border-neutral-800 text-center text-xs text-neutral-500 py-4">
        © 2026 Dylan Hope Salazar
      </div>
    </footer>
  );
}

export default Footer;