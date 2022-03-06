import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import FormContext from "../context/FormContext"
import ClientContext from "../context/ClientContext"

export default function Two() {

  const navigate = useNavigate()
  const { formData, setFormData } = useContext(FormContext)
  const { client } = useContext(ClientContext);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const onSubmit = (data) => {
    if (!errors.length) {
      const finalData = {...formData, ...data}
      setFormData(finalData)
      navigate("/show")
    }
  }

  useEffect(() => {
    if (client === "Client 1") {
      setValue("seven", "The context works!" )
    }
    if (client === "Client 2") {
      setValue("seven", "This is the second client test!" )
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      { formData.one === "Valentin" && (<p> {formData.one} </p> )  }
      <input type="text" placeholder="Seven" {...register("seven", {required: true, maxLength: 80})} />
      <button>Terminar</button>
    </form>
  );
}