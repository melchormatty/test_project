import * as React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage: React.FC<{ message?: string | null }> = ({ message }) => {
  if (!message) return null;
  return (
    <p role="alert" className={styles.error}>
      {message}
    </p>
  );
};

export default ErrorMessage;
