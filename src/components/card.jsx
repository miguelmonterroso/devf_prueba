import React, {useState} from 'react';
import { Card, Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

// Recibimos las props para hacer el contenido dicamico por cada tarjeta

export const CustomCard = (props) => {
    // Seteamos el estado de la modal 
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

    // Función para abrir la modal
  function handleShow() {
    setFullscreen();
    setShow(true);
  }


  // contenido que se va a renderizar por cada uno de los items que se obtengan de la API

  return <div className='space'>
            <Card>
                {/* Recibimos el titulo, nombre e imagen de cada item y lo renderizamos en nuestra carta */}
                <Card.Header>{props.title}</Card.Header>
                <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Img variant="top" src={props.image} />
                <Card.Text>
                    Sex: {props.sex}<br/>
                    Publication: {props.age}
                </Card.Text>
                <Card.Text>
                    
                </Card.Text>
                {/* Boton que activa el modal */}
                <Button variant="warning" onClick={() => handleShow()}>
                    Information
                </Button>
                {/* Renderizamos la informacion de interes en nuestro modal, esto es de manera dinamica */}
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Sex: {props.sex}<br/>
                        Publication: {props.age}<br/>
                        race: {props.race}<br/>
                        Estatus: {props.status}<br/>
                        Eyes color: {props.eyes}<br/>
                        Subject: {props.subjects}
                    </Modal.Body>
                </Modal>
                </Card.Body>
            </Card>
            
        </div>;
};
