import React, {useState} from 'react';
import { Card, Offcanvas, ProgressBar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export const CustomCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return <div className='space'>
            <Card>
                <Card.Header>{props.ab}</Card.Header>
                <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Confirmed cases: {props.active}
                </Card.Text>
                <Card.Text>
                    Deaths: {props.death}
                </Card.Text>
                <Button variant="warning" onClick={handleShow} className="me-2">
                    Information
                </Button>
                <Offcanvas show={show} onHide={handleClose} placement='bottom'>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{props.name}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <p>This is the information of {props.name}</p>
                    <div>
                        <ProgressBar variant="danger" now={80.9} />
                        <p>Confirmed: {props.active}</p>
                        <ProgressBar variant="warning" now={20} />
                        <p>Deaths: {props.death}</p>
                        <ProgressBar variant="info" now={60} />
                        <p>Population: {props.population}</p>
                    </div>
                    </Offcanvas.Body>
                </Offcanvas>
                </Card.Body>
            </Card>
            
        </div>;
};
