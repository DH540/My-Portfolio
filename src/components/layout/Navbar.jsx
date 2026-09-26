const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "My Work", href: "#my-work" },
  { label: "About Me", href: "#about-me" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-900 text-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-bold text-xl">
          DH
        </a>
        <ul className="flex gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-neutral-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;