import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <div className="overflow-x-hidden">
    <Hero></Hero>
    <Services></Services>
    <WhereToBuy></WhereToBuy>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App;
