import React from 'react'

export const TrainDetailText = ({ trainDetailSelect }) => {
    let textRight = '';
    let textLlamado = '';
    let textBajada = '';
    let textLink = '';
    let textAyuda = '';
    switch (trainDetailSelect) {
        case 'porque':
            textRight = 'Porqué';
            textLlamado = '¿Como te ayudamos nosotros?';
            textBajada = 'Quizás antes de la era de la digitalización, la administración estaba reservada para las medianas y grandes empresas. Ellas disponían de los recursos y el personal para llevar a cabo las tareas manuales exigidas para llevar a cabo una adecuada administración. Esto cambió. Con la digitalización no sólo ahora sí es posible lograr administrar tu emprendimiento utilizando software de precio y funcionalidades accesibles, sino que se torna imperativo el hacerlo. Esto por una simple razón: la digitalización de la facturación electrónica ahora permite al Servicio de Impuestos Internos bloquear tu posibilidad de facturar si no cumples con tus obligaciones tributarias mensuales. Y algo similar ocurre con las Instituciones previsionales.';
            textAyuda = 'Hemos logrado construir un proceso ágil y sencillo. Siguiendo un proceso de aprendizaje paso a paso lograrás adquirir los conocimientos necesarios para lograr control sobre esos aspectos relevantes de tu administración. Y no sólo eso. Complementarlo con una estructura de contenido basada en Diseño Instruccional que te sorprenderá. Lograrás en poco tiempo aprender contenidos que agregará valor real para el aprendizaje y dominio de lo que necesitas controlar para mitigar el incumplimiento que ahora exige la era digital donde todo está cruzado.';            
            textLink = '/foundesk/#/courses';
            break;
        case 'como':
            textRight = 'Cómo';
            textLlamado = '¿Como te ayudamos nosotros?';
            textBajada = 'Podrás utilizar tu smartphone o tu computador para acceder a todo el contenido digital, tanto de los videos explicativos como así también de sus tutoriales y documentación en PDF. No necesitas disponer de nada especial que hoy no tengas. Sólo el deseo de aprender algo que sabes que es importante para ir avanzando con tu proyecto. Los videos explicativos están creados con la debida profundidad que necesitas como emprendedor. No entramos en el detalle académico detrás de los contenidos. El foco de cada curso es eminentemente práctico, orientado a la acción que todo emprendedor necesita.';
            textAyuda = 'Cada instructor ha separado el curso en las temáticas propias que exige la cotidianeidad del tema en cuestión. Esto te ayudará para encapsular el conocimiento adquirido en una tarea específica que tú o alguien de tu equipo debe llevar a cabo. Tendrás una capacitación directa para conocer y operar el proceso de ejecución de dicha tarea. Cómo varias tareas involucran la utilización de un software de administración y facturación hemos creado una alianza con Facturaenlinea, empresa que lleva más de 15 años en el mercado chileno con facturación electrónica y de las pioneras en ofrecer una solución de administración de precio accesible para la micro y pequeña empresa.';            
            textLink = '/foundesk/#/dashboards';
            break;
        case 'cuando':
            textRight = 'Cuando';
            textLlamado = '¿Como te ayudamos nosotros?';
            textBajada = 'Hemos logrado algo que seguramente ya buscabas. Cursos on-demand orientados a la acción para las tareas propias de la administración de tu emprendimiento. En Foundesk el curso dura 2 horas o menos, y no 3 o 6 meses. Hemos logrado compactar lo que necesitas con contenido de calidad en un corto tiempo de aprendizaje. Porque es orientado a la acción. No es académico. Es por ello mismo que cada curso completo se ha fragmentado en cápsulas de entre 10 a 15 minutos con objeto de que puedas aprovechar esos minutos disponibles que tengas para tu aprendizaje.';
            textAyuda = 'Nos interesa que tú estés al tanto de como opera cada responsabilidad administrativa que envuelve tu emprendimiento. Nuestro interés está en que seas capaz de conocer el mecanismo de cada proceso y como se lleva a cabo. Por eso hemos dispuesto un espacio para que puedas activar preguntas frecuentes a tu curso. Ya desde el inicio cuentas con un set list amplio que ha sido previamente seleccionado para que puedas revisar contenido orientado a la acción. ';            
            textLink = '/foundesk/#/controller';
            break;

        default:

            break;
    }
    return (
        <>
            <div id='train-text-bajada'>
                <p>
                    {textBajada}
                </p>
            </div>
            <div>
                <div style={{fontWeight: 'bold'}}>
                    <p>
                        {textLlamado}
                    </p>
                </div>
            </div>
            <div id='train-text-bajada'>
                <div>
                    <p>
                        {textAyuda}
                    </p>
                </div>
            </div>
        </>
    )
}