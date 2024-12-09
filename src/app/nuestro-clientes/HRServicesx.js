import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      title: 'Transformación Organizacional',
      description:
        'Gracias a OFP Consulting, logramos una transformación significativa en nuestros procesos de selección, lo que resultó en un equipo más cohesionado y productivo.',
      image: '/img/photo-1616769364512-1e50e8266907.webp',
    },
    {
      title: 'Capacitación Efectiva',
      description:
        'Las capacitaciones ofrecidas han sido clave para el desarrollo de nuestras habilidades internas, elevando el rendimiento general de la empresa.',
      image: '/img/photo-1605664041954-fc778c387c02.webp',
    },
    {
      title: 'Asesoría de Confianza',
      description:
        'La asesoría recibida fue profesional y adaptada a nuestras necesidades, lo que nos permitió tomar decisiones informadas y estratégicas.',
      image: '/img/photo-1624797432677-6f803a98acb3.webp',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Historias de éxito y satisfacción que reflejan nuestro compromiso con la calidad.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg rounded-2xl transform transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-28 h-28 mx-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-800 text-center">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
