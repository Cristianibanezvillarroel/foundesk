import React from 'react'

export const TrainDetailText = ({ trainDetailSelect }) => {
    let textRight = '';
    let textLlamado = '';
    let textBajada = '';
    let textLink = '';
    let textAyuda = '';
    switch (trainDetailSelect) {
        case 'create':
            textRight = 'Crea';
            textLlamado = '¿Como te ayudamos nosotros?';
            textBajada = 'Capacitar mejora el rendimiento y la productividad. Tuya, la de tus colaboradores y clientes. Ahora sí puedes realizar grabaciones y desarrollar contenido dirigido de manera rápida y eficaz. Construyes el contenido y defines los recursos que utilizarás como complemento, tales como documentos en PDF o vistas HTML. Sólo debes seguir los pasos que te indicamos para así completar tu carpeta de contenidos para capacitación. Tú defines todo.';
            textAyuda = 'Hemos logrado construir un proceso ágil y sencillo. Siguiendo sus pasos lograrás crear videos de impacto para capacitar a tu audiencia. Y no sólo eso. Complementarlo con una estructura de contenido basada en Diseño Instruccional que te sorprenderá. Lograrás crear un sistema de contenidos que agregará valor real para el aprendizaje y dominio de lo que desees transmitir.';            
            textLink = '/foundesk/#/courses';
            break;
        case 'save':
            textRight = 'Graba';
            textLlamado = '¿Como te ayudamos nosotros?';
            textBajada = 'Podrás utilizar tu smartphone o una cámara DSLR. Es importante que cuentes con un buen micrófono y ya tienes todo dispuesto para comenzar. Es importante en el proceso de enseñanza los énfasis que pondrás en tu curso de capacitación, y por eso es importante que tu rostro y expresiones aparezcan en la grabación. Tú decides. A lo que puedes añadir capturas de pantalla e imágenes que consideres necesarias. Te sugerimos que tu video de capacitación no dure más de 40 minutos.';
            textAyuda = 'Ponemos a tu disposición un equipo de personas que te guiarán y se reunirán de manera online contigo. Tendrás una capacitación directa para iniciar tu proceso de confección de curso. Y adicionalmente a ello nuestro equipo revisará de manera detallada tu grabación y asesorará en todo el proceso de confección.';            
            textLink = '/foundesk/#/dashboards';
            break;
        case 'show':
            textRight = 'Publica';
            textLlamado = '¿Como te ayudamos nosotros?';
            textBajada = 'Hemos logrado algo que seguramente ya buscabas. Al finalizar tu grabación y contenidos, y dar por "terminado" tu curso de capacitación, podrás compartirlo de manera simple a través de un link, que podrás copiar o sencillamente compartir desde tu Smartphone. Allí debes escribir el correo del destinatario. Ocuparás un contacto del total de contactos que contenga tu plan. Enviaremos un "pin" a tu contacto cada vez que quiera visualizar el contenido de tu curso. La caducidad será de 200 días para que tu contacto pueda aprender de tu curso.';
            textAyuda = 'Nos interesa que tú estés al tanto de que cuando tus contactos aprenden con tu curso. Por eso te informamos con una notificación en tu correo electrónico de las oportunidades en que tu contacto visualiza tu video y cuanto tiempo permanece allí. Adicionalmente te notificamos por algún comentario o pregunta que haya registrado tu contacto en la sesión de capacitación. Y para ayudarte aún más, hemos dispuesto un espacio para que puedas activar preguntas frecuentes a tu curso.';            
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