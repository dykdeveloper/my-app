import React, { useState } from "react";

function Form2() {
  const [formdata, setformdata] = useState({ email: "", password: "" });

  const changename = (e) => {
    const { name, value } = e.target;

    setformdata({ ...formdata, [name]: value });
  };

  const submitname = (e) => {
    e.preventDefault();
    const { email, password } = formdata;

    if ((!email || !password) && !email && !password) {
      alert("email and password are required");
    } else if (!email) {
      alert("email is required");
    } else if (!password) {
      alert("password is required");
    } else {
      console.log("email", formdata.email);
      console.log("password", formdata.password);
    }
  };

  return (
    <>
      <form onSubmit={submitname}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            autoComplete="on"
            value={formdata.email}
            onChange={changename}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            autoComplete="on"
            value={formdata.password}
            onChange={changename}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

export default Form2;
