import React, {useState} from 'react';
import Form from './form';
import MapLists from './mapLists';

function List() {
  const [lists, setLists] = useState([])

  const addLists = (list) => {
    const newList = [list, ...lists] 
    setLists(newList)
  };

  const deleteLists = (id) => {
   const deleteArr = [...lists].filter((list) => list.id !== id)
   setLists(deleteArr)
  }

  const updateLists=  (listId, newValue) => {
    setLists ((prev) =>
      prev.map((item) => (item.id === listId ? newValue : item))
    )
  }

  return (
    <div>
      <Form onSubmit={addLists}/>
      <MapLists list={lists}
        deleteList={deleteLists} updateList={updateLists}/>
    </div>
  );
}

export default List;