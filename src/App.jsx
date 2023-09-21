import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NewProducts from "./components/New Product Page/NewProducts";
import Topbar from "./components/Topbar/Topbar";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <NewProducts />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
