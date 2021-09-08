import { FC, FormEvent } from "react";
import { Label } from "../../UI";
let classes = require("./styles.module.scss");

type InputProps = {
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  touched?: boolean;
  valid?: boolean;
  type?: "text" | "password";
  onChange?: (name: any, v: string) => void;
  onBlur?: (name: any) => void;
};

const Input: FC<InputProps> = ({
  name,
  label,
  value,
  type = "text",
  touched,
  valid = true,
  placeholder,
  onChange,
  onBlur,
}) => {
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    if (!onChange || !name) return;
    onChange(name, e.currentTarget.value.trim());
  };

  const blurHandler = () => {
    if (!onBlur) return;
    onBlur(name);
  };

  return (
    <div className={classes.Controls}>
      <Label valid={valid} htmlFor={name}>
        {label}
      </Label>
      <input
        className={[touched && classes.Touched, !valid && classes.Invalid].join(
          " "
        )}
        placeholder={placeholder}
        type={type}
        value={value}
        id={name}
        name={name}
        onBlur={blurHandler}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Input;
