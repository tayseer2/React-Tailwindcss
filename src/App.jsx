import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import StartSection from "./components/StartSection";

function App() {
  return (
    <>
      <div className="container mx-auto p-6">
        <Navbar />
        <Hero />
        <Section />
      </div>
      <StartSection />
      <Footer/>
    </>
  );
}

export default App;
