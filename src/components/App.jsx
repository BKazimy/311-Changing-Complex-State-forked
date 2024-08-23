import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  // const [lName, setLname] = useState("");

  function nameChange(event) {
    let [name, value] = [event.target.name, event.target.value];
    console.log(name);
    console.log(value);

    setFullName((preValue) => {
      console.log(preValue);
      if (name == "fName") {
        return {
          fName: value,
          lName: preValue.lName,
        };
      } else if (name == "lName") {
        return {
          fName: preValue.fName,
          lName: value,
        };
      }
    });
  }

  // function lNameChange(event) {
  //   setLname(event.target.value);
  // }

  function submitted(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={submitted}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={nameChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={nameChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
