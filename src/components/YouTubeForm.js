import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

// If using TypeScript - (data: formValues)
// const formValues = {
//   username: String,
//   email: String,
//   channel: String,
// }

const YouTubeForm = () => {
  const form = useForm();
  // In Typescript declare types
  // const form = useForm<formValues>();
  const { register, control, handleSubmit } = form;
  // const { name, ref, onChange, onBlur } = register("username");
  renderCount++;

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div>
      <h1>YouTubeForm ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />

        {/*
          Shorter code for this line and line 7 is used in line 12.  
          <input
          type="text"
          id="username"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        /> */}

        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid Email Format",
            },
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
