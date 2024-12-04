import { Message } from "./Message.jsx";
import { useForm } from "../hooks/useForm.jsx";

export const FormWithCustomHook = () => {
  const { userName, email, password, onInputChange, onReset } = useForm({
    userName: "",
    email: "",
    password: "",
  });

  // const { userName, email, password } = formState;

  // useEffect(() => {
  //   // console.log("useEffect");
  //   // console.log("userName", formState);
  // }, [formState]);

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
      <input
        type="password"
        className="form-control tw-mt-4"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onReset} className="btn btn-primary tw-mt-5">
        reset
      </button>
    </>
  );
};
