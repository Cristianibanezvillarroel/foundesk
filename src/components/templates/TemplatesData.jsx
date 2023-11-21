import React from 'react'
import { ListContentsTemplates } from '../ListContentsTemplates.js'
import { Carousel, Row } from 'react-bootstrap'
import { TemplatesCarrusel } from './TemplatesCarrusel.jsx'

export const TemplatesData = ({ templatesMenuValue }) => {

    const ListFiltrada = ListContentsTemplates.filter(List => {
        return List.categoria == templatesMenuValue;
    })

    const templatetype = templatesMenuValue
    const textTemplateTypeComercial =
        `Con Foundesk accedes a plantillas que te ayudaran a formalizar todos tus compromisos comerciales, y además conocer alcances y buenas prácticas en su utilización. Un conocimiento necesario para evitar situaciones que comprometan tus flujos de caja actuales y futuros.`

    const textTemplateTypeLaboral = 'Con Foundesk accedes a plantillas de uso frecuente en la gestión de tus colaboradores, ayudándote a formalizar actividades de caracter rutinario tales como vacaciones, anexos de contrato, entre otros.'
    return (
        <>
        {ListFiltrada.map(content =>
            <Row>
                <h3 style={{textAlign: 'center'}}>{content.message}</h3> 
            <Carousel>
                {content.items.map(
                    item =>
                        <Carousel.Item>
                            <TemplatesCarrusel imagen={item.imagen} description={item.description} tipo={item.tipo} tittle={item.tittle} />
                        </Carousel.Item>
                )}
            </Carousel>
            <p id='templates-data-p'>{templatetype == 'Comercial' ? textTemplateTypeComercial : textTemplateTypeLaboral}</p>
            </Row>
            )}
            
        </>
    )
}
