import WorkImage from "../assets/works.svg";
import "../styles/sections/Starter.scss";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { HeaderAnimation,ImageAnimation  } from "../Animation";
import { useScroll } from "../components/useScroll";

const Starter = () => {
  const [element,controls]=useScroll();
  return (
    <div className="main-container" ref={element}>
      <Navbar />
      <div className="container">
        <motion.div className="content" variants={HeaderAnimation} animate={controls} transition={{delay:0.2,type:"tween"}}>
          <h1>
            We Provide Solution to help You to Build or Grow Your Business!
          </h1>
          <p>
            A professional web mobile app development agency with over 100+ web
            and app developed.We provide a high-quality service in web and
            mobile app development as well as in design.
          </p>
        </motion.div>
        <motion.div className="image" variants={ImageAnimation } animate={controls}  transition={{type:"tween"}}>
          <img src={WorkImage} alt="WOrk" />
        </motion.div>
      </div>
    </div>
  );
};
export default Starter;
