import React from 'react';

export const CoursesLearnContent = ({ lecture }) => {
    if (!lecture) return <div>Cargando clase...</div>;
    return (
        <div>
            <h3>{lecture.title}</h3>
            <div>{lecture.content}</div>
            {/* Aquí puedes renderizar video, recursos, etc. */}
        </div>
    );
};