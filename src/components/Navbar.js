import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import {MdClose} from "react-icons/md";
import "../styles/components/Navbar.scss";
import { useState } from "react";

import { motion } from "framer-motion";
import { navbarAnimation } from "../Animation";
import Logo from "./Logo";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar);
  };
  return (
    <motion.div className={`navbar ${toggleNavbar === true ? "active" : ""}`}
    variants={navbarAnimation}
    transition={{delay:0.1}}
    >
      <div className="col">
        {/* <BrandName/> */}<Logo/>
        <div className="collapseble-button">
          {!toggleNavbar ? (
            <GiHamburgerMenu onClick={navbarToggler} />
          ) : (
            <MdClose onClick={navbarToggler} />
          )}
        </div>
      </div>
      <nav>
          <div className="links">
              <ul>
                  <li>
                      <a href="#about">About</a>
                  </li>
                  <li>
                      <a href="#service">Services</a>
                  </li>
                  <li>
                      <a href="#testimonial">Testimonial</a>
                  </li>
                  <li>
                    <a href="#contact">  <Button content="Contact"/></a>
                   
                  </li>
                 
              </ul>

          </div>

      </nav>
    </motion.div>
  );
};
export default Navbar;
