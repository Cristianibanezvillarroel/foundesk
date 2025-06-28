import { Container, Row, Col, Accordion, Form } from 'react-bootstrap';
import { BsFillCaretRightSquareFill, BsFolderFill } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import { userCoursesProgressGetService, userCoursesProgressCreateService, userCoursesProgressUpdateService } from '../../../services/usercoursesprogress';

const CoursesLearnNavContents = ({ sections, userId, courseId }) => {
    const [progress, setProgress] = useState({}); // { [itemId]: { _id, status } }

    //console.log('el userId es:', userId);
    //console.log('el courseId es:', courseId);
    // Obtener progreso al montar el componente
    useEffect(() => {
        const fetchProgress = async () => {
            const dataService = {
                method: 'POST',
                body: JSON.stringify({ userId: userId, courseId: courseId }),
                headers: { 'Content-Type': 'application/json' }
            };
            // Suponiendo que tu endpoint GET recibe el id del curso en la URL
            const result = await userCoursesProgressGetService(dataService);
            console.log('Progreso obtenido:', result);
            // result debe ser un array de objetos con coursessectionsitems y status
            const progressMap = {};
            result.forEach(p => {
                progressMap[p.coursessectionsitems] = { _id: p._id, status: p.status };
            });
            setProgress(progressMap);
        };
        fetchProgress();
    }, [userId, courseId]);

    // Handler para el checkbox
    const handleProgressChange = async (itemId, checked) => {
        const status = checked ? true : false;
        const data = {
            user: userId,
            courses: courseId,
            coursessectionsitems: itemId,
            status
        };
        let updatedProgress = { ...progress };

        if (progress[itemId]) {
            // Update
            await userCoursesProgressUpdateService({
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, _id: progress[itemId]._id })
            });
            updatedProgress[itemId] = { ...updatedProgress[itemId], status };
        } else {
            // Create
            const created = await userCoursesProgressCreateService({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            updatedProgress[itemId] = { _id: created._id, status: created.status };
        }
        setProgress(updatedProgress);
    }

    return (

        <div style={{ marginTop: 0 }}>
            {sections.map(
                sectionArray => sectionArray.map(
                    content =>
                        <Row key={content._id} className="mt-0">
                            <Col>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{content.name}</Accordion.Header>
                                        <Accordion.Body className="courseslearn-accordion-body">
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                {content.items.map((itemArray, idx) =>
                                                    itemArray.map((item, subIdx) =>
                                                        <li
                                                            key={item._id}
                                                            style={{
                                                                marginBottom: 8,
                                                                borderRadius: 6,
                                                                transition: 'background 0.2s',
                                                                width: '100%',
                                                                display: 'block'
                                                            }}
                                                            className="courseslearn-li-hover"
                                                        >
                                                            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                                                {/* Checkbox */}
                                                                <div style={{ margin: 12, marginTop: 12 }}>
                                                                    <Form.Check
                                                                        type="checkbox"
                                                                        checked={!!progress[item._id]?.status}
                                                                        onChange={e => handleProgressChange(item._id, e.target.checked)}
                                                                    />
                                                                </div>
                                                                {/* Info principal */}
                                                                <div style={{ margin: 12, flex: 1 }}>
                                                                    {/* Número y nombre */}
                                                                    <div style={{ fontWeight: 500 }}>
                                                                        {`${subIdx + 1}. ${item.name}`}
                                                                    </div>
                                                                    {/* Detalles debajo */}
                                                                    <div style={{ display: 'flex', marginTop: 4 }}>
                                                                        {/* Icono y minutos */}
                                                                        <div style={{ display: 'flex', alignItems: 'center', marginRight: 18 }}>
                                                                            <BsFillCaretRightSquareFill style={{ marginRight: 4 }} />
                                                                            <span style={{ fontSize: 13 }}>{item.minutes} min.</span>
                                                                        </div>
                                                                        {/* Recursos */}
                                                                        <div className="courseslearn-recursos-box">
                                                                            <BsFolderFill className="recursos-icon" />
                                                                            <span className="contents-text">Recursos</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                )}
                                            </ul>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                )
            )}
        </div>
    );
};

export default CoursesLearnNavContents;