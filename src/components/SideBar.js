import React, { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll/modules';


const SideBar = () => {
  const [side, setside] = useState(false)
  const toggle = () => {
    setside(!side)

  }
  return (
    <>
      <div className="menu">
        <div className="ham">
          <CiMenuFries className='nop' onClick={toggle} />
        </div>

      </div>
      <div className={side ? "Items Active" : "Items"}>
        <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} className="cross" onClick={toggle}>
          <RxCross1 />
        </motion.div>
        <Link activeClass="active" to="Hero" spy={true} smooth={true} offset={50} duration={500}> <h1 className='line'>Home </h1></Link>
        <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500}>  <h1 className='line'>About </h1> </Link>
        <Link activeClass="active" to="Services" spy={true} smooth={true} offset={50} duration={500}> <h1 className='line'>Services </h1></Link>
        <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={50} duration={500}> <h1 className='line'>Projects </h1></Link>
        <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={50} duration={500}> <h1 className='line'>Contact </h1></Link>

      </div>
    </>
  )
}

export default SideBar
