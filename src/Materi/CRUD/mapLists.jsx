import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import Form from './form';

function Maplists({list, deleteList, updateList}) {
  const [edit, setEdit] = useState({
    id : null,
    value : ""
  })


  const submitUpdate = (value) => {
    updateList(edit.id, value)
    setEdit({
      id : null,
      value : ""
    })
  }

  if(edit.id){
    return <Form edit={edit} onSubmit={submitUpdate}></Form>
  }


  return (
    <div>
      {list.map((item, index) => (
        <div key={index} style={{paddingTop: "30px"}}>
          <Card style={{ width: '18rem', marginLeft:"auto", marginRight:"auto"}} key={index}>
            <Card.Body>
              <Card.Title>ID : {item.id}</Card.Title>
              <Card.Text>
              {item.text}
              </Card.Text>
              <Button variant="warning" onClick={() => setEdit({id: item.id, value : item.text}) }>Update</Button>
              <Button variant="danger" onClick={() => deleteList(item.id)}>Delete</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
      
    </div>
  );
}

export default Maplists;