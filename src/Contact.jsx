import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Contact = () => {

  const [isOpen, setIsOpen] = useState(true); //State para controlar o modal
  const form = useRef(); //Referencia para armazenar os dados do formulário //Aceder depois com form.current

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_195fkkh', 'template_onckv4z', form.current, {
        publicKey: 'NLcIgXk51qjlZNDUQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          openModal();
          // Fecha o modal após 3 segundos (opcional)
          setTimeout(() => {
            setIsOpen(false);
          }, 3000);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section id="contact" className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 p-6 md:p-12 relative md:w-[95%] lg:w-[85%] xl:w-[80%] mx-auto mb-56">

      {/* Borda superior e inferior com gradiente */}
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Borda esquerda e direita com outro gradiente */}
      <div className="absolute top-10 bottom-10 left-0 w-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute top-10 bottom-10 right-0 w-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      

      <div className="basis-1/3 flex flex-col gap-4 md:gap-8">
        <h1 className="text-4xl font-semibold">Contact</h1>
        <p>Feel free to reach out - whether it's a project idea, a job opportunity, or just a casual chat, I'd be happy to talk!</p>
        <ul className="flex md:flex-col text-xl gap-8 md:gap-4 mt-4">
          <li className="">
            <a href="https://github.com/HugoProjects" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-blue-200 focus:text-blue-200 transition-transform duration-300 hover:scale-110"><FaGithub className="text-2xl"/>Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hugo-bastos-engineer/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-blue-200 focus:text-blue-200"><FaLinkedin className="text-2xl"/>Linkedin</a>
          </li>
        </ul>
      </div>
      

      <form ref={form} onSubmit={sendEmail} onKeyDown="" className="basis-2/3">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" required className="text-lg rounded placeholder-[rgba(20,20,25,0.4)] text-[rgb(20,20,25)] p-2"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" required className="text-lg rounded placeholder-[rgba(20,20,25,0.4)] text-[#141419] p-2"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Message</label>
            <textarea name="message" placeholder="Your Message..." required className="text-lg rounded placeholder-[rgba(20,20,25,0.4)] text-[#141419] p-2 min-h-48"/>
          </div>
          <button type="submit" className="bg-[rgb(20,20,25)] border-2 border-gray-300 text-white text-lg font-semibold w-[25%] p-2 rounded hover:bg-blue-200 hover:border-blue-200 hover:text-[rgb(20,20,25)] focus:bg-blue-200 focus:text-[rgb(20,20,25)] focus:border-blue-200">Send</button>
        </div>
      </form>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal} // Fecha o modal quando clicado fora ou pressionando ESC
        contentLabel="Contact Sucefully Sent"
        className="fixed flex flex-col justify-center items-center gap-2 z-50 bg-blue-200 rounded px-8 py-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-2xl font-semibold text-[rgb(20,20,25)]">Thanks for your message!</h2>
        <p className="text-lg text-[rgb(20,20,25)]">I'll get back to you as soon as possible <RiMailSendLine className="inline"/></p>
        <button onClick={closeModal} className="bg-[rgb(20,20,25)] border-[rgb(20,20,25)] border-2 text-white text-lg font-semibold px-6 py-2 mt-2 rounded-md hover:bg-blue-200 hover:text-[rgb(20,20,25)] focus:bg-blue-200 focus:text-[rgb(20,20,25)]">Close</button>
      </Modal>

    </section>
  )
}

export default Contact