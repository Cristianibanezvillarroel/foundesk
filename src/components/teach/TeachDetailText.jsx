import React from 'react'

export const TeachDetailText = ({ teachDetailSelect }) => {
    let textRight = '';
    let textLlamado = '';
    let textBajada = '';
    let textLink = '';
    switch (teachDetailSelect) {
        case 'create':
            textRight = 'Crea';
            textLlamado = 'Crea tu video con nuestra ayuda.';
            textBajada = 'Nosotros te ayudamos.';
            textLink = '/foundesk/#/courses';
            break;
        case 'save':
            textRight = 'Graba';
            textLlamado = 'Graba tu video de manera sencilla.';
            textBajada = 'Te proporcionamos las indicaciones necesarias para que puedas realizar la grabación de tu video temático.';
            textLink = '/foundesk/#/dashboards';
            break;
        case 'show':
            textRight = 'Publica';
            textLlamado = 'Publica tu curso de manera simple.';
            textBajada = 'Mediante simples pasos tendras publicado tu curso y aportaras al mundo.';
            textLink = '/foundesk/#/controller';
            break;

        default:

            break;
    }
    return (
        <>
            <div id='detail-text-bajada'>
                <p>
                    {textBajada}
                </p>
            </div>
            <div>
                <div id='detail-text-llamado'>
                    <p>
                        {textLlamado}
                    </p>
                </div>
            </div>
        </>
    )
}