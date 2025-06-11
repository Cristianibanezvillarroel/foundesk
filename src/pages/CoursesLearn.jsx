import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CoursesLearnVideo from '../components/courseslearn/CoursesLearnVideo';
import CoursesLearnTabs from '../components/courseslearn/CoursesLearnTabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserContext from '../context/User/UserContext';
import { userGetCoursesService } from '../services/usercourses';
import { coursesService } from '../services/courses';
import { teacherService } from '../services/teacher';
import { customerTestimonialsService } from '../services/customertestimonials';
import { coursesContentCategoriesService } from '../services/coursescontentcategories';
import { coursesContentItemsService } from '../services/coursescontentitems';
import { CoursesLearnContents } from '../components/courseslearn/CoursesLearnContents';

export const CoursesLearn = () => {
    const { slug, id } = useParams();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [lecture, setLecture] = useState({
        videoUrl: '',
        // ...otros campos relevantes
    });
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [arrayItems, setArrayItems] = useState([])
    const [isAllowed, setIsAllowed] = useState(null);

    useEffect(() => {
        // Primero validamos si el usuario tiene acceso
        const validateAndFetch = async () => {
            if (!user) return;
            // Validar ownership
            const dataService = {
                method: 'POST',
                body: JSON.stringify({ userId: user._id }),
                headers: { 'Content-Type': 'application/json' }
            };
            const responseData = await userGetCoursesService(dataService);
            let enrolledIds = [];
            responseData.forEach(List => {
                if (List.items) {
                    List.items.forEach(course => {
                        enrolledIds.push(String(course.courses.idItem));
                    });
                }
            });
            const allowed = enrolledIds.includes(id);
            setIsAllowed(allowed);
            if (allowed) {
                await getDataV2();
            }
        };
        validateAndFetch();
    }, [user, id]);

    const getDataV2 = async () => {
        const dataService = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };

        const responseData = await coursesService(dataService);
        const responseDataTeacher = await teacherService(dataService);
        const responseDataCustomerTestimonials = await customerTestimonialsService(dataService);
        const responseDataCategories = await coursesContentCategoriesService(dataService);
        const responseDataItems = await coursesContentItemsService(dataService);

        const ArrayCoursesFilter = responseData.map(
            List => List.items.filter(
                item => item.name == slug
            )
        );

        let ListItems = [];
        let ListContentCategory = [];
        ArrayCoursesFilter[0].forEach((courses, index) => {
            let dataTeacher = responseDataTeacher.map(
                List => List.items.filter(
                    item => item._id == courses.teacher
                )
            );
            let dataTestimonials = responseDataCustomerTestimonials.map(
                List => List.items.filter(
                    item => item.courses._id == courses._id
                )
            );
            let ArrayCoursesContentCategoriesFilter = responseDataCategories.map(
                List => List.items.filter(
                    item => item.courses._id == courses._id
                )
            );
            ArrayCoursesContentCategoriesFilter[0].forEach((category, numeral) => {
                let dataContent = responseDataItems.map(
                    List => List.items.filter(
                        item => item.coursescontentcategories._id == category._id
                    )
                )
                ListContentCategory[numeral] = {
                    ...category, items: dataContent
                }
            })

            ListItems[index] = {
                ...courses,
                teacher: dataTeacher,
                testimonials: dataTestimonials,
                sections: ListContentCategory
            }

        });

        setArrayItems(ListItems);
    }

    if (isAllowed === false) {
        return (
            <div style={{ color: 'red', textAlign: 'center', marginTop: 40 }}>
                No tienes acceso a este curso.
            </div>
        );
    }
    if (isAllowed === null) {
        return null; // o un spinner de carga
    }

    return (
        <div>
            <Row>
                <Col md={8}>
                    <CoursesLearnVideo videoUrl={lecture.videoUrl} />
                    <CoursesLearnTabs slug={slug} id={id} />
                </Col>
                <Col md={4}>
                    <CoursesLearnContents content={arrayItems} />
                </Col>
            </Row>
        </div>
    );
};