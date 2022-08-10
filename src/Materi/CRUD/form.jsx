import React from 'react';

function Form() {
  return (
    <div style={{width: '18rem', marginLeft:"auto", marginRight:"auto"}}>
      <form action="">
        {/* Update Todo */}
        <label htmlFor="" >Update Todo</label> <br/>
        <input type="text" placeholder='Please Update your todo'/>
        <button>Update</button>
        <br/>
        <br/>
        {/* Input Todo */}
        <label htmlFor="">Input Todo</label> <br/>
        <input type="text" placeholder='Please Input your todo'/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;