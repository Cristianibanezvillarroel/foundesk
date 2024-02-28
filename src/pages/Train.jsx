import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserContext from '../context/User/UserContext'
import { Training } from '../components/train/Training'
import { TrainingImg } from '../components/train/TrainingImg'
import { TrainRational } from '../components/train/TrainRational'
import { TrainRationalItems } from '../components/train/TrainRationalItems'
import { TrainLine } from '../components/train/TrainLine'
import { TrainDetail } from '../components/train/TrainDetail'
import { Trainer } from '../components/train/Trainer'
import { TrainHelp } from '../components/train/TrainHelp'
import { TrainStart } from '../components/train/TrainStart'


export const Train = () => {

  const ctx = useContext(UserContext)

  return (

    <>
      {ctx.user?.name ? (
        <>
          <div>Hola Sesion autenticada de Train</div>
        </>
      ) : (
        <>
          <div className='training'>
            <Container>
              <Row>
                <Col md={6} className='mb-4'>
                  <Training />
                </Col>
                <Col md={6} className='mb-4'>
                  <TrainingImg />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='teaching-rational'>
            <Container>
              <Row>
                <Col md={12} className='mb-4'>
                  <TrainRational />
                </Col>
              </Row>
              <Row>
                <Col md={12} className='mb-4'>
                  <TrainRationalItems />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='train-line'>
            <Container>
              <Row>
                <Col md={12} className='mb-4'>
                  <TrainLine />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='detail'>
            <Container>
              <Row>
                <Col md={12} className='mb-4'>
                  <TrainDetail />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='customer'>
            <Container>
              <Row>
                <Col>
                  <Trainer />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='teach-help'>
            <Container>
              <Row>
                <Col>
                  <TrainHelp />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='teach-start'>
            <Container>
              <Row>
                <Col>
                  <TrainStart />
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