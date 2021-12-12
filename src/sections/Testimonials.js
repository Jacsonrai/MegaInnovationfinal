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
                content="The best on the net! Software development saved my business"
                name="Ample"
                designation="co-founder"
                variants={cardAnimation}
                animate={controls}
                />
                <Testimonial
                content="They have a best Customer service,help me alot in my business grow"
                name="Kings Aboard"
                designation="Founder and CEO"
                variants={cardAnimation}
                animate={controls}
                />
                <Testimonial
                content="Thank to megaInnovation for extending my bussiness growth"
                name="BMW Educational Consultancy"
                designation="co-founder"
                variants={cardAnimation}
                animate={controls}
                />

            </div>
        </div>
        
    </div>)

}
export default Testimonials