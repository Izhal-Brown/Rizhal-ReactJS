import React,{useState} from 'react';

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "")

  const handleForm = (e) => {
    e.preventDefault()
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    })
    setInput("")
  }
  
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div style={{width: '18rem', marginLeft:"auto", marginRight:"auto"}}>
      <form action="" onSubmit={handleForm}>
        {props.edit ? 
        (<>
          {/* Update Todo */}
          <label htmlFor="" >Update Todo</label> <br/>
          <input type="text" placeholder='Please Update your todo' onChange={handleChange} value={input}/>
          <button>Update</button>
        </>
        ):(
        <>
          {/* Input Todo */}
          <label htmlFor="">Input Todo</label> <br/>
          <input type="text" placeholder='Please Input your todo' onChange={handleChange} value={input}/>
          <button>Add</button>
          <br/>
          <br/>
        </>)}
      </form>
    </div>
  );
}

export default Form;