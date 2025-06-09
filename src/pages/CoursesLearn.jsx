import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoursesLearnContent } from '../components/courseslearn/CoursesLearnContent';

export const CoursesLearn = () => {
    const { slug, id } = useParams();
    const [lecture, setLecture] = useState(null);

    useEffect(() => {
        // Aquí deberías hacer la petición a tu API para obtener la info de la clase por id
        // y opcionalmente del curso por slug
        // Ejemplo:
        // fetch(`/api/lectures/${id}`).then(...).then(setLecture)
    }, [id, slug]);

    return (
        <div>
            <h2>Aprendiendo: {slug.replace(/-/g, ' ')}</h2>
            <CoursesLearnContent lecture={lecture} />
        </div>
    );
};