import React from 'react';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import "../styles/components/Boxes.css"
import Boxes from '../components/Boxes';

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
    stiffness: 33
}


const Work = () => {
    return (
        <div className='texte page'>
            
            <motion.div 
            initial="initial"
            animate="in"
            exit="out" 
            variants={pageVariants}
            transition={pageTransition} >
                <Boxes/>     
            </motion.div>
        </div>
    );
};

export default Work;