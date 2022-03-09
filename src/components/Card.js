import "../styles/components/Card.scss"
import { cardAnimation } from "../Animation"
import {  motion } from "framer-motion"
const Card=({Logo,title,animateCustom})=>{

    return(
        <motion.div className="card"
        variants={cardAnimation}
        animate={animateCustom}
        transition={{stiffness:5000}}>
            <div className="logo">{Logo}</div>
            <div className="card-title">
                <div className="titleCard">{title}</div>
            </div>


        </motion.div>
    )
}
export default Card