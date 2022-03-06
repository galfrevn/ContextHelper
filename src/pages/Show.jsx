import React, { useContext } from 'react';
import FormContext from "../context/FormContext"

function Show() {

  const { formData } = useContext(FormContext)
  console.log(formData);

  return (
    <div className="App">

        {formData.one}
        <br />
        {formData.two}
        <br />
        {formData.three}
        <br />
        {formData.four}
        <br />
        {formData.five}
        <br />
        {formData.six}
        <br /> 
        {formData.seven}

    </div>
  );
}

export default Show;
