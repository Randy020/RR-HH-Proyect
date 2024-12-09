import Image from 'next/image';

export default function SuccessCases() {
  const cases = [
    {
      title: 'Implementación de programas de capacitación',
      description:
        'Hemos colaborado con varias empresas en la implementación de programas de capacitación que han demostrado mejorar significativamente las competencias de sus equipos. Cada proyecto se adapta a las necesidades específicas del cliente para maximizar el impacto.',
      image:
        'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_clip,w_960,h_720,f_auto,q_auto/unsplashcom/photo-1648747067101-55dfb609864b',
    },
    {
      title: 'Reclutamiento para empresas de tecnología',
      description:
        'Realizamos un exitoso proyecto de reclutamiento para una empresa del sector tecnológico, donde logramos seleccionar a un grupo diverso de profesionales altamente calificados. Este proceso no solo cubrió las vacantes, sino que también mejoró la cultura organizacional.',
      image:
        'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_clip,w_960,h_720,f_auto,q_auto/unsplashcom/photo-1657448759741-700b27b372da',
    },
    {
      title: 'Evaluaciones de desempeño',
      description:
        'Desarrollamos un proyecto de evaluación de desempeño para una compañía multinacional, implementando métricas que permitieron una revisión objetiva del rendimiento de los empleados. Los resultados ayudaron a establecer planes de desarrollo personalizados que impulsaron la productividad.',
      image:
        'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_clip,w_960,h_720,f_auto,q_auto/unsplashcom/photo-1657053612229-59fd02768888',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center">
          Casos de éxito
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Resultados que hablan por sí mismos
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg rounded-2xl transform transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-full h-56 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  className="object-cover"
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
