import Home from "./components/Home";
import Navbar from "./components/Navbar";
import coding from "./assets/coding.jpg"
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      
      <div>
        <img className="absolute inset-0 h-full w-full object-cover" src={coding} alt="" />
        <div className="absolute inset-0 bg-[#141313] bg-opacity-97"></div>
        <div className="relative">
          <Navbar />
          <Home />   
            
        </div>
  
      </div>
      <About/>
      <Experience/>
      <Contact/>
      <Footer />

    </div>
  );
}

export default App;
