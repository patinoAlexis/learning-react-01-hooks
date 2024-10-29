import { useEffect, useState } from "react";
import { Message } from "./Message.jsx";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: "alexis",
    email: "alexis@hola",
  });
  const { userName, email } = formState;

  const onInputChange = ({ target }) => {
    // const { name, value } = target;
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    // console.log("useEffect");
    // console.log("userName", formState);
  }, [formState]);
  return (
    <>
      <h1>Simple form</h1>
      <input
        type="text"
        className="form-control"
        placeholder="User Name"
        name="userName"
        value={userName}
        onChange={onInputChange}
      />
      {userName === "alexis" && <Message />}
      <input
        type="email"
        className="form-control tw-mt-4"
        placeholder="alexis@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
