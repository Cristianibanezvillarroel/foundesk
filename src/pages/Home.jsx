import React, { useContext, useEffect } from 'react'
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
import { StartImg } from '../components/home/StartImg'
import UserContext from '../context/User/UserContext'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const ctx = useContext(UserContext)
  const { user } = ctx
  const navigate = useNavigate()
  const navigateHomeUser = () => {
      navigate('/about')
  }

  useEffect(() => {

    const navigateSession = () => {
      if(user) {
        navigateHomeUser()
      }
    }

    navigateSession()

  }, [])

  
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
      <div className='customer'>
        <Container>
          <Row>
            <Col>
              <Customer />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='whyfoundesk'>
        <Container>
          <Row>
            <Col>
              <WhyFoundesk />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='contents'>
        <Container>
          <Row>
            <Col>
              <Contents />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='start'>
        <Container>
          <Row>
            <Col md={6} className='mb-4'>
              <Start />
            </Col>
            <Col md={6} className='mb-4'>
              <StartImg />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
