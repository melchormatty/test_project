import React from "react";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import $ from "./Form.module.css";

interface FormProps {
  firstName: string;
  lastName: string;
  gender: string;
  addressLine: string;
  city: string;
  stateName: string;
  onFirstNameChange: (val: string) => void;
  onLastNameChange: (val: string) => void;
  onGenderChange: (val: string) => void;
  onAddressLineChange: (val: string) => void;
  onCityChange: (val: string) => void;
  onStateChange: (val: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

const Form: React.FC<FormProps> = ({
  firstName,
  lastName,
  gender,
  addressLine,
  city,
  stateName,
  onFirstNameChange,
  onLastNameChange,
  onGenderChange,
  onAddressLineChange,
  onCityChange,
  onStateChange,
  onSubmit,
  onClear,
}) => {
  // Submit handler to prevent default form submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className={$.formContainer} onSubmit={handleFormSubmit}>
      <div className={$.inputRow}>
        <label className={$.label}>First Name</label>
        <InputText
          value={firstName}
          name="first name"
          placeholder="first name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onFirstNameChange(e.target.value)
          }
        />
      </div>

      <div className={$.inputRow}>
        <label className={$.label}>Last Name</label>
        <InputText
          value={lastName}
          name="last name"
          placeholder="last name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onLastNameChange(e.target.value)
          }
        />
      </div>

      <div className={$.inputRow}>
        <label className={$.label}>Gender</label>
        <select
          value={gender}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onGenderChange(e.target.value)
          }
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div className={$.inputRow}>
        <label className={$.label}>Address</label>
        <InputText
          value={addressLine}
          name="addressLine"
          placeholder="addressLine"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onAddressLineChange(e.target.value)
          }
        />
      </div>

      <div className={$.inputRow}>
        <label className={$.label}>City</label>
        <InputText
          value={city}
          name="city"
          placeholder="city"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onCityChange(e.target.value)
          }
        />
      </div>

      <div className={$.inputRow}>
        <label className={$.label}>State</label>
        <InputText
          value={stateName}
          name="stateName"
          placeholder="stateName"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onStateChange(e.target.value)
          }
        />
      </div>

      <div className={$.buttonGroup}>
        <Button type="submit">Add</Button>
        <Button type="button" variant="secondary" onClick={onClear}>
          Clear
        </Button>
      </div>
    </form>
  );
};

export default Form;
