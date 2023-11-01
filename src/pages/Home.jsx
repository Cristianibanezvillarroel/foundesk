import React from 'react'
import { Rational } from '../components/home/Rational'
import { Calling } from '../components/home/Calling'
import { RationalDetail } from '../components/home/RationalDetail'
import { Customer } from '../components/home/Customer'
import { WhyFoundesk } from '../components/home/WhyFoundesk'
import { Contents } from '../components/home/Contents'
import { Start } from '../components/home/Start'
import { Col, Container, Row } from 'react-bootstrap'
import { CallingImg } from '../components/home/CallingImg'
import { CallingLine } from '../components/home/CallingLine'

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
        <Rational />
        <RationalDetail />
        <Customer />
        <WhyFoundesk />
        <Contents />
        <Start />
    </>
  )
}
