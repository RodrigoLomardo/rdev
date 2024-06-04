import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">Contato</h2>
      <h2 className="contact-sub-title">Entrar em Contato</h2>
      <p className="contact-text">
        Estou a procura de novas oprotunidades e projetos na área, então caso tenha algo em mente, entre em contato comigo.
      </p>
      <div className="contact-cta">
        <Button link="mailto:kishansheth21@gmail.com" text="Diga oi!" />
      </div>
    </motion.div>
  );
}

export default Contact;