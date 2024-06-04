import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

function Hero() {
  return (
    <div className='hero'>
        <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Olá meu nome é
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Rodrigo Lomardo.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        Sou Front-End Developer
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        Desenvolvedor Front-end buscando aperfeiçoar minhas habilidades no desenvolvimento Back-end, buscando o conhecimento de todas as àreas do desenvolvimento web e no desenvolvimento de software. Faço parte do time de desenvolvedores do <Link className='link' href="https://www.detro.rj.gov.br">DetroRJ</Link>
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Fale Comigo"
          link="#contact"
        />
      </motion.div>
    </div>
    
  )
}

export default Hero