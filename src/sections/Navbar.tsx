import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import {motion} from 'framer-motion'
import { BsHighlights } from "react-icons/bs";


function Navbar() {
  const sectionLinks = [
    { name: "Sobre", link: "/#about" },
    { name: "Experiência", link: "/#experience" },
    { name: "Trabalho", link: "/#work" },
    {
      name: "Contato",
      link: "/#contact",
    },
  ];

  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavbar, setResponsiveNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false);
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavbar(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavbar(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavbar) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavbar]);

  return (
    <nav>
    <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
      <motion.div
        className="brand"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <Link href='#' >
          
        </Link>
      </motion.div>
      <motion.div
        className="nav-responsive-toggle"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {responsiveNavbar ? (
          <CgClose
            onClick={(e) => {
              e.stopPropagation();
              setResponsiveNavbar(false);
            }}
          />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setResponsiveNavbar(true);
            }}
          />
        )}
      </motion.div>
      <div
        className={`${responsiveNavbar && "nav-responsive"} nav-items`}
      >
        <ul className="nav-items-list">
          {sectionLinks.map(({ name, link }, index) => (
            <motion.li
              key={name}
              className="nav-items-list-item"
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.3 + index * 0.1,
              }}
            >
              <Link href={link} className="nav-items-list-item-link">
                {name}
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="nav-items-button"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <Button text="Curriculo" link="http://localhost:3000/resume.pdf" />
        </motion.div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
