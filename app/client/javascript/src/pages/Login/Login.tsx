import { Link } from "react-router-dom";
import { AuthButton, AuthTitle } from "../../UI";

import useTitle from "../../hooks/useTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMsg, SimpleInput } from "../../components";
import { EMAIL } from "../../utils/regex";
import useSignIn from "./useSignIn";

let classes = require("./styles.module.scss");
type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  useTitle("Login");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { submitHandler } = useSignIn();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    submitHandler(data);
  };

  return (
    <div className={classes.Center}>
      <AuthTitle>Sign in</AuthTitle>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
        <SimpleInput
          label="Email"
          name="email"
          register={register}
          validators={{
            required: "Email can't be blank",
            pattern: {
              value: EMAIL,
              message: "Wrong email format",
            },
          }}
          errors={errors}
        />
        <ErrorMsg errors={errors} name="email" />

        <SimpleInput
          label="Password"
          type="password"
          name="password"
          register={register}
          validators={{ required: "Password can't be blank" }}
          errors={errors}
        />
        <ErrorMsg errors={errors} name="password" />

        <Link to="sign-up">Create new account</Link>
        <AuthButton type="submit" name={"Sign In"} />
      </form>
    </div>
  );
};

export default Login;
