import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"

const YouTubeForm = () => {
  const form = useForm();
  const { register, control } = form;
  // const { name, ref, onChange, onBlur } = register("username");

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />
        
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
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
