import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserContext from '../context/User/UserContext'
import { Teaching } from '../components/teach/Teaching'
import { TeachingImg } from '../components/teach/TeachingImg'
import { TeachRational } from '../components/teach/TeachRational'
import { TeachRationalItems } from '../components/teach/TeachRationalItems'
import { TeachLine } from '../components/teach/TeachLine'
import { TeachDetail } from '../components/teach/TeachDetail'
import { Teacher } from '../components/teach/Teacher'
import { TeachHelp } from '../components/teach/TeachHelp'
import { TeachStart } from '../components/teach/TeachStart'


export const Teach = () => {

  const ctx = useContext(UserContext)

  return (

    <>
      {ctx.user?.name ? (
        <>
          <div>Hola Sesion autenticada de Teach</div>
        </>
      ) : (
        <>
          <div className='teaching'>
            <Container>
              <Row>
                <Col md={6} className='mb-4'>
                  <Teaching />
                </Col>
                <Col md={6} className='mb-4'>
                  <TeachingImg />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='teaching-rational'>
            <Container>
              <Row>
                <Col md={12} className='mb-4'>
                  <TeachRational />
                </Col>
              </Row>
              <Row>
                <Col md={12} className='mb-4'>
                  <TeachRationalItems />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='teach-line'>
            <Container>
              <Row>
                <Col md={12} className='mb-4'>
                  <TeachLine />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='detail'>
            <Container>
              <Row>
                <Col md={12} className='mb-4'>
                  <TeachDetail />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='customer'>
            <Container>
              <Row>
                <Col>
                  <Teacher />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='teach-help'>
            <Container>
              <Row>
                <Col>
                  <TeachHelp />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='teach-start'>
            <Container>
              <Row>
                <Col>
                  <TeachStart />
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )
      }
    </>
  )
}
