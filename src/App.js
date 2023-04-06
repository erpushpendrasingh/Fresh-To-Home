import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import Navbar from "./Components/Navbar/Navbar";

function App() {
     return (
          <div className="App">
               <Navbar/>
               <MainRoutes />

               {/* <ProductList/> */}
          </div>
     );
}

export default App;
