import React from 'react'

export const TeachDetailText = ({ teachDetailSelect }) => {
    let textRight = '';
    let textLlamado = '';
    let textBajada = '';
    let textLink = '';
    let textAyuda = '';
    switch (teachDetailSelect) {
        case 'create':
            textRight = 'Crea';
            textLlamado = '¿Como te ayudamos nosotros?';
            textBajada = 'Cumple tus objetivos de crecimiento profesional con nosotros. Con tu sentido de propósito y una audencia que necesita de tus conocimientos, sólo queda disponerse para iniciar esta aventura. Después, solo tienes que decidir la temática y ya está. Tú lo decides. Organiza el contenido con las herramientas que te proporcionamos y gana ritmo paso a paso. Sin apuros ni improvisación. Sólo tu conocimiento y el uso adecuado de nuestras herramientas.';
            textAyuda = 'Ponemos a tu disposición un completo set de herramientas y funcionalidades para que logres organizar de manera adecuada los distintos contenidos y medios. Conocerás funcionalidades de fácil uso que te permitirán organizar de manera ágil lo que deseas transmitir y enseñar.';            
            textLink = '/foundesk/#/courses';
            break;
        case 'save':
            textRight = 'Graba';
            textLlamado = '¿Como te ayudamos nosotros?';
            textBajada = 'Podrás utilizar tu smartphone o una cámara DSLR. Es importante que cuentes con un buen micrófono y ya tienes todo dispuesto para comenzar. Es importante en el proceso de enseñanza los énfasis que pondrás dentro de cada tema, y por eso es importante que tu rostro y expresiones aparezcan en la grabación, a lo que puedes añadir capturas de pantalla e imágenes que consideres necesarias. Tu video debe durar menos de 2 horas de grabación, y te recomendamos que dispongas de 1 break de 10 minutos al cabo de la primera hora de grabación.';
            textAyuda = 'Ponemos a tu disposición un equipo de personas que te guiarán y se reunirán de manera online contigo. Tendrás una capacitación directa para iniciar tu proceso de confección de curso. Y adicionalmente a ello nuestro equipo revisará de manera detallada tu grabación y asesorará en todo el proceso de confección.';            
            textLink = '/foundesk/#/dashboards';
            break;
        case 'show':
            textRight = 'Publica';
            textLlamado = '¿Como te ayudamos nosotros?';
            textBajada = 'En la sesión que tendrás en tu cuenta podrás activar la publicación de tu curso una vez que el equipo de Foundesk haya aprobado la revisión. Inmediatamente tú podrás activar o desactivar la publicación. Adicionalmente a ello podrás compartir en tus redes sociales el curso que has publicado de modo de ganar promoción y valoraciones que ayudarán a que mejores tu performance y así obtener mayores ingresos con tu grabación.';
            textAyuda = 'Nuestro equipo junto contigo deciden la categoría a la que pertenecerá tu curso. De esa manera aparecerás en la lista de cursos online que disponibiliza Foundesk para todo el país y el resto de sudamerica. Todas nuestras actividades promocionales intentar mejorar las visualizaciones y suscripciones a los cursos publicados con lo cual tú esfuerzo se verá permanentemente apoyado por nuestro interés de llevar el conocimiento a todas las empresas que lo necesiten.';            
            textLink = '/foundesk/#/controller';
            break;

        default:

            break;
    }
    return (
        <>
            <div id='teach-text-bajada'>
                <div>
                    <p>
                        {textBajada}
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <p style={{fontWeight: 'bold'}}>
                        {textLlamado}
                    </p>
                </div>
            </div>
            <div id='teach-text-bajada'>
                <div>
                    <p>
                        {textAyuda}
                    </p>
                </div>
            </div>
        </>
    )
}