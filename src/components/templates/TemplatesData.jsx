import React, { useEffect, useState } from 'react'
import { Carousel, Row } from 'react-bootstrap'
import { TemplatesCarrusel } from './TemplatesCarrusel.jsx'

export const TemplatesData = ({ templatesCategory, data }) => {

    const [dataItems, setDataItems] = useState([])
    const [dataCategory, setDataCategory] = useState()
    console.log(data)

    let arrayItems = []
    let category = []
    let itera1 = Object.entries(data)
        .forEach(([key, value]) => {

            let itera2 = Object.entries(value)
                .forEach(([key2, value2]) => {

                    category.push(value2.categoria)
                    let items = value2.items

                    let itera3 = Object.entries(items)
                        .forEach(([key3, value3]) => {

                            arrayItems.push(value3)

                        })

                })

        });

    console.log(arrayItems)
    console.log(category)
    /*const [dataTemplates, setDataTemplates] = useState([])

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
            return List.categoria == templatesCategory;
        })
        setDataTemplates(ListFiltrada)
    }*/


    const templatetype = category
    const textTemplateTypeComercial =
        'Con Foundesk accedes a plantillas que te ayudaran a formalizar todos tus compromisos comerciales, y además conocer alcances y buenas prácticas en su utilización. Un conocimiento necesario para evitar situaciones que comprometan tus flujos de caja actuales y futuros.'

    const textTemplateTypeLaboral = 'Con Foundesk accedes a plantillas de uso frecuente en la gestión de tus colaboradores, ayudándote a formalizar actividades de caracter rutinario tales como vacaciones, anexos de contrato, entre otros.'
    return (
        <>
            {arrayItems.map(content =>
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
