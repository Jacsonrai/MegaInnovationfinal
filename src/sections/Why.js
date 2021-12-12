
import Title from "../components/Title"
import "../styles/sections/why.scss"
import { motion } from "framer-motion"
import { topContainerAnimation,reasonsAnimation,videoAnimation  } from "../Animation"
import { useScroll } from "../components/useScroll"


const Why=()=>{
    const[element,controls]=useScroll()
    return(
    <div className="why-container" id="about" ref={element} >
        <div className="container">
         <motion.div className="top"
          variants={topContainerAnimation}
            animate={controls}
            transition={{duration:0.5}}
         >
         <Title title="Why MegaInnovation?" color="blue" lineCenter={true}/>
             
                <div className="subTitle">
                    <p>Always stay update with the technologies thus we help our clients
                        by giving the best solutions for their needs.
                    </p>
                </div>
            </motion.div>
            <div className="content">
                <motion.div className=""
                variants={videoAnimation}
                animate={controls}
                transition={{type:"tween",duration:1}}
                >
                    <div className="video">
                      
                    </div>
                </motion.div>
                <motion.div className="reasons" 
                variants={reasonsAnimation}
                animate={controls}
                transition={{type:"tween",duration:1}}
                >
                    <ul>
                        <li>Team of creative and innovative people</li>
                        <li>24/7 Ready to recive service request</li>
                        <li>Provide solution to our multiple global clients</li>
                        <li>Quality product and Customer satisfaction</li>
                     
                    </ul>
                </motion.div>
            </div>
        </div>
    </div>
    )
}
export default Why