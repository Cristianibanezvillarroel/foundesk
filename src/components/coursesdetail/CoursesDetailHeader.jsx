import React from 'react'
import Calificacionesimg from '/public/calificaciones.png'
import Reproduccionesimg from '/public/reproducciones.png'

export const CoursesDetailHeader = ({ arrayItems }) => {


    let scoreCursesDetail = [];

    arrayItems.forEach(item => {

        let ratingValue = typeof item.rating === 'object' && item.rating.$numberDecimal
        ? parseFloat(item.rating.$numberDecimal)
        : Number(item.rating);

        for (let i = 0; i < parseInt(ratingValue); i++) {
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
                                    <a className='courses-detail-right-href' href={`${textLinkRoot}/${content.categorie.categorie}`}>
                                        {content.categorie.categorie}
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
                                    <p>{content.students}</p>
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
