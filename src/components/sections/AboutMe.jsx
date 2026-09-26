function AboutMe() {
  return (
    <section id="about-me" className="bg-white text-neutral-900 px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-neutral-600 leading-relaxed mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          est sem, venenatis vitae odio id, viverra dapibus metus. Curabitur a
          elit libero. Pellentesque sed urna sed sem finibus vulputate.
          Quisque sit amet nibh porttitor, gravida purus sed, sagittis metus.
          Nulla in risus et sapien aliquam tempus ac sed est. Nam ullamcorper,
          dui vel volutpat rhoncus, eros elit sodales nulla, a aliquam nunc
          eros pellentesque augue. Etiam vulputate lacus non nisi faucibus
          auctor. Cras ex felis, tempor a risus quis, tempor accumsan nulla.
          Etiam eu elit eget nibh finibus cursus imperdiet vitae ligula.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-orange-400 text-neutral-900 font-semibold px-6 py-3 hover:bg-orange-300 transition-colors"
        >
          My Resume &gt;
        </a>
      </div>
    </section>
  );
}

export default AboutMe;