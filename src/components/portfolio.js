//import react and libraries for scrolling
import React from 'react';
import { motion } from 'framer-motion';

import '../styles.css';
import '../cyberstyles.css';

const Portfolio = () => {

    return (
        <motion.section
            className="section portfolio"
            data-scroll-section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }} //animation when leaving
            transition={{ duration: 3 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <h1>Portfolio</h1>
        </motion.section>
    );
};

//allows other files to import Portfolio
export default Portfolio;