import React from 'react';
import Image from 'next/image';

const RecursosHumanos = () => {
  const sections = [
    {
      title: "Optimización y Eficiencia en la Gestión del Talento",
      image: "https://i.pinimg.com/736x/3a/a4/fa/3aa4fa2659c5f7247ff830dcec0b92b6.jpg",
      content: [
        "Encontramos al candidato ideal para tu empresa.",
        "Realizamos un análisis detallado de las habilidades y competencias de los candidatos, asegurando que las habilidades requeridas coincidan con las expectativas del puesto.",
        "Utilizamos diversas herramientas de evaluación, como entrevistas estructuradas y pruebas psicométricas, para medir la idoneidad de los candidatos.",
        "Proporcionamos un informe exhaustivo que facilita la comparación y permite tomar decisiones basadas en datos concretos.",
      ],
    },
    {
      title: "Desarrollo Profesional Continuo",
      image: "https://i.pinimg.com/736x/48/95/af/4895afdfb1a3e474967be5cf0fb623e3.jpg",
      content: [
        "Desarrollamos programas de capacitación adaptados a las necesidades específicas de cada empresa.",
        "Utilizamos metodologías de enseñanza modernas combinando teoría y práctica.",
        "Realizamos evaluaciones al finalizar cada programa de capacitación para medir el impacto en el desempeño laboral.",
      ],
    },
    {
      title: "Evaluación Estratégica de Puestos",
      image: "https://i.pinimg.com/736x/18/38/fe/1838fe5a88da13e3073021cefd2ffde2.jpg",
      content: [
        "Llevamos a cabo un análisis exhaustivo de las funciones y responsabilidades de cada puesto dentro de la organización.",
        "Aplicamos metodologías de clasificación de puestos considerando factores como la complejidad y responsabilidad.",
        "Entregamos informes detallados que describen el proceso de valoración realizado y las recomendaciones pertinentes.",
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8">Nuestros Servicios de Recursos Humanos</h2>
      {sections.map((section, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
          <div className="flex flex-col md:flex-row items-center">
          <Image
  src={section.image}
  alt={section.title}
  width={600} // Ajusta según tu diseño
  height={400} // Ajusta según tu diseño
  className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6"
/>
            <ul className="list-disc pl-6 text-lg">
              {section.content.map((text, i) => (
                <li key={i} className="mb-2">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecursosHumanos;
