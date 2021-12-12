import Starter from "./sections/starter";
import About from "./sections/About";
import Why from "./sections/Why";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import ScrollTopTop from "./components/ScrollToTop";
import {motion}from 'framer-motion'





function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollTopTop />
      <Starter />
      <About />
      <Why />
      <Testimonials />
      <Footer />
    </motion.div>
  );
}

export default App;
