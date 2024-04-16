import React from 'react';
import {Card, Button} from 'react-bootstrap';

function SimpleCard({ title, content ,btntext,srcimg }) {
  return (
    <div>
        <Card>
            <Card.Img variant="top" src={srcimg} width="294px" height="330px"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
                <Button href="#home" variant="primary" style={{backgroundColor: "green", borderColor: "darkgreen"}}>{btntext}</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default SimpleCard;