import React from 'react';
import {Card, Button} from 'react-bootstrap';

function Maplists() {
  return (
    <div style={{paddingTop: "30px"}}>
      <Card style={{ width: '18rem', marginLeft:"auto", marginRight:"auto"}}>
      <Card.Body>
        <Card.Title>ID : 1234</Card.Title>
        <Card.Text>
         Belajar Membuat aplikasi todo menggunakan ReactJS
        </Card.Text>
        <Button variant="warning">Update</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Maplists;