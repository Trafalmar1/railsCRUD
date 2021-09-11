import { signIn } from "../../redux/actions/authActions";
import useToast from "../../hooks/useToast";
import { useDispatch } from "react-redux";
import { LoginData } from "../../api/authApi";

function useSignIn() {
  const { successToast, errorToast } = useToast();
  const dispatch = useDispatch();

  const submitHandler = (data: LoginData) => {
    const loginCallBack = (res: string) => {
      if (res === "success") {
        successToast(`Logged in as ${data.email}`);
      } else {
        errorToast("Email or password is incorrect");
      }
    };

    dispatch(signIn(data, loginCallBack));
  };

  return { submitHandler };
}

export default useSignIn;
