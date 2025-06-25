import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CoursesLearnVideo from '../components/courseslearn/CoursesLearnVideo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserContext from '../context/User/UserContext';
import { userGetCoursesService } from '../services/usercourses';
import { coursesService } from '../services/courses';
import { teacherService } from '../services/teacher';
import { customerTestimonialsService } from '../services/customertestimonials';
import { coursesSectionsService } from '../services/coursessections';
import { coursesSectionsItemsService } from '../services/coursessectionsitems';
import { CoursesLearnNavUp } from '../components/courseslearn/CoursesLearnNavUp';
import { CoursesLearnNav } from '../components/courseslearn/CoursesLearnNav';
import { teacherAnnouncementsService } from '../services/teacherannouncements';
import NavBarShort from '../components/NavBarShort';

export const CoursesLearn = () => {

    // Custom hook debe ir fuera del componente
    const useWindowWidth = () => {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
        useEffect(() => {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
        return windowWidth;
    };

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

        let thisCourse = [];
        const responseData = await coursesService(dataService);
        const ArrayCoursesFilter = responseData.map(
            List => List.items.filter(
                item => item.name == slug
            )
        );

        ArrayCoursesFilter[0].forEach(courses => {
            thisCourse.push(String(courses._id));
        });
        
        const dataServiceCourses = {
            method: 'POST',
            body: JSON.stringify({ courseId: thisCourse[0] }),
            headers: { 'Content-Type': 'application/json' }
        };

        const responseDataTeacherAnnouncements = await teacherAnnouncementsService(dataServiceCourses);
        
        const responseDataTeacher = await teacherService(dataService);
        const responseDataCustomerTestimonials = await customerTestimonialsService(dataService);
        const responseDataCategories = await coursesSectionsService(dataService);
        const responseDataItems = await coursesSectionsItemsService(dataService);

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
                        item => item.coursessections._id == category._id
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
                sections: ListContentCategory,
                announcements: responseDataTeacherAnnouncements.announcements
            }

        });

        setArrayItems(ListItems);
    }

    const width = useWindowWidth();
    const isMobile = width <= 768;

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
            <NavBarShort courseName={arrayItems[0]?.title || 'Curso'} courseSlug={slug} />
            {isMobile ? (
                <Row>
                    <Col md={12}>
                        <CoursesLearnVideo videoUrl={lecture.videoUrl} />
                        <CoursesLearnNav content={arrayItems} slug={slug} id={id} isMobile={isMobile}/>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <Col md={8}>
                        <CoursesLearnVideo videoUrl={lecture.videoUrl} />
                        <CoursesLearnNav content={arrayItems} slug={slug} id={id} isMobile={isMobile}/>
                    </Col>
                    <Col md={4}>
                        <CoursesLearnNavUp content={arrayItems} />
                    </Col>
                </Row>
            )}
        </div>
    );
};