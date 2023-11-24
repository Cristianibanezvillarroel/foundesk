import React from 'react'

export const DetailText = ({detailSelect}) => {
  let textRight = '';
  let textLlamado = '';
  let textBajada = '';
  let textLink = '';
  switch (detailSelect) {
    case 'curses':
      textRight = 'Cursos';
      textLlamado = 'Centraliza capacitación, aprendizaje y buenas prácticas.';
      textBajada = 'Accede a un completo set de cursos on-demand con un sinnúmero de temáticas creadas en función de las necesidades de un emprendimiento, junto con un completo set de documentación para tu refuerzo de aprendizaje.';
      textLink = '/foundesk/#/courses/Todos';
      break;
    case 'dashboard':
      textRight = 'Dashboard';
      textLlamado = 'Controla riesgos e indicadores comerciales y financieros de tu emprendimiento.';
      textBajada = 'Podrás controlar riesgos inherentes a obligaciones legales de tu empresa, tales como declaraciones de impuesto, cotizaciones previsionales, patentes, junto con un conjunto de indicadores de tus ventas y contabilidad.';
      textLink = '/foundesk/#/dashboards';
      break;
    case 'templates':
      textRight = 'Templates';
      textLlamado = 'Accede fácilmente a plantillas de uso frecuente para tu negocio.';
      textBajada = 'Conoce y descarga plantillas de uso frecuente en tu negocio, tales como plantillas de vacaciones, permisos, contratos, y un sinnúmero de plantillas utilizadas de manera frecuente en tu negocio.' ;   
      textLink = '/foundesk/#/templates';
      break;

    default:
      textRight = 'Templates';
      textLlamado = 'Accede fácilmente a plantillas de uso frecuente para tu negocio.';
      textBajada = 'Conoce y descarga plantillas de uso frecuente en tu negocio, tales como plantillas de vacaciones, permisos, contratos, y un sinnúmero de plantillas utilizadas de manera frecuente en tu negocio.';
      textLink = '/foundesk/#/templates';
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
