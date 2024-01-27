import React from 'react'
import Calificacionesimg from '/public/calificaciones.png'

export const CoursesDetailHeader = ({ arrayItems }) => {

    let { cantidad, categoria, resena, description, imagenicono, imagenpublicidad, calificacion, reproducciones } = arrayItems
    const scoreCurses = []
    for (let i = 0; i < parseInt(calificacion); i++) {
        scoreCurses.push(i)
    }

    const textLinkRoot = '/foundesk/#/courses';
    return (
        <>
            {
                arrayItems.map(
                    content =>
                        <>
                            <div id='detail-text-right' >
                                <a href={`${textLinkRoot}/${content.categoria}`}>
                                    {content.categoria}
                                    <span>&#8594;</span>
                                </a>
                            </div>
                            <div>
                                <h3>{content.title}</h3>
                            </div>
                            <div>
                                <h5>{content.description}</h5>
                            </div>
                            <div>
                                {scoreCurses.map(item =>
                                    <img id='courses-categories-calificaciones-img' src={Calificacionesimg} />
                                )}
                            </div>
                            <div>
                                <h5>{content.calificacion}</h5>
                            </div>
                        </>
                )
            }
        </>
    )
}
