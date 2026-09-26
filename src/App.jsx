import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import MyWork from "./components/work/MyWork";
import AboutMe from "./components/sections/AboutMe";


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <MyWork />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;