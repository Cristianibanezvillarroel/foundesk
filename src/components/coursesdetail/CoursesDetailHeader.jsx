import React from 'react'
import Calificacionesimg from '/public/calificaciones.png'
import Reproduccionesimg from '/public/reproducciones.png'

export const CoursesDetailHeader = ({ arrayItems }) => {


    let scoreCursesDetail = [];

    arrayItems.forEach(item => {

        for (let i = 0; i < parseInt(item.calificacion); i++) {
            scoreCursesDetail.push(i)
        }
    });

    const textLinkRoot = '/foundesk/#/courses';
    return (
        <>
            {
                arrayItems.map(
                    content =>
                        <>
                            <div key={content.idItem} className='courses-detail-right'>
                                <div>
                                    <a className='courses-detail-right-href' href={`${textLinkRoot}/${content.categoria.categoria}`}>
                                        {content.categoria.categoria}
                                        <span>&#8594;</span>
                                    </a>
                                </div>
                                <div id='courses-detail-right-title'>
                                    <h2>{content.title}</h2>
                                </div>

                                <div className='courses-detail-score'>
                                    {scoreCursesDetail.map(item =>
                                        <img id='courses-categories-calificaciones-img' src={Calificacionesimg} />
                                    )}
                                    <img id='courses-categories-reproducciones-img' src={Reproduccionesimg} />
                                    <p>{content.estudiantes}</p>
                                </div>
                                <div className='courses-detail-header-description'>
                                    <p>{content.description}</p>
                                </div>
                                <div>
                                    <p style={{fontWeight: 'bold'}}>¿Porqué puede ser importante aprender esto?</p>
                                </div>
                                <div className='courses-detail-header-description'>
                                    <p>{content.descriptionAdd}</p>
                                </div>

                            </div>
                        </>
                )
            }
        </>
    )
}
