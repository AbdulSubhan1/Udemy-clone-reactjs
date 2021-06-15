import "./App.css";
import "./styles/index.scss";
import Billboard from "./components/billboard/Billboard";
import Explorer from "./components/explorer/Explorer";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Billboard />
      <Explorer />
      <Footer />
    </div>
  );
}

export default App;
