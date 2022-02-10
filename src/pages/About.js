import React from 'react';
import Navigation from '../components/Navigation';
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


const About = () => {
    return (
        <div className='texte page'>
            
            <motion.div 
            initial="initial"
            animate="in"
            exit="out" 
            variants={pageVariants}
            transition={pageTransition} >
                <div className='boxAbout'>
                <img src='./img/game.jpg' alt='img'/>
                </div>
                <div className='boxAbout'>
                    <div className='boxText2'>
                        <h1 className=''> My name is Elias</h1>
                        <p className='thinner'>I am a Front-end developper, an artist, an author and a good friend. I have a serious passion for creating stories. Everywhere I go, I look at things like art and try to make the best, even the worst situation, into a story that I can use later in a project.</p>
                        <p className='thinner'>Name: <strong>Elias</strong></p>
                        <p className='thinner'>Age: <strong>20</strong></p>
                        <p className='thinner'>Languages: <strong>French(bilingual), English, Korean(soon)</strong></p>
                        <p className='thinner'>Email: <strong>quelquechose@gmail.com</strong></p>
                        <p className='thinner'>Address: <strong>France,Saint-Denis</strong></p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;