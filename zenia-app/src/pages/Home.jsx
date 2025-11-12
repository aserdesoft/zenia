import React from 'react';
import "./styles/Home.css";
import ServiceCard from '../components/common/ServiceCard.jsx';
import farmaciaImg from "../assets/farmaciaGeneric.jpg";
import comidaImg from "../assets/comidaGeneric.jpg";
import docuImg from "../assets/docuGeneric.jpg";
import funeralesImg from "../assets/funeralesGeneric.jpg";
import entImg from "../assets/esparcimientoGen.jpeg";
import HeroSection from '../components/common/HeroSection.jsx';
import heroImg from "../assets/heroSection.jpg";
function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSection
        title="Proyecto Zenia"
        description="Buscando ayudar a todas las personas a orientarse dentro del Hospital Civil Nuevo de Guadalajara, ponemos a su disposición este sitio web. Aquí encontrará información sobre diversas necesidades que llegue a tener durante la estadía suya o de sus familiares/amigos en el hospital."
        image={heroImg}
      />
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Esenciales a la hora de cuidar a un ser querido hospitalizado</h2>
          
          <div className="services-grid">
            {/* Farmacias */}
            <ServiceCard
              title="Farmacias"
              description="Podrás encontrar medicinas e insumos médicos básicos e especializados para tus seres queridos"
              image={farmaciaImg}
              link="/farmacias"
            />
            {/* Comida */}
            <ServiceCard
              title="Comida"
              description="Podrás comer para mantenerte en un estado solo para cuidar a tus familiares durante el periodo"
              image={comidaImg}
              link="/comida"
            />

            {/* Documentación */}
            <ServiceCard
              title="Documentación"
              description="Podrás encontrar y te ayudaremos a encontrar cómo requieren que proporciones documentos a los administradores del hospital"
              image={docuImg}
              link="/documentacion"
            />

            {/* Esparcimiento */}
            <ServiceCard
              title="Esparcimiento"
              description="Debes también relajarte y buscar formas de distraerte, te ponemos a tu propia salud mental"
              image={entImg}
              link="/esparcimiento"
            />

            {/* Servicios fúnebres */}
            <ServiceCard
              title="Servicios fúnebres"
              description="Te ofrece en que lugar se ocurre, durante y alguno servicio funerario para tu ser querido"
              image={funeralesImg}
              link="/funerales"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;


