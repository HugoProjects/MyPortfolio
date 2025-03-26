import { useState, useEffect } from "react";
import { TbReload } from "react-icons/tb";
import { motion } from "framer-motion";

const Inspiration = () => {
  const [quotes, setQuotes] = useState([]); // Lista de quotes
  const [quoteIndex, setQuoteIndex] = useState(0); // Índice da quote atual

  const fetchQuote = async () => {

    const lastStoredIndex = Number(localStorage.getItem("lastIndex")); // Última indice de quote apresentada
    const lastStoredQuote = localStorage.getItem("lastQuote"); // Última quote apresentada

    try {
      const response = await fetch(`https://api.allorigins.win/get?url=https://zenquotes.io/api/quotes/`);
      const data = await response.json();
      const quoteData = JSON.parse(data.contents); // Converte string JSON para objeto

      setQuotes(quoteData); // Guarda uma lista de quotes

      // Se já havia um índice/quote guardado, verificar se a quote está no mesmo lugar da lista (se sim, provavelmente é a mesma lista que foi fetch anteriormente)
      if (lastStoredQuote && lastStoredIndex >= 0 && lastStoredIndex < quoteData.length - 1) {
        if (quoteData[lastStoredIndex]?.q === lastStoredQuote) {
          setQuoteIndex(lastStoredIndex + 1); // Continuar do próximo elemento/quote
        } else {
          setQuoteIndex(0); // Caso o array de quotes seja diferente, começar do zero
        }
      } else {
        setQuoteIndex(0); // Caso nao exista nada guardado ou já tenha apresentado a lista toda, começar do zero
      }
    } catch (error) {
      console.error("Error trying to get quotes: ", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // Atualiza o localStorage sempre que quoteIndex/quotes mudarem
  useEffect(() => {
    if (quotes.length > 0 && quotes[quoteIndex]?.q) {
      localStorage.setItem("lastIndex", quoteIndex);
      localStorage.setItem("lastQuote", quotes[quoteIndex]?.q);
    }
  }, [quoteIndex, quotes]); // Só executa quando quoteIndex ou quotes mudam

  const handleQuote = () => {
    if (quoteIndex < quotes.length - 1) {
      setQuoteIndex((prevIndex) => prevIndex + 1);
    } else {
      fetchQuote(); // Se chegou à última quote, buscar novas à API
    }
  };

  return (
    <motion.section
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 0.5, delay: 0.3}}
      viewport={{ once: true }}
      id="inspiration"
      className="py-24 md:py-48 flex flex-col md:flex-row items-center md:items-stretch md:justify-start w-full h-full"
    >
      <p className="text-4xl font-semibold xl:whitespace-nowrap group">
        <span tabIndex={0} role="button" className="cursor-pointer" onClick={(e) => {e.currentTarget.blur(); handleQuote();}} onKeyDown={(e) => e.key === 'Enter' && handleQuote()}><span className="group-hover:underline group-hover:underline-offset-8 decoration-blue-200">Get</span> Inspired <TbReload className="text-blue-200 inline align-bottom group-hover:animate-spin group-focus-within:animate-spin"/></span>
      </p>

      <div className="hidden md:block w-[4px] h-[full] bg-gray-300 mx-8"></div>

      <div className="md:hidden h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8 w-[50%]"></div>

      {quotes.length > 0 ? (
        <blockquote className="self-center">
          <q className="text-lg text-white">{quotes[quoteIndex]?.q}</q>
          <address className=" text-white">— {quotes[quoteIndex]?.a}</address>
        </blockquote>
      ) : (
        <p className="self-center text-white">Loading quote...</p>
      )}
    </motion.section>
  );
};

export default Inspiration