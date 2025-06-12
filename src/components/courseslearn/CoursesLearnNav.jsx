import React, { useRef, useState, useEffect } from 'react';
import { Tabs, Tab, Nav, Button } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'; // Para los iconos de flecha
import { useLocation, useNavigate } from 'react-router-dom';

export const CoursesLearnNav = ({ content, slug, id }) => {
  const navRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const hash = location.hash.replace('#', '') || 'overview';

  const handleSelect = (key) => {
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
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {showLeftArrow && (
        <Button variant="link" onClick={() => scroll('left')} style={{ padding: '0 5px' }}>
          <ChevronLeft size={24} />
        </Button>
      )}
      <div
        ref={navRef}
        style={{ overflowX: 'auto', whiteSpace: 'nowrap', flexGrow: 1, scrollbarWidth: 'none' }} // scrollbarWidth para ocultar la barra nativa
        className="d-flex" // Para que los Nav.Link no se envuelvan
      >
        <Nav 
            variant="tabs"
            activeKey={hash}
            onSelect={handleSelect}
            defaultActiveKey="overview"
            className="flex-nowrap"> {/* flex-nowrap de Bootstrap */}
          <Nav.Item>
            <Nav.Link eventKey="overview">Tab 1 muy largo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="profile">Tab 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contact">Tab 3</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="settings">Tab 4</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="dashboard">Tab 5</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reports">Tab 6</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="analytics">Tab 7</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="preferences">Tab 8</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {showRightArrow && (
        <Button variant="link" onClick={() => scroll('right')} style={{ padding: '0 5px' }}>
          <ChevronRight size={24} />
        </Button>
      )}
    </div>
  );
}