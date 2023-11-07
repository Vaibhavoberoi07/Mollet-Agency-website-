import React from 'react'
import wide from '../imgs/wide.jpg'
import g1 from '../imgs/g1.jpg'
import g2 from '../imgs/g2.jpg'
import g3 from '../imgs/g3.jpg'
import g4 from '../imgs/g5.jpg'
import { motion } from "framer-motion"

const container = {
  fade: { background: "black", color: "#F5F5F7" },
  unfade: { background: "#F5F5F7", color: "#1D1D1" },
  po: { background: "#F5F5F7", color: "#1D1D1", }
}

const workflow = {
  up: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } },
  down: { opacity: 0, y: 30, },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, } },
  hidden: { opacity: 0, y: -30 }
}

const Work = () => {

  return (

    <>
      <motion.div
        variants={container}
        initial="unfade"
        whileInView="fade"
        viewport={{ amount: 0.3 }}
        exit="po"
        className="servicewrap" id='Projects'>

        <div className="servicehead">
          <motion.h1
            variants={workflow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='work'
          > WORK</motion.h1>
        </div>

        <div className="workcontainer">
          <motion.div
            variants={workflow}
            initial="down"
            whileInView="up"
            viewport={{ once: true }}
            className="workblockwide" >
            <div className="lp">
              <img src={wide} alt="" className='wideimg' />
              <div className="widetext">
                UI/UX Design
              </div>
            </div>
          </motion.div>

          <div className="workblockshort">
            <motion.div
              variants={workflow}
              initial="down"
              whileInView="up"
              viewport={{ once: true }}
              className="workleft common">
              <img src={g1} alt="" className='wideimg' />
              <div className="shortext">
                <h2>Lavten</h2>
                <h4>Website</h4>
              </div>
            </motion.div>
            <motion.div
              variants={workflow}
              initial="down"
              whileInView="up"
              viewport={{ once: true }}
              className="workright common">
              <img src={g2} alt="" className='wideimg' />
              <div className="shortext">
                <h2>Cross C</h2>
                <h4>Event</h4>
              </div>
            </motion.div>
          </div>
          <div className="workblockshort">
            <motion.div
              variants={workflow}
              initial="down"
              whileInView="up"
              viewport={{ once: true }}
              className="workleft common">
              <img src={g3} alt="" className='wideimg' />
              <div className="shortext">
                <h2>Wire Up</h2>
                <h4>Virtual Event</h4>
              </div>
            </motion.div>
            <motion.div
              variants={workflow}
              initial="down"
              whileInView="up"
              viewport={{ once: true }}
              className="workright common">
              <img src={g4} alt="" className='wideimg' />
              <div className="shortext">
                <h2>Cage</h2>
                <h4>Website</h4>
              </div>
            </motion.div>
          </div>
        </div>

      </motion.div>

    </>
  )
}

export default Work
