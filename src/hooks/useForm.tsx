import { useState } from "react";

interface TargetForm {
  target: any;
}
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState<any>(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = event.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, handleInputChange, reset];
};
