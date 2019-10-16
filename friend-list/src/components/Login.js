import React, { useState } from "react";

const Login = () => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    console.log(e);
  };

  const changeHandler = e => {
    setFormValues({
      ...formValues,
      //keep forgetting this is how you have a dynamic key when assigning objects
      [e.target.name]: e.target.value
    });
  };

  // How would I code a dynamic ID? Get the ID the last friend in the array and increment that?
  return (
    <div className="login" onSubmit={submitHandler} onChange={changeHandler}>
      <form>
        <input name="username" />
        <input name="password" type="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
