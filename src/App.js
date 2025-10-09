import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"
import Title from "./Components/Title";

function App() {
  return (
    <>
    <Title/>
    <Header/>
    <Navigation/>
    <div className="container">
    <About/>
    <Skills/>
    <Projects/>
     <Contact />      
    </div>
    <Footer/>
   
</>
  );
}

export default App;
