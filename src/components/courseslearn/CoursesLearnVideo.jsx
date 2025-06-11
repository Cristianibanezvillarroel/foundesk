import React from 'react';

// Componente para renderizar un video .mp4 responsivo 16:9
const CoursesLearnVideo = ({ videoUrl }) => (
  <div className="ratio ratio-21x9 mb-3">
    <video controls style={{ width: '100%', height: '100%' }}>
      <source src={videoUrl} type="video/mp4" />
      Tu navegador no soporta la reproducción de video.
    </video>
  </div>
);

export default CoursesLearnVideo;
