import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

import {
    FiGithub,
    FiInstagram,
    FiLinkedin,
} from 'react-icons/fi'

function SocialIcons() {
    const socialLinks = [
        {
            name: 'Github', icon: <FiGithub />, link: 'github.com/RodrigoLomardo'
        },
        {
            name: 'Instagram', icon: <FiInstagram />, link: 'instagram.com/r.lomardo'
        },
        {
            name: 'Linkedin', icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/rodrigolomardo/'
        }
    ]
    return (
        <motion.div
        className="social-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.95,
        }}
      >
        <ul className="social-icons-list">
          {socialLinks.map(({ name, icon, link }) => (
            <li key={name} title={name} className="social-icons-list-item">
              <Link
                href={link}
                className="social-icons-list-item-link"
                target="_blank"
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    )
}

export default SocialIcons