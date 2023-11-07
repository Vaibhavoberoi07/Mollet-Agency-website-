import React from 'react'
import pngegg from "../imgs/pngegg.png"
import herodata from '../data/herodata'
import { motion } from 'framer-motion'


const container = {
  hidden: { opacity:0 },
  show: {
      opacity:1,
      transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
          
      },
  },
}

const itemA = {
  hidden: { opacity:0, y:-100 },
  show: { opacity:1, y: 0 },
}


const Hero = () => {


  return (
    <div className='heromain' id='Hero'>
      <div className="layout" >
        <div className="logo">
          <img src={pngegg} alt="" />
        </div>

        <motion.div className="layoutmain"
             variants={container}
             initial="hidden"
             animate="show"

        >
          {herodata.map((item) => {
            return <motion.h1
            variants={itemA}
              className='h1' key={item}>
              {item}
            </motion.h1>

          })}
        </motion.div>
      </div>
    </div>

  )
}

export default Hero
