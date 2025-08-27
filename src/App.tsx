import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { AddressBook } from "./ui/components/AddressBook/AddressBook";
import { Form } from "./ui/components/Form/Form";
import { useAppDispatch, useAppSelector } from "./core/store";
import {
  fetchAddresses,
  addAddress,
  clearAddresses,
} from "./core/reducers/addressBookSlice";
import { AddressModel } from "./core/models/address";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { addresses, loading, error } = useAppSelector(
    (state) => state.addressBook
  );

  // Form field states
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("Male");
  const [addressLine, setAddressLine] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [stateName, setStateName] = useState<string>("");

  // Fetch addresses on mount
  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const handleAddAddress = () => {
    if (!firstName || !lastName || !addressLine || !city || !stateName) {
      alert("Please fill all required fields.");
      return;
    }
    const newAddress: AddressModel = {
      id: Date.now().toString(),
      firstName,
      lastName,
      gender,
      address: addressLine,
      city,
      state: stateName,
    };
    dispatch(addAddress(newAddress));
    clearForm();
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setGender("Male");
    setAddressLine("");
    setCity("");
    setStateName("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Address Book</h1>
      {loading && <p>Loading addresses...</p>}
      {error && <p className={styles.errorMessage}>Error: {error}</p>}

      {/* Form Section */}
      <Form
        firstName={firstName}
        lastName={lastName}
        gender={gender}
        addressLine={addressLine}
        city={city}
        stateName={stateName}
        onFirstNameChange={setFirstName}
        onLastNameChange={setLastName}
        onGenderChange={setGender}
        onAddressLineChange={setAddressLine}
        onCityChange={setCity}
        onStateChange={setStateName}
        onSubmit={handleAddAddress}
        onClear={clearForm}
      />

      {/* Address Book Section */}
      <AddressBook addresses={addresses} />

      {/* Clear All Button */}
      {addresses.length > 0 && (
        <button
          className={styles.clearButton}
          onClick={() => dispatch(clearAddresses())}
        >
          Clear All Addresses
        </button>
      )}
    </div>
  );
};

export default App;
