import React from 'react'

export const DetailText = ({detailSelect}) => {
  let textRight = '';
  let textLlamado = '';
  let textBajada = '';
  let textLink = '';
  switch (detailSelect) {
    case 'videos':
      textRight = 'Videos on-demand';
      textLlamado = 'Aprende con videos explicativos creados por hacedores.';
      textBajada = 'Cada curso consta de un conjunto de 8 a 10 videos que vienen en cápsulas de 15 minutos cada uno. Quién crea el curso es un profesional que ejecuta y conoce la tarea que enseña. Esto nos permite ofrecerte cursos prácticos orientados de verdad a tus necesidades en la administración de tu emprendimiento.';
      textLink = '/foundesk/#/courses';
      break;
    case 'tutoriales':
      textRight = 'Tutoriales y PDF';
      textLlamado = 'Repasa y descarga documentación de valor para la administración de tu emprendimiento.';
      textBajada = 'Hemos confeccionado documentación de valor para que cuentes con lo necesario en la administración de tu emprendimiento. La podrás revisar en formato web y también en descargables en PDF. Se trata de documentación confeccionada por el instructor y también documentación adicional relevante para el curso.';
      textLink = '/foundesk/#/dashboards';
      break;
    case 'faq':
      textRight = 'Preguntas Frecuentes';
      textLlamado = 'Accederás a un completo set list que transfiere experiencia valiosa para un emprendedor.';
      textBajada = 'Accederás a un conjunto de información valiosa relacionada con las casuísticas propias que todo emprendedor enfrenta en la administración de su negocio.' ;   
      textLink = '/foundesk/#/controller';
      break;

    default:

      break;
  }
  return (
    <>
      <div>
        <div id='detail-text-right' >
          <a href={textLink}>
          {textRight}
          <span>&#8594;</span>
          </a>
        </div>
        <div id='detail-text-llamado'>
          <p>
            {textLlamado}
            </p>
        </div>
        <div id='detail-text-bajada'>
          <p>
            {textBajada}
            </p>
        </div>
      </div>
    </>
  )
}
