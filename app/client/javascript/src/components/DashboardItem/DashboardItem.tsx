import { FC } from "react";
import { Title } from "../../UI";

let classes = require("./styles.module.scss");

type DBItemProps = {
  title: string;
  number?: number;
};

const DashboardItem: FC<DBItemProps> = ({ title, number }) => {
  return (
    <section className={classes.Container}>
      <Title>{title}</Title>
      <h1>{number}</h1>
    </section>
  );
};

export default DashboardItem;
