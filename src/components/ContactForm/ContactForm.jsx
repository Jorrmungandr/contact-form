import { useState } from 'react';
import axios from 'axios';

import Input from '../Input';
import triangleSvg from '../../assets/triangle.svg';
import './ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      await axios.post('https://url-do-ngrok-de-alyson/form', {
        name,
        email,
        subject,
        message,
      });

      console.log('Email enviado com sucesso!');
    } catch (err) {
      console.log(err?.response || err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <img className="svg upper" src={triangleSvg} alt="Detalhe visual" />
      <img className="svg lower" src={triangleSvg} alt="Detalhe visual" />
      <h2>Fale conosco</h2>
      <div className="dash" />
      <p>
        Nos envie um e-mail para tirar eventuais dúvidas,
        mais informações ou para contratar nossos serviços
      </p>
      <Input
        type="text"
        placeholder="Seu Nome Completo"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Seu E-mail"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Assunto do seu Contato"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Sua Mensagem"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input className="submit-button" type="submit" value="Enviar !" />
    </form>
  );
}

export default ContactForm;
