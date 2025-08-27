// FILE: src/ui/hooks/useFormFields.ts
import { useState, ChangeEvent } from "react";

type FormFields<T> = {
  [K in keyof T]: T[K];
};

export function useFormFields<T extends Record<string, any>>(initial: T) {
  const [fields, setFields] = useState<FormFields<T>>(initial);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  function reset() {
    setFields(initial);
  }

  return { fields, handleChange, reset, setFields };
}
