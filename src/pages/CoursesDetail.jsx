import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Col, Container, Modal, Row, Spinner } from 'react-bootstrap'
import { coursesService } from '../services/courses'
import { CoursesDetailSideBar } from '../components/coursesdetail/CoursesDetailSideBar'
import { CoursesDetailHeader } from '../components/coursesdetail/CoursesDetailHeader'
import { CoursesDetailLearn } from '../components/coursesdetail/CoursesDetailLearn'
import { CoursesDetailContents } from '../components/coursesdetail/CoursesDetailContents'
import { CoursesDetailTeachers } from '../components/coursesdetail/CoursesDetailTeachers'
import { CoursesDetailTestimonials } from '../components/coursesdetail/CoursesDetailTestimonials'
import { CoursesDetailMoreTeacherCoursesCard } from '../components/coursesdetail/CoursesDetailMoreTeacherCouresCard'
import { coursesLearnItemsService } from '../services/courseslearnitems'
import { coursesSectionsService } from '../services/coursessections'
import { coursesSectionsItemsService } from '../services/coursessectionsitems'
import { teacherService } from '../services/teacher'
import { customerTestimonialsService } from '../services/customertestimonials'

export const CoursesDetail = () => {

  const { slug } = useParams()
  const [arrayItems, setArrayItems] = useState([])
  const [arrayItems1, setArrayItems1] = useState([])
  const [arrayItems2, setArrayItems2] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation();
  const isEnrolled = location.state?.isEnrolled || false; // Check if the course is enrolled  

  useEffect(() => {
    setTimeout(() => {
      getDataV1()
    }, 10);
  }, [])

  const getDataV1 = async () => {

    const dataService = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const responseData = await coursesService(dataService)

    const ArrayCoursesFilter = responseData.map(
      List => List.items.filter(
        item => item.name == slug
      )
    )

    const responseDataLearn = await coursesLearnItemsService(dataService)
    const responseDataCategories = await coursesSectionsService(dataService)
    const responseDataItems = await coursesSectionsItemsService(dataService)
    const responseDataTeacher = await teacherService(dataService)
    const responseDataCustomerTestimonials = await customerTestimonialsService(dataService)

    let ListItems = []
    ArrayCoursesFilter[0].forEach((element, indice) => {
      const ArrayCoursesTeacherFilter = responseData.map(
        List => List.items.filter(
          item => item.teacher == element.teacher
        )
      )

      ArrayCoursesTeacherFilter[0].forEach((courses, index) => {
        let ListContentCategory = []
        let dataLearn = responseDataLearn.map(
          List => List.items.filter(
            item => String(item.courses._id) === String(courses._id)
          )
        )

        let dataTeacher = responseDataTeacher.map(
          List => List.items.filter(
            item => item._id == courses.teacher._id
          )
        )
        let dataTestimonials = responseDataCustomerTestimonials.map(
          List => List.items.filter(
            item => item.courses._id == courses._id
          )
        )
        let ArrayCoursesContentCategoriesFilter = responseDataCategories.map(
          List => List.items.filter(
            item => item.courses._id == courses._id
          )
        )
        ArrayCoursesContentCategoriesFilter[0].forEach((category, numeral) => {
          let dataContent = responseDataItems.map(
            List => List.items.filter(
              item => item.coursessections._id == category._id
            )
          )
          ListContentCategory[numeral] = {
            ...category, items: dataContent
          }
        })

        ListItems[index] = {
          ...courses, learn: dataLearn, sections: ListContentCategory, teacher: dataTeacher, testimonials: dataTestimonials
        }

        const ArrayCoursesFilter1 = ListItems.filter(
          item => {
            return item.name == slug
          }
        )

        const ArrayCoursesFilter2 = ListItems.filter(
          item => {
            return item.name != slug
          }
        )

        setArrayItems1(ArrayCoursesFilter1)
        setArrayItems2(ArrayCoursesFilter2)
      })

    })
    setArrayItems(ListItems)
    setIsLoading(false)
  }

  const ListContent = (inputValue) => {
    const ArrayContentCoursesFilter1 = arrayItems.filter(
      item => {
        return item.idItem == inputValue
      }
    )

    const ArrayContentCoursesFilter2 = arrayItems.filter(
      item => {
        return item.idItem != inputValue
      }
    )
    setArrayItems1(ArrayContentCoursesFilter1)
    setArrayItems2(ArrayContentCoursesFilter2)
  }

  return (
    <>
      <Container>
        {isLoading ? (
          <Row>
            <Col>
              <Spinner animation="border" style={{ textAlign: 'center' }} />
            </Col>
          </Row>
        ) : (
          <>
            <Row style={{ backgroundColor: 'blue' }}>
              <Col style={{ textAlign: 'center' }} md={6}>
                <CoursesDetailSideBar arrayItems={arrayItems1} isEnrolled={isEnrolled}/>
              </Col>
              <Col md={6} >
                <CoursesDetailHeader arrayItems={arrayItems1} />
              </Col>
            </Row>
            <Row>
              <Col>
                <CoursesDetailLearn content={arrayItems1} />
                <CoursesDetailContents content={arrayItems1} />
                <CoursesDetailTeachers content={arrayItems1} />
                <CoursesDetailTestimonials content={arrayItems1} />
                <CoursesDetailMoreTeacherCoursesCard content={arrayItems2} ListContent={ListContent} />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  )
}
