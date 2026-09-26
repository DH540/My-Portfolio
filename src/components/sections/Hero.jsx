import heroPhoto from "../../assets/IMG_5642.jpg";

function Hero() {
  return (
    <section id="home" className="bg-[var(--color-navy)] text-white pt-32 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 text-center md:text-left">
        <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 border-4 border-neutral-600 rounded-full overflow-hidden order-1 md:order-2">
          <img
            src={heroPhoto}
            alt="Dylan Hope Salazar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="max-w-xl order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi! I'm Dylan</h1>
          <p className="text-neutral-300 mb-6 text-lg md:text-2xl">
            A graduating Computer Science student focusing on team
            collaboration and project management.
          </p>
          <p className="text-neutral-400 text-sm">Metro Manila, Philippines</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;