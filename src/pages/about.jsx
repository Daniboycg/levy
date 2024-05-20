import React from 'react';
import Header2 from '../components/Header2';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1F1F1F] to-[#542319] text-white">
      <Element name="home">
        <Header2 bgColor="bg-[#1F1F1F]" />
      </Element>
      <div className="container mx-auto p-4">
        <Element name="home" className="h-screen flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <h1 className="text-xl md:text-2xl">Bienvenidos,</h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Hola! Me llamo <span className="text-[#489193]">Daniel Carreón</span></h2>
            <h3 className="text-xl md:text-3xl font-bold text-white">Ingeniero de Automatización con IA</h3>
            <p className="text-sm md:text-lg">
              Ayudo a mis clientes a construir poderosas soluciones con Inteligencia Artificial.
              Comparto mi conocimiento con otros emprendedores en YouTube.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img src="/images/myphoto.png" alt="Daniel Carreón" className="rounded-lg shadow-lg mt-[-4rem] md:mt-[-8rem]" />
          </div>
        </Element>

        <Element name="what-i-do" className="h-screen flex items-center justify-center">
          <h2 className="text-4xl">Lo Que Hago Section</h2>
        </Element>

        <Element name="youtube" className="h-screen flex items-center justify-center">
          <h2 className="text-4xl">YouTube Section</h2>
        </Element>

        <Element name="portfolio" className="h-screen flex items-center justify-center">
          <h2 className="text-4xl">Portafolio Section</h2>
        </Element>

        <Element name="contact" className="h-screen flex items-center justify-center">
          <h2 className="text-4xl">Agenda Una Llamada Section</h2>
        </Element>
      </div>
    </div>
  );
};

export default About;
