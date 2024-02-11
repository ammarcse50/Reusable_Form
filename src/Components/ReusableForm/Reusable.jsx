import React from "react";

const Reusable = ({ formTitle, handleSubmit, submitBtnText = "submit" }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
            
         name: e.target.name.value,
         password: e.target.password.value

    };

    handleSubmit(data)
  };
  return (
    <div>
      <h2>{formTitle}</h2>
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="password" name="password" id="" /> <br />
        <input
          
   
          type="submit"
 
        />
      </form>
    </div>
  );
};

export default Reusable;
