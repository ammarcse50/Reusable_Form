import React, { useEffect, useRef } from "react";

const Refform = () => {
  const nameRef = useRef(null);

    useEffect(()=>{

         nameRef.current.focus()


    },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    console.log(nameRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} defaultValue={'ammar'} type="text" name="name" />
        <br />
        <input type="password" name="password" id="" /> <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Refform;
