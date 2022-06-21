import Home from "./components/Home";
import Navbar from "./components/Navbar";
import coding from "./assets/coding.jpg"

function App() {
  return (
    <div >
      
      <div>
        <img className="absolute inset-0 h-full w-full object-cover" src={coding} alt="" />
        <div className="absolute inset-0 bg-[#141313] bg-opacity-97"></div>
        <div class="relative">
          <Navbar />
          <Home />     
        </div>
  
      </div>

    </div>
  );
}

export default App;
