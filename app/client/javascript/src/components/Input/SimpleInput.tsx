import React, { FC } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { Label } from "../../UI";
let classes = require("./styles.module.scss");

type InputProps = {
  name: string;
  label?: string;
  type?: string;
  validators?: RegisterOptions;
  errors?: any;
  register: UseFormRegister<any>;
};

const SimpleInput: FC<InputProps> = ({
  name,
  label,
  type,
  validators,
  errors,
  register,
}) => {
  return (
    <div className={classes.Controls}>
      {label?.length && <Label htmlFor={name}>{label}</Label>}
      <input
        id={name}
        type={type}
        {...register(name, { ...validators })}
        className={errors?.[name] && classes.Invalid}
      />
    </div>
  );
};

export default SimpleInput;
