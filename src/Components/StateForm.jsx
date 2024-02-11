import { useState } from "react";

const StateForm = () => {
  const [name, setName] = useState(null);
 
  const handleSubmit = (e) => {
    e.preventDefault();
        console.log(name)
  };

  const handleName = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    setName(e.target.value)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} type="text" name="name" />
        <br />
        <input type="password" name="password" id="" /> <br />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default StateForm;
