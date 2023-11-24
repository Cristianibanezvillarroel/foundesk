import React, { useEffect, useState } from 'react'
import { Carousel, Row } from 'react-bootstrap'
import { TemplatesCarrusel } from './TemplatesCarrusel.jsx'
import ControllerImgLaborales from '/public/controller_laborales.jpg'
import ControllerImgTributarios from '/public/dashboard_risk.png'

export const ControllerData = ({controllerMenuValue}) => {

    const controllertype = controllerMenuValue

    const textControllerTypeTributariosTitle = 'Logra una visual rápida y completa del estado de tus responsabilidades tributarias con el Servicio de Impuestos Internos.'
    const textControllerTypeLaboralesTitle = 'Logra una visual rápida y completa del estado de tus responsabilidades laborales con la dirección del trabajo.'
    const textControllerTypeLaboralDescription = 
        'Con Foundesk accedes a un completo control sobre las declaraciones en previred, la dirección del trabajo y otras responsabilidades en el ámbito de las obligaciones laborales.'
    const textControllerTypeTributariosDescription = 'Con Foundesk accedes a un completo control del estado de tus declaraciones y responsabilidades tributarias con el SII.'

    return (
        <div className='dashboard-data'>
            <h2 style={{textAlign: 'center'}}>{controllertype == 'tributarios' ? textControllerTypeTributariosTitle : textControllerTypeLaboralesTitle}</h2>
            <img src={controllertype == 'tributarios' ? ControllerImgTributarios : ControllerImgLaborales} />
            <p>{controllertype == 'tributarios' ? textControllerTypeTributariosDescription : textControllerTypeLaboralDescription}</p>
        </div>
    )
}
