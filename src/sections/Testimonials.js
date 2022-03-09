import Testimonial from "../components/Testimonial"
import Title from "../components/Title"
import "../styles/sections/Testimonials.scss"
import { motion } from "framer-motion"
import { testimonialAnimation,cardAnimation } from "../Animation"
import { useScroll } from "../components/useScroll"
const Testimonials=()=>{
    const[element,controls]=useScroll()
    return(
    <div className="testimonials-container" ref={element}>
        <div className="container">
            <motion.div className="title-container"
            variants={testimonialAnimation}
            animate={controls}
            transition={{duration:0.5}}
            >
                <Title title="Testimonials" color="blue" lineCenter={true}/>
                <p>See what our client are saying about us</p>
            </motion.div>
            <div className="testimonials" id="testimonial">
                <Testimonial
                content="Thank so much for doing  a great job and for fine customer supports."
                name="Ample International Education Consultancy "
                designation="Director-Pramod Adhikari"
                variants={cardAnimation}
                animate={controls}
                />
                <Testimonial
                content="I can't say enough great things about Mega Innovative  . They know their stuff and are extremely friendly and easy to work with."
                name="Mystic Holidays Tour & Travels"
                designation="MD-Bimal Regmi"
                variants={cardAnimation}
                animate={controls}
                />
                <Testimonial
                content="All you guys are awesome! Thanks for always helping me. Always very nice and friendly"
                name="-Kings Abroad Education Consultancy "
                designation="MD-Ram kharel"
                variants={cardAnimation}
                animate={controls}
                />

            </div>
        </div>
        
    </div>)

}
export default Testimonials