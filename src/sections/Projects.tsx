import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import {motion} from 'framer-motion'

function Projects() {
    
        const projectsData = [
          {
            image: "/imarket.png",
            projectName: "IMarket",
            projectLink: "",
            projectDescription:
              "Um E-Commerce conceito de roupas com interatividade de login e adição de produtos ao carrinho com soma total dos produtos e seus valores utilizando 'fakestore.api'.",
            projectTech: [
              "React",
              "JavaScript",
              "TailWind",
              "Firebase",
              
            ],
            projectExternalLinks: {
              github: "https://github.com/RodrigoLomardo/e-commerce",
              externalLink: "https://e-commerce-rho-blond.vercel.app",
            },
          },
          {
            image: "/itau-lp.png",
            projectName: "Landing Page Itau",
            projectLink: "",
            projectDescription:
              "Pagina de Interface bancária do banco Itáu com design limpo, responsivo e chamativo ao cliente.",
            projectTech: [
              "Next.js",
              "TypeScript",
              "TailWind",
              
            ],
            projectExternalLinks: {
              github: "https://github.com/RodrigoLomardo/itau-lp",
              externalLink: "https://lp-next-phi.vercel.app",
            },
          },
          {
            image: "/gpt-chat.png",
            projectName: "Chat-GPT Clone",
            projectLink: "",
            projectDescription:
              "Cópia da interface do Chat-GPT com interatividade com o chat",
            projectTech: [
              "Next.js",
              "TypeScript",
              "TailWind"
             
            ],
            projectExternalLinks: {
              github: "https://github.com/RodrigoLomardo/chatgpt-clone",
              externalLink: "https://chat-rdpt.netlify.app",
            },
          },
          {
            image: "/login-page.png",
            projectName: "Animated Login Page",
            projectLink: "",
            projectDescription:
              "Página de login integrada com animação de transição para página de registro",
            projectTech: [
              "HTML",
              "CSS",
              "JavaScript"
             
            ],
            projectExternalLinks: {
              github: "https://github.com/RodrigoLomardo/animated_login_page",
              externalLink: "https://rodrigolomardo.github.io/animated_login_page/",
            },
          },
        ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Trabalhos</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Projeto em Destaque</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target='_blank'
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  )
}


export default Projects;