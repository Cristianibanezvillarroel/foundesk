import { useRef, useState, useEffect } from 'react';
import { Nav, Button, Container } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'; // Para los iconos de flecha
import { useLocation, useNavigate } from 'react-router-dom';
import CoursesLearnNavContents from './courseslearnnav/CoursesLearnNavContents';
import CoursesLearnNavIaassistant from './courseslearnnav/CoursesLearnNavIaassistant';

export const CoursesLearnNav = ({ content, slug, id, isMobile, userId, courseId }) => {
  let resultSections = content.map(({ sections }) => sections)
  const navRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const hash = location.hash.replace('#', '') || (isMobile ? 'contents' : 'overview');

  // Estado para el tab activo
  const [activeKey, setActiveKey] = useState(() => {
    if (location.hash) return location.hash.replace('#', '');
    return isMobile ? 'contents' : 'overview';
  });

  useEffect(() => {
    // Sincroniza el tab activo con el hash de la URL
    if (location.hash && location.hash.replace('#', '') !== activeKey) {
      setActiveKey(location.hash.replace('#', ''));
    }
    // Si cambia isMobile y no hay hash, cambia el tab por defecto
    if (!location.hash) {
      setActiveKey(isMobile ? 'contents' : 'overview');
    }
    // eslint-disable-next-line
  }, [location.hash, isMobile]);

  const handleSelect = (key) => {
    setActiveKey(key);
    navigate(`/courses/${slug}/learn/lectures/${id}#${key}`);
  };

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = navRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction) => {
    if (navRef.current) {
      const scrollAmount = navRef.current.clientWidth / 2; // O un valor fijo
      navRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    checkScroll(); // Check initially
    const handleResize = () => checkScroll();
    const navElement = navRef.current;
    navElement.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      navElement.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {showLeftArrow && (
          <Button variant="link" onClick={() => scroll('left')} style={{ padding: '0 5px' }}>
            <ChevronLeft size={24} />
          </Button>
        )}
        <div
          ref={navRef}
          style={{ overflowX: 'auto', whiteSpace: 'nowrap', flexGrow: 1, scrollbarWidth: 'none' }}
          className="d-flex"
        >
          {isMobile ? (

            <Nav
              variant="tabs"
              activeKey={activeKey}
              onSelect={handleSelect}
              className="flex-nowrap"
            >
              <Nav.Item>
                <Nav.Link eventKey="contents" className={`courseslearn-nav-link${hash === 'contents' ? ' active' : ''}`}>Contenido</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="iaassistant" className={`courseslearn-nav-link${hash === 'iaassistant' ? ' active' : ''}`}>IA Assistant</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="overview" className={`courseslearn-nav-link${hash === 'overview' ? ' active' : ''}`}>Descripcion General</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="contact" className={`courseslearn-nav-link${hash === 'contact' ? ' active' : ''}`}>Preguntas y Respuestas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="settings" className={`courseslearn-nav-link${hash === 'settings' ? ' active' : ''}`}>Apuntes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="dashboard" className={`courseslearn-nav-link${hash === 'dashboard' ? ' active' : ''}`}>Anuncios</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reports" className={`courseslearn-nav-link${hash === 'reports' ? ' active' : ''}`}>Descargables</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="analytics" className={`courseslearn-nav-link${hash === 'analytics' ? ' active' : ''}`}>Valoraciones</Nav.Link>
              </Nav.Item>
            </Nav>
          ) : (
            <Nav
              variant="tabs"
              activeKey={activeKey}
              onSelect={handleSelect}
              className="flex-nowrap"
            >
              <Nav.Item>
                <Nav.Link eventKey="overview" className={`courseslearn-nav-link${hash === 'overview' ? ' active' : ''}`}>Descripcion General</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="contact" className={`courseslearn-nav-link${hash === 'contact' ? ' active' : ''}`}>Preguntas y Respuestas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="settings" className={`courseslearn-nav-link${hash === 'settings' ? ' active' : ''}`}>Apuntes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="dashboard" className={`courseslearn-nav-link${hash === 'dashboard' ? ' active' : ''}`}>Anuncios</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reports" className={`courseslearn-nav-link${hash === 'reports' ? ' active' : ''}`}>Descargables</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="analytics" className={`courseslearn-nav-link${hash === 'analytics' ? ' active' : ''}`}>Valoraciones</Nav.Link>
              </Nav.Item>
            </Nav>
          )}
        </div>
        {showRightArrow && (
          <Button variant="link" onClick={() => scroll('right')} style={{ padding: '0 5px' }}>
            <ChevronRight size={24} />
          </Button>
        )}
      </div>
      {activeKey === 'contents' && isMobile && (
        <CoursesLearnNavContents sections={resultSections} userId={userId} courseId={courseId} />
      )}
      {activeKey === 'iaassistant' && isMobile && (
        <CoursesLearnNavIaassistant />
      )}
    </Container>
  );
}