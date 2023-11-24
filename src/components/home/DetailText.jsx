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
      textLink = '/foundesk/#/courses';
      break;
    case 'dashboard':
      textRight = 'Dashboard';
      textLlamado = 'Controla riesgos e indicadores comerciales y financieros de tu emprendimiento.';
      textBajada = 'Podrás controlar riesgos inherentes a la gestión comercial y financiera de tu empresa, tales como evolucion de cartera de clientes, ticket promedio de compra, evolución de ventas, facturación, como así también un conjunto de indicadores financieros todo en un mismo lugar.';
      textLink = '/foundesk/#/dashboards';
      break;
    case 'controller':
      textRight = 'Controller';
      textLlamado = 'Accede fácilmente al control de riesgos tributarios y laborales.';
      textBajada = 'Podrás controlar riesgos inherentes a la gestión de obligaciones tributarias y laborales de tu empresa, tales como declaraciones de impuesto, cotizaciones previsionales, patentes, entre otros.' ;   
      textLink = '/foundesk/#/controller';
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
