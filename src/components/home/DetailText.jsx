import React from 'react'

export const DetailText = ({detailSelect}) => {
  let textRight = '';
  let textLlamado = '';
  let textBajada = '';
  let textLink = '';
  switch (detailSelect) {
    case 'videos':
      textRight = 'Videos on demand';
      textLlamado = 'Aprende con videos encapsulas de 15 min.';
      textBajada = 'Accede a un completo set de cursos on-demand con un sinnúmero de temáticas creadas en función de las necesidades de un emprendedor, orientado a la acción y a tus urgencias cotidianas en la administración.';
      textLink = '/foundesk/#/courses';
      break;
    case 'tutoriales':
      textRight = 'Tutoriales web y PDF';
      textLlamado = 'Revisa y descarga documentación de valor para tu administración y emprendimiento.';
      textBajada = 'Hemos confeccionado documentación de valor para que cuentes con lo necesario en la administración de tu emprendimiento. No se trata de conocimiento teórico, sino práctico.';
      textLink = '/foundesk/#/dashboards';
      break;
    case 'faq':
      textRight = 'Preguntas Frecuentes';
      textLlamado = 'Consulta la sección de preguntas frecuentes para las temáticas que necesites abordar en tu administración.';
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
