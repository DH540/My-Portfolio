import heroPhoto from "../../assets/IMG_5642.jpg";

function Hero() {
  return (
    <section id="home" className="bg-[var(--color-navy)] text-white pt-32 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        <div className="max-w-xl">
          <h1 className="font-raleway font-semibold text-7xl font-bold mb-4">Hi! I'm Dylan</h1>
          <p className="font-mono text-neutral-300 mb-6 text-2xl">
            A graduating Computer Science student focusing on team
            collaboration and project management.
          </p>
          <p className="font-mono text-neutral-400 text-sm">Metro Manila, Philippines</p>
        </div>

        <div className="w-80 h-80 shrink-0 border-4 border-neutral-600 rounded-full overflow-hidden">
          <img
            src={heroPhoto}
            alt="Dylan Hope Salazar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;