import { FC, useEffect } from "react";
let classes = require("./styles.module.scss");

type BackdropProps = {
  onClick: VoidFunction;
};

const Backdrop: FC<BackdropProps> = ({ onClick }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return <div className={classes.Backdrop} onClick={onClick}></div>;
};

export default Backdrop;
