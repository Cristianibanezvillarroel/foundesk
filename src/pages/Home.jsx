import React from 'react'
import { Rational } from '../components/home/Rational'
import { Calling } from '../components/home/Calling'
import { Detail } from '../components/home/Detail'
import { Customer } from '../components/home/Customer'
import { WhyFoundesk } from '../components/home/WhyFoundesk'
import { Contents } from '../components/home/Contents'
import { Start } from '../components/home/Start'
import { Col, Container, Row } from 'react-bootstrap'
import { CallingImg } from '../components/home/CallingImg'
import { CallingLine } from '../components/home/CallingLine'
import { RationalImg } from '../components/home/RationalImg'

export const Home = () => {
  return (
    <>
      <div className='calling'>
        <Container>
          <Row>
            <Col md={6} className='mb-4'>
              <Calling />
            </Col>
            <Col md={6} className='mb-4'>
              <CallingImg />
            </Col>
            <CallingLine />
          </Row>
        </Container>
      </div>
      <div className='rational'>
        <Container>
          <Row>
            <Col md={6} className='mb-4'>
              <Rational />
            </Col>
            <Col md={6} className='mb-4'>
              <RationalImg />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='detail'>
        <Container>
          <Row>
            <Col>
              <Detail />
            </Col>
          </Row>
        </Container>
      </div>
      <Customer />
      <WhyFoundesk />
      <Contents />
      <Start />
    </>
  )
}
