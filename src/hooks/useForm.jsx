import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    // const { name, value } = target;
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
