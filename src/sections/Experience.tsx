import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

function Experience() {
    const [selected, setSelected] = useState(0)



    useEffect(()=> {
        const transformSelected = () => {
            const underline = document.querySelector<HTMLElement>(".underline");
            underline!.style.top = `${selected * 2.5}rem`;
        }
        transformSelected()

    },[selected])



    const experiences = [
        {
            name: "DETRO",
            role: "Estágio em Desenvolvimento",
            url: "http://www.detro.rj.gov.br",
            start: 'Fevereiro 2024',
            end: 'Presente',
            shortDescription: [
                "Estagiando com o time de desenvolvedores do DetroRJ",
                "Projetos envolvendo Php, Laravel, PhpMyAdmin, JavaScript, BootStrap",
                "Resoluções de bugs e problemas relacionados aos sistemas da empresa",
                
            ]
        },
        {
            name: "S.A.P",
            role: "Analista Financeiro",
            url: 'https://casadosdados.com.br/solucao/cnpj/sap-comercio-e-restaurante-ltda-22738669000118',
            start: 'Setembro 2023',
            end: 'Fevereiro 2024',
            shortDescription: [
                "Cuidava de todas as responsabilidades financeiras de um dos restaurantes da empresa.",
                "Consciliação Bancária.",
                "Pagamento de funcionarios.",
                "Relatorios financeiros."
            ]
        },
       
    ]

  return (

    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
    <div className='experience' id='experience'>
        <div className="title">
            <h2>Experiência profissional</h2>
        </div>
        <div className="container">
            <ul className="exp-slider">
                <div className="underline"></div>
                {
                    experiences.map((experience,index) => {
                        return <li key={index} className={`exp-slider-item ${index === selected && "exp-slider-item-selected"}`}
                        onClick={()=>setSelected(index)}
                        >
                              <span>{experience.name}</span>  
                        </li>
                    })
                }
            </ul>
            <div className="exp-details">
                <div className="exp-details-position">
                    <h3>
                        <span>{experiences[selected].role}</span>
                        <span className='exp-details-position-company'>
                            &nbsp;@&nbsp;
                            <Link className='link' href={experiences[selected].url}>
                            {experiences[selected].name}
                            </Link>
                        </span>
                    </h3>
                    <p className="exp-details-range">
                        {experiences[selected].start} - {experiences[selected].end}
                    </p>
                    <ul className="exp-details-list">
                        {
                            experiences[selected].shortDescription.map((description,index)=> (<li key={index} className='exp-details-list-item'>
                                {description}
                            </li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Experience