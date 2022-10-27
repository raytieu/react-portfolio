import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
