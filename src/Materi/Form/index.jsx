import React, { Component } from 'react';
import Validation from './pembahasan/validation';
// import FormElement from './pembahasan/form';

class Form extends Component {
  render() {
    return (
      <div>
        {/* <FormElement /> */}
        <Validation />
      </div>
    );
  }
}

export default Form;