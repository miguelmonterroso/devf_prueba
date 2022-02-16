import React, {useState} from 'react';
import { Card, Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export const CustomCard = (props) => {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }


  return <div className='space'>
            <Card>
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
                <Button variant="warning" onClick={() => handleShow()}>
                    Information
                </Button>
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
