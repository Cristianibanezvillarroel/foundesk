import { Container, Row, Col, Accordion, Form } from 'react-bootstrap';
import { BsFillCaretRightSquareFill, BsFolderFill } from "react-icons/bs";

const CoursesLearnNavContents = ({ sections }) => (
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
                                                            <div style={{ margin: 12, marginTop: 12}}>
                                                                <Form.Check type="checkbox" />
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

export default CoursesLearnNavContents;