import React from 'react'
import design from '../imgs/design.png'
import code from '../imgs/webdev.png'
import shield from '../imgs/shield.png'
import people from '../imgs/group.png'
import { motion } from "framer-motion";


// const container = {
//     hidden: { opacity:0 },
//     show: {
//         opacity:1,
//         transition: {
//             staggerChildren: 0.5,
//             delayChildren: 0.2,

//         },
//     },
//   }

const itemA = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}



const serviceVariants = {
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
    hide: { y: -30, opacity: 0 }
}


const Services = () => {


    return (
        <div className="serviceWrap" id='Services'>
            <div className="service">
                <motion.h1
                    variants={serviceVariants}
                    initial="hide"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.4 }}

                >SERVICES</motion.h1>
            </div>

            <motion.div
                className="serviceItem">

                <motion.div className="blocks"
                    variants={itemA}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <div className="svg">
                        <img src={design} alt="" />
                    </div>
                    <div className="blockhead">
                        UI/UX Design
                    </div>
                    <div className="blockpara">
                        UI/UX design, often referred to as the combination of "User Interface" (UI) and "User Experience" (UX) design, plays a crucial role in the creation of digital products, websites, applications, and software. It focuses on enhancing the way users interact with and perceive a product.
                    </div>

                </motion.div>
                <motion.div className="blocks"
                    variants={itemA}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <div className="svg">
                        <img src={code} alt="" />
                    </div>
                    <div className="blockhead">
                        Website Design and Development
                    </div>
                    <div className="blockpara">
                        This is the core service of a web development agency. They create and build websites that are visually appealing, user-friendly, and functional. This can include creating websites from scratch, redesigning existing ones, or developing web applications.
                    </div>

                </motion.div>
                <motion.div className="blocks"
                    variants={itemA}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <div className="svg">
                        <img src={shield} alt="" />
                    </div>
                    <div className="blockhead">
                        Web Security
                    </div>
                    <div className="blockpara">
                        Implementing security measures, such as SSL certificates, firewalls, and regular security audits, to protect websites from cyber threats.Optimizing websites for search engines to improve their visibility in search results, including on-page and off-page SEO.
                    </div>

                </motion.div>
                <motion.div
                    variants={itemA}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="blocks">
                    <div className="svg">
                        <img src={people} alt="" />
                    </div>
                    <div className="blockhead">
                        Consultation
                    </div>
                    <div className="blockpara">
                        Providing expert advice on web development strategies, technologies, and digital marketing to help clients achieve their online goals.Building specialized software solutions that go beyond websites and may involve desktop applications or software as a service (SaaS) platforms.
                    </div>

                </motion.div>

            </motion.div>



        </div>

    )
}

export default Services
