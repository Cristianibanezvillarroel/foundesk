import React from 'react'

export const DetailText = ({detailSelect}) => {
  let textRight = '';
  let textLlamado = '';
  let textBajada = '';
  let textLink = '';
  switch (detailSelect) {
    case 'aprende':
      textRight = 'Cursos';
      textLlamado = 'Aprende habilidades y nuevas prácticas en la empresa.';
      textBajada = 'Accede a un completo set de cursos on-demand con un sinnúmero de temáticas creadas en función de las necesidades de la empresa, junto con un completo set de documentación para tu refuerzo de aprendizaje.';
      textLink = '/foundesk/#/courses';
      break;
    case 'ensena':
      textRight = 'Enseña';
      textLlamado = 'Comparte tus habilidades como experto y aumenta tus ingresos.';
      textBajada = 'Crea tu cuenta y accede a un completo set de herramientas que te ayudaran a crear y publicar tus cursos que deseas compartir. Nosotros te apoyamos con todo ese proceso.';
      textLink = '/foundesk/#/dashboards';
      break;
    case 'capacita':
      textRight = 'Capacita';
      textLlamado = 'Utiliza Foundesk para capacitar a tus colaboradores y clientes.';
      textBajada = 'Crea tu cuenta y accede a un completo set de herramientas para subir y compartir tus videos y cursos de capacitacion mediante un simple Link.' ;   
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
