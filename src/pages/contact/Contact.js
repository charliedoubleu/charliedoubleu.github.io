import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';


export default function Contact ()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'x7YGt02BbH8_DDrwK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <AnimatePresence>
    <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} className="contact-form">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>

          <input required type="text" name="user_name" placeholder="name"/>

          <input required type="email" name="user_email" placeholder="email" />

          <textarea required name="message" placeholder="message"/>
        <input className='submit' type="submit" value="Send" />
      </form>
    </motion.div>
    </AnimatePresence>
  );
};