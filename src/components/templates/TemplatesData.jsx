import React, { useEffect, useState } from 'react'
import { Carousel, Row } from 'react-bootstrap'
import { TemplatesCarrusel } from './TemplatesCarrusel.jsx'

export const TemplatesData = ({ templatesMenuValue, dataTemplates }) => {

    const [dataTemplatesArray, setDataTemplatesArray] = useState([])
    const ListFiltradaArray = dataTemplates.filter(List => {
        return List.id >= 0;
    })
    setDataTemplatesArray(ListFiltradaArray)

    
    const [dataTemplatesNew, setDataTemplatesNew] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 100);
    }, [])

    const getData = async () => {

        const url = 'https://api-foundesk.onrender.com/db/templates';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const responseData = await response.json()

        const ListFiltrada = responseData.filter(List => {
            return List.categoria == templatesMenuValue;
        })
        setDataTemplatesNew(ListFiltrada)
    }


    console.log(dataTemplatesArray)
    console.log(dataTemplatesNew)
    const templatetype = templatesMenuValue
    const textTemplateTypeComercial =
        'Con Foundesk accedes a plantillas que te ayudaran a formalizar todos tus compromisos comerciales, y además conocer alcances y buenas prácticas en su utilización. Un conocimiento necesario para evitar situaciones que comprometan tus flujos de caja actuales y futuros.'

    const textTemplateTypeLaboral = 'Con Foundesk accedes a plantillas de uso frecuente en la gestión de tus colaboradores, ayudándote a formalizar actividades de caracter rutinario tales como vacaciones, anexos de contrato, entre otros.'
    return (
        <>
            {dataTemplatesNew.map(content =>
                <Row>
                    <h3 style={{ textAlign: 'center' }}>{content.message}</h3>
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
