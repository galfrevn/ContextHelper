import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import FormContext from "../context/FormContext";
import ClientContext from "../context/ClientContext";

export default function App() {
  const navigate = useNavigate();
  const { setFormData } = useContext(FormContext);
  const { client, setClient } = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const onSubmit = (data) => {
    if (!errors.length) {
      setFormData(data);
      navigate("/two");
    }
  };

  const handleClient1 = (e) => {
    e.preventDefault()
    setClient("Client 1")
  };

  const handleClient2 = (e) => {
    e.preventDefault()
    setClient("Client 2")
  };

  useEffect(() => {
    if (client === "Client 1") {
      setValue("one", "Valentin" )
      setValue("two", "Galfré" )
      setValue("three", "galfre.vn@gmail.com" )
      setValue("four", 3425281402 )
      setValue("five", "Mr" )
      setValue("six", "Yes" )
    }
    if (client === "Client 2") {
      setValue("one", "Franco" )
      setValue("two", "Galfré" )
      setValue("three", "francogalfre2007@gmail.com" )
      setValue("four", 4752013 )
      setValue("five", "Dr" )
      setValue("six", "No" )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client])
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}  >

      <button onClick={handleClient1}>Client 1</button>
      <button onClick={handleClient2}>Client 2</button>

      <input
        type="text"
        placeholder="First name"
        {...register("one", { required: true, maxLength: 80 })} defaultValue={client.one}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register("two", { required: true, maxLength: 100 })} defaultValue={client.two}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("three", { required: true, pattern: /^\S+@\S+$/i })} defaultValue={client.three}
      />
      <input
        type="number"
        placeholder="Mobile number"
        {...register("four", { required: true, minLength: 6, maxLength: 12 })} defaultValue={client.four}
      />
      <select {...register("five", { required: true })} defaultValue={client.five}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input
        {...register("six", { required: true })}
        type="radio"
        value="Yes"
      />
      <input {...register("six", { required: true })} type="radio" value="No" />

      <input type="submit" />
    </form>
  );
}
