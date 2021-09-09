import { FC } from "react";

import Card from "../../components/Card/Card";
import { User } from "../../redux/reducers/userReducer";

const UserCard: FC<User> = ({ username, email, profiles_count }) => {
  return (
    <Card>
      <p>{username}</p>
      <p>{email}</p>
      <p>{`${profiles_count ? profiles_count : 0} ${
        profiles_count === 1 ? "profile" : "profiles"
      }`}</p>
    </Card>
  );
};

export default UserCard;
