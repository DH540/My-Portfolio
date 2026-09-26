import heroPhoto from "../../assets/hero.png";

function Hero() {
  return (
    <section id="home" className="bg-neutral-900 text-white px-6 pt-32 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Hi! I'm Dylan</h1>
          <p className="text-neutral-300 mb-6">
            A graduating Computer Science student focusing on team
            collaboration and project management.
          </p>
          <p className="text-neutral-400 text-sm">Metro Manila, Philippines</p>
        </div>

        <div className="w-64 h-64 shrink-0 border-4 border-neutral-600 rounded-full overflow-hidden">
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