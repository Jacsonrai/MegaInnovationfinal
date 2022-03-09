import BrandName from "../components/BrandName";
import "../styles/sections/Footer.scss";
import { AiOutlineSend } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import{fromUp,fromDown} from '../Animation'

const Footer = () => {
  const[element,controls]=useScroll()
  return (
    <div className="footer-container" id="contact" ref={element}>
      <div className="container">
        <div className="main-container">
          <motion.div className="news-letter"
          variants={fromUp}
          animate={controls}
          transition={{duration:0.5}}

          >
            <BrandName isFooter={true} />
            <p>Join our newsletter to get update with our offer & Discounts</p>
            <div className="mail">
              <input type="email" placeholder="Enter your Email here" />
              <button>
                <AiOutlineSend />
              </button>
            </div>
          </motion.div>
          <motion.div className="quick-links"
           variants={fromDown}
           animate={controls}
           transition={{duration:0.5}}>
            <h3>Quick links</h3>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#contact">Career</a>
              </li>
              <li>
                <a href="#about">Terms and Conditions</a>
              </li>
              <li>
                <a href="#contact">Privacy Policy</a>
              </li>
            </ul>
          </motion.div>
          <motion.div className="industires"
           variants={fromUp}
           animate={controls}
           transition={{duration:0.5}}>
            <h3>Industires</h3>
            <ul>
              <li>
                <a href="#service">Mobile App Development</a>
              </li>
              <li>
                <a href="#service">Digital Marketing</a>
              </li>
              <li>
                <a href="#service">Web Development</a>
              </li>
              <li>
                <a href="#service">IOE</a>
              </li>
              <li>
                <a href="#service">Graphic Design</a>
              </li>
            </ul>
          </motion.div>
          <motion.div className="touch"
           variants={fromDown}
           animate={controls}
           transition={{duration:0.5}}
          >
            <h3>Get in Touch</h3>
            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="details">
                <div className="detail-name">Phone</div>
                <div className="detail-content">
                  <a href="#contact">+977 9844749338, 9813051660</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="details">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  <a href="#contact">info@megainnovative.com</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="details">
                <div className="detail-name">Location</div>
                <div className="detail-content">
                  <a href="#contact">Aanamnagar,Kathmandu</a>
                </div>
              </div>
            </div>
            
          </motion.div>
         
          
        </div>
        <div className="copyright" >
       
            <div className="copy">
              <p>Copyright c 2020.All Rights Reserved</p>
            </div>
            <div className="icons">
              <div className="icon">
                <a href="https://www.facebook.com/MegaInnovationNepal">
                  <FaFacebook />
                </a>
              </div>
              <div className="icon">
                <a href="#contact">
                  <FaInstagram />
                </a>
              </div>
              <div className="icon">
                <a href="#contact">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
export default Footer;
