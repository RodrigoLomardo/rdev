import Image from 'next/image'
import React from 'react'
import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
    const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
    return (
        <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
        <div className='about' id='about'>
            <div className="title">
                <h2>Sobre mim</h2>
            </div>
            <div className="about-grid">
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                        Comecei meu interesse na área da tecnologia por volta dos 11 anos, comecei entendendo sobre as peças de computadores e suas funcionalidades, aprendendo bastante sobre manutenção e montagem
                    </p>
                    <p className="about-grid-info-text">
                        Dois anos depois, fui apresentado a programação e criação de plugins por conta de um jogo que eu jogava, dali comecei a entender um pouco de lógica de programação em Java.
                    </p>
                    <p className="about-grid-info-text">
                        Passou o tempo e vi que essa criação de códigos que eu tratei como uma diversão no passado poderia ser meu futuro, então próximo ao final do meu ensino médio comecei a entender e buscar sobre criação de sites e como fazer com que páginas da web conseguissem ser bem feitas, estilizadas e que tivessem boas funcionalidades para o usuário.
                    </p>
                    <p className="about-grid-info-text">
                        Após minha formação no ensino médio comecei a me empenhar muito nas linguagens de programação e principalmente na criação web, desde então continuo estudando todos os dias e buscando conhecer novas tecnologias para evoluir na minha profissão.
                    </p>
                    <p className="about-grid-info-text">
                        Aqui estão algumas das tecnologias que tenho trabalhado recentemente em meus projetos e meu trabalho:
                    </p>
                    <ul className="about-grid-info-list">
                        <li className='about-grid-info-list-item'>React</li>
                        <li className='about-grid-info-list-item'>Next.js</li>
                        <li className='about-grid-info-list-item'>TypeScript</li>

                        <li className='about-grid-info-list-item'>TailWind</li>
                        <li className='about-grid-info-list-item'>CSS</li>
                        <li className='about-grid-info-list-item'>Sass</li>

                        <li className='about-grid-info-list-item'>JavaScript</li>
                        <li className='about-grid-info-list-item'>Php</li>
                        <li className='about-grid-info-list-item'>Laravel</li>

                        <li className='about-grid-info-list-item'>WordPress</li>
                        <li className='about-grid-info-list-item'>Git</li>
                        <li className='about-grid-info-list-item'>Github</li>
                    </ul>
                </div>
                <div className="about-grid-photo">
                    <div className="overlay"></div>
                    <div className="overlay-border"></div>
                    <div className="about-grid-photo-container">
                        <Image src="/perfil.png" alt='profile' fill />
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default About