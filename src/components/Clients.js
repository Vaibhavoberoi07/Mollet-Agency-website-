import React from 'react'
import apple from "../imgs/logos/apple.png"
import adidas from "../imgs/logos/adidas.webp"
import chanel from "../imgs/logos/Chanel.webp"
import jd from "../imgs/logos/jd.png"
import lv from "../imgs/logos/lv.png"
import nike from "../imgs/logos/Nike.webp"
import sony from "../imgs/logos/Sony.webp"
import walt from "../imgs/logos/Walt.webp"
import gillet from "../imgs/logos/Gillette.webp"
import {motion} from 'framer-motion'


const clientVariants = {
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
    hide: { y: -30, opacity: 0 }
}

const Clients = () => {
    return (
        <div className='clientwrap'>

            <motion.div
                variants={clientVariants}
                initial="hide"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.4 }}
            className='servicehead'>
                <h1 className='client'>CLIENTS</h1>
            </motion.div>

            <motion.div
                variants={clientVariants}
                initial="hide"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.4 }}
            className='clienthead'>
                <h2>People who worked with us</h2>
            </motion.div>

            <div className="namewrap">
                <div className="slide">
                    <div className="slideleft">
                        <img src={apple} alt="" />
                        <img src={gillet} alt="" />
                        <img src={nike} alt="" />
                        <img src={jd} alt="" />
                        <img src={chanel} alt="" />
                        <img src={sony} alt="" />
                        <img src={walt} alt="" />
                        <img src={adidas} alt="" />
                        <img src={lv} alt="" />
                      
                    </div>
                    <div className="slideleft">
                        <img src={apple} alt="" />
                        <img src={gillet} alt="" />
                        <img src={nike} alt="" />
                        <img src={jd} alt="" />
                        <img src={chanel} alt="" />
                        <img src={sony} alt="" />
                        <img src={walt} alt="" />
                        <img src={lv} alt="" />
                        <img src={adidas} alt="" />
                      
                    </div>
                </div>
                <div className="slide">
                <div className="slideleft">
                        <img src={walt} alt="" />
                        <img src={gillet} alt="" />
                        <img src={apple} alt="" />
                        <img src={nike} alt="" />
                        <img src={jd} alt="" />
                        <img src={chanel} alt="" />
                        <img src={adidas} alt="" />
                        <img src={sony} alt="" />
                        <img src={lv} alt="" />
                      
                    </div>
                    <div className="slideleft">
                        <img src={apple} alt="" />
                        <img src={gillet} alt="" />
                        <img src={nike} alt="" />
                        <img src={jd} alt="" />
                        <img src={chanel} alt="" />
                        <img src={sony} alt="" />
                        <img src={walt} alt="" />
                        <img src={adidas} alt="" />
                        <img src={lv} alt="" />
                      
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default Clients
