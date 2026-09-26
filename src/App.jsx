import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import MyWork from "./components/work/MyWork";
import AboutMe from "./components/sections/AboutMe";
import FadeIn from "./components/uixtras/FadeIn";
import Modal from "./components/uixtras/Modal";
import { useModal } from "./hooks/useModal";

function App() {
  const { isOpen, content, openModal, closeModal } = useModal();
  
  return (
    <div>
      <Navbar />
      <main>
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <MyWork onProjectClick={openModal} />
        </FadeIn>
        <FadeIn>
          <AboutMe />
        </FadeIn>
      </main>
      <Footer />

      <Modal isOpen={isOpen} content={content} onClose={closeModal} />
    </div>
  );
}

export default App;