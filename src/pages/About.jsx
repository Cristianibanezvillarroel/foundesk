import React from 'react'
import AboutPrincipalImg from '/public/about.webp'
import AboutCEOImg from '/public/aboutCEO.jpg'
import { Button, Container, Row } from 'react-bootstrap'

export const About = () => {

  const aboutCall = 'Somos la plataforma creada para la productividad del emprendedor en Latinoamerica.'
  const aboutBajada = 'Foundesk es el software de aprendizaje que conecta las necesidades de crecimiento de los emprendedores con sus capacidades. La plataforma ofrece soluciones de aprendizaje, gestion y recursos en un solo lugar, ayudando a elevar la productividad de cada founders. Todo esto a través de soporte personalizado y con la mejor usabilidad.'
  const aboutHistory =
    'Fundé mi primera empresa en el año 2010. Aun cuando tengo formación de negocios, tropecé durante muchos años con problemas en ámbitos de conocimiento para los cuales no me había preparado. Así tuve que pagar multas por atrasos en el pago de impuestos, llenar formularios en papel para distintas instituciones previsionales porque no coordiné debidamente en una oportunidad con el contador el pago de las imposiciones'

  return (
    <>
      <Container>
        <h2 style={{ textAlign: 'center', marginTop: '5%' }}>{aboutCall}</h2>
        <p className='about-bajada-p'>{aboutBajada}</p>
        <div >
          <img className='about-img-principal' src={AboutPrincipalImg} />
        </div>
        <h6 style={{ color: 'blue', fontWeight: 'bold', textAlign: 'center' }}>Historia</h6>
        <h4 style={{ fontWeight: 'bold', textAlign: 'center' }}>Asi nació Foundesk</h4>
        <div className='about-ceo-data'>
          <img className='about-img-ceo' src={AboutCEOImg} />
        </div>
        <div className='about-ceo-data'>Cristian Ibanez Villarroel</div>
        <div className='about-ceo-data'>CEO</div>
        <div className='about-bajada-p'>{aboutHistory}</div>
        <div className='about-bottomline'>
          <h2>Empieza a construir capacidades para ser más competitivo hoy</h2>
          <div>Prueba durante 7 días nuestra plataforma</div>
          <Button>Solicita una demo</Button>
        </div>
      </Container>
    </>
  )
}
