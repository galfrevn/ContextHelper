import React, { useContext, useEffect } from "react";
import FormContext from "../context/FormContext";
import { useNavigate } from "react-router";

function Show() {
  const { formData } = useContext(FormContext);
  console.log(formData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!formData.lenght) {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

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
      {formData.four + 20}
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
