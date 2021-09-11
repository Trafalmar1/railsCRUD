import { ErrorMessage } from "@hookform/error-message";
import { FC } from "react";

let classes = require("./styles.module.scss");

type Props = {
  errors: any;
  name: string;
  message?: string;
};

const ErrorMsg: FC<Props> = ({ errors, name, message }) => (
  <p className={classes.Error}>
    <ErrorMessage errors={errors} name={name} message={message} />
  </p>
);

export default ErrorMsg;
