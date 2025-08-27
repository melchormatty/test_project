import { ButtonType, ButtonVariant } from "@/types";
import React, { FunctionComponent } from "react";

import $ from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  type?: ButtonType;
  variant?: ButtonVariant;
  loading?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  loading,
  onClick,
  type = "button",
  variant = "primary",
  disabled,
}) => {
  const variantClass = variant === "secondary" ? $.secondary : $.primary;

  return (
    <button
      className={`${$.button} ${variantClass}`}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span
          className={$.spinner}
          data-testid="loading-spinner"
          aria-label="loading"
        />
      ) : null}
      <span className={$.label}>{children}</span>
    </button>
  );
};

export default Button;
