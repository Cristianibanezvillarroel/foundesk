import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useNavigate, useLocation } from 'react-router-dom';

const tabConfig = [
  { key: 'overview', label: 'Descripcion General' },
  { key: 'questions', label: 'Preguntas y Respuestas' },
  { key: 'notes', label: 'Apuntes' },
  { key: 'announcements', label: 'Anuncios' },
  { key: 'downloadable', label: 'Descargables' },
  { key: 'ratings', label: 'Valoraciones' },
];

const CoursesLearnTabs = ({ slug, id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const hash = location.hash.replace('#', '') || 'overview';

  const handleSelect = (key) => {
    navigate(`/courses/${slug}/learn/lectures/${id}#${key}`);
  };

  return (
    <Tabs
      activeKey={hash}
      onSelect={handleSelect}
      className="mb-3"
      id="courses-learn-tabs"
    >
      {tabConfig.map(tab => (
        <Tab eventKey={tab.key} title={tab.label} key={tab.key}>
          {/* Aquí puedes renderizar el contenido específico de cada solapa */}
          <div style={{ minHeight: 200 }}>
            Contenido de {tab.label}
          </div>
        </Tab>
      ))}
    </Tabs>
  );
};

export default CoursesLearnTabs;