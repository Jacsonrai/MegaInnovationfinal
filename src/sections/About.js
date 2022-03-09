import Title from "../components/Title"
import Button from '../components/Button'
import "../styles/utils/colors.scss"
import "../styles/components/Title.scss"
import "../styles/sections/About.scss"
import Card from "../components/Card"
import {FaMobileAlt}from "react-icons/fa"
import {IoIosGlobe} from "react-icons/io"
import {GrDomain} from "react-icons/gr"
import {FcAdvertising} from "react-icons/fc"
import { motion } from "framer-motion"
import { reveal } from "../Animation"
import { useScroll } from "../components/useScroll"
const About=()=>{
    const[element,controls]=useScroll()
    return(
    <div className="about-container" id="service" ref={element}>
        <div className="container">
            <motion.div className="details"
            variants={reveal}
            animate={controls}
            transition={{delay:0.1,stiffness:200}}
            >
                <Title title="About MegaInnovative"  color="blue"/>
                 <p>Software to every big idea starts with a small step forward and we are here for helping you take that small step ,
                    let us solve your business problems by developing and integrating software to suit your needs.
                     we build and manage diversified portfolios, by keeping charges low and clearly show where you’re invested. 
                     </p>
                    <p>
                    Our teams come together every day to move our mission forward making simple, elegant tools to help you be productive 
                    without the stress Start your journey with mega innovative today
                    </p>
                <Button content="WHy MegaInnovative?"/>
            </motion.div>
            <motion.div className="cards" ref={element}>
                <Card
                title="Mobile Development"
                Logo={<FaMobileAlt/>}
                animateCustom={controls}
                />
                 <Card
                title="Web Development"
                Logo={<IoIosGlobe/>}
                animateCustom={controls}
                />
                 <Card
                title="Domain and hosting"
                Logo={<GrDomain/>}
                animateCustom={controls}
                />
                 <Card
                title="Digital Marketing"
                Logo={<FcAdvertising/>}
                animateCustom={controls}
                />

            </motion.div>
        </div>

    </div>)
}
export default About