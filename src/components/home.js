//import react and libraries for scrolling
import React from 'react';
import { motion } from 'framer-motion';

import '../styles.css';
import '../cyberstyles.css';

const Homepage = () => {

    return (
        //from framer-motion, allows animation to section
        <section className="section home" data-scroll-section>
            <motion.section
                className="section home"
                data-scroll-section //allows scrolling
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }} //animation when leaving
                transition={{ duration: 3 }} //duration of animation
                viewport={{ once: false, amount: 0.5 }} //starts when 50% screen in view
            >
                <h1>Madison Davis</h1>
            </motion.section>
        </section>
    );
};

//allows other files to import Homepage
export default Homepage;
