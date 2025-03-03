//import react and libraries for scrolling
import React from 'react';
import { motion } from 'framer-motion';

import '../styles.css';
import '../cyberstyles.css';

const About = () => {

    return (
        <motion.section
            className="section about"
            data-scroll-section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }} //animation when leaving
            transition={{ duration: 3 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <h1>About</h1>
        </motion.section>
    );
};

export default About;