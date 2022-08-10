import React from 'react';
import Logo from '../logo.svg';


function foto () {
  // const [text, setText] = state("");
  return (
    <div>
      <img src={Logo} alt="" width={200} />
      {/* <input type="text" onChange={setState => setText.target.value}/> */}
    </div>
  )
}

export default foto;