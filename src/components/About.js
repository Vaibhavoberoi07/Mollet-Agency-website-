import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import photo from "../imgs/1.jpg"

const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, } },
    hidden: { opacity: 0, y: -30 }
}

const img = {
    show:{ opacity: 1, transition: { duration: 0.3, delay:0.5, ease:"easeOut" }},
    hide:{ opacity: 0,},
    exit:{ opacity:0 }
}


const About = () => {
    const control = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.5 })

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView])



    return (
        <div className='Aboutmain'  id='About'>
            <motion.div
                ref={ref}
                variants={variants}
                initial="hidden"
                animate={control}
                className="abouthead">
                <h1>ABOUT</h1>
                <h1>US</h1>
            </motion.div>

            <motion.div
                ref={ref}
                variants={variants}
                initial="hidden"
                animate={control}
                className="aboutinfo">
                <div className='aboutinfohead'>
                    <h2>Empowering Digital Growth Through Innovative Web Development and Design Solutions.</h2>
                </div>
                <div className='aboutpara'>At Mottlet, we are the architects of exceptional digital experiences. Our passion for web development and UI/UX design drives us to create memorable online solutions that transcend expectations. Explore our story, ethos, and commitment to crafting your digital success.With a team of dedicated professionals, we thrive on turning ideas into interactive, engaging, and innovative websites and applications. Our commitment to excellence, attention to detail, and love for design and technology drive us to deliver solutions that not only meet but exceed your expectations.</div>
            </motion.div>

        <div className="img">
            <motion.img
            variants={img}
            whileInView='show'
            initial='hide'
            viewport={{once:true}}
            // exit='exit'
            src={photo} alt="" />
        </div>

        </div>
    )
}

export default About
