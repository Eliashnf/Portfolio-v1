import Navigation from "../components/Navigation";
import "../styles/general.css";
import { motion } from 'framer-motion';
import "../styles/components/Boxes.css";
import "../styles/components/Adjust.css";

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
    }
};

const pageTransition = {
    type: "spring",
    stiffness: 43
}

const Home = () => {
    return (
        <div className="Accueil texte page">
            
            <motion.div 
            initial="initial"
            animate="in"
            exit="out" 
            variants={pageVariants}
            transition={pageTransition} > 
                
                <div className="boxHome">
                    <div className="boxText1">
                        <p className="thin oblique">Hi, my name is</p> 
                        <h1 className="">ELIAS HEADFEL</h1>
                        <h2 className="thin">Welcome to my web site.</h2> <br/>
                        <p className="thin">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.Praesent sed quam urna. </p>
                    </div>
                </div>
                
            </motion.div>
        </div>
    )
} /*Kabuya*/

export default Home;