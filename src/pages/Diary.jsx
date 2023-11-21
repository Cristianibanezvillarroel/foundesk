import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Container, Button, Alert } from 'react-bootstrap';
import { FloatingLabel, Form } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//import { db } from '../components/firebase';
//import { collection, addDoc, getDocs } from "firebase/firestore";
import dayjs from 'dayjs';



export const Diary = () => {
    const allMonthValues = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const [selectedDate, setSelectedDate] = useState();

    const [calendarText, setCalendarText] = useState(`No ha seleccionado ningun dia`);

    const [show, setShow] = useState(false);

    const [date, setDate] = useState(new Date());


    const handleDateChange = (value) => {
        setSelectedDate(value);
        setCalendarText(`El dia seleccionado es ${value.toDateString()}`);
    };

    const handleYearChange = (value) => {
        const yearValue = value.getFullYear();
        setCalendarText(`${yearValue} Año Seleccionado`);
    };

    const handleMonthChange = (value) => {
        const monthValue = allMonthValues[value.getMonth()];
        setCalendarText(`${monthValue} Mes seleccionado`);
    };

    const [horario, setHorario] = useState('');
    const handleHorario = (e) => {
        setHorario(e)
    };



    const [valueEmail, setValueEmail] = useState('');
    const [valueNombre, setValueNombre] = useState('');
    const [valueTelefono, setValueTelefono] = useState('');

    const handleChangeEmail = (e) => {
        setValueEmail(e.target.value);
    }

    const handleChangeNombre = (e) => {
        setValueNombre(e.target.value);
    }

    const handleChangeTelefono = (e) => {
        setValueTelefono(e.target.value);
    }

    const [reservasCuenta, setReservasCuenta] = useState([]);


    /*const fetchPostCuenta = async () => {
        const querySnapshot = await getDocs(collection(db, 'reservas'))
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            setReservasCuenta(reservasCuenta => [...reservasCuenta, doc.data()])            
        });
    }

    useEffect(() => {
        fetchPostCuenta()
    }, []);

    const id = reservasCuenta.length + 1;
    const formatDay = dayjs(selectedDate).format('YYYY-MM-DD')
    
    const fetchAdd = async () => {
        const docRef = await addDoc(collection(db, "reservas"), {
            email: valueEmail,
            nombre: valueNombre,
            telefono: valueTelefono,
            mesa: mesa,
            horario: horario,
            fecha: formatDay,
            id: id          
        });
        setShow(true);
    }


    if (show) {
        return (
            <div className="App">
                <Container className='p-4'>
                    <Alert variant="success" onClose={() => setShow(false)} dismissible >
                        <Alert.Heading>Su reserva ha sido enviada con éxito</Alert.Heading>
                        <p>
                            Cierre esta ventana para volver al menu</p>
                    </Alert>
                </Container>
            </div>
        );
    }*/


    return (
        <div className="calendar-css">
            <h2>Agenda el día y horario para tu demo gratis</h2>
            <Calendar
                onClickMonth={handleMonthChange}
                onClickYear={handleYearChange}
                onChange={handleDateChange}
                value={selectedDate}
                className="div-calendar"

            />
            <FloatingLabel
                controlId="floatingInput"
                label="Tu correo electronico"
                className="mb-1"
                onChange={handleChangeEmail}
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Tu nombre"
                className="mb-1"
                onChange={handleChangeNombre}
            >
                <Form.Control type="text" placeholder="Cristian Ibanez" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Tu Telefono"
                className="mb-3"
                onChange={handleChangeTelefono}
            >
                <Form.Control type="text" placeholder="+56990200879" />
            </FloatingLabel>
            <div className="div-flex">
                <DropdownButton className="div-flex"
                    id="dropdown-button-dark-example2"
                    variant="secondary"
                    title={horario ? horario : "seleccione su horario"}
                    data-bs-theme="dark"
                    onSelect={handleHorario}
                >
                    <Dropdown.Item eventKey="am">horario am</Dropdown.Item>
                    <Dropdown.Item eventKey="pm">horario pm</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                    {selectedDate ? horario ? 'Agendar' : 'Debe seleccionar un horario para Agendar' : 'Debe seleccionar un dia para Agendar'}
                </Button>
            </div>
        </div>
    )
}