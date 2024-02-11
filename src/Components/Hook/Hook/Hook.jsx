import React from "react";

import useInputState from "../useInputState.js/useInputState";
const Hook = () => {
 
   const nameState = useInputState('ammmar')
   const emailState = useInputState('ammar@gmail.com')
  

  const handleSubmit = (e) => {
    console.log(nameState.value)
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...nameState} type="text" name="name" />
        <br />
        <input type="password" name="password" id="" /> <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Hook;
