import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const avatar = require("../../assets/pics/avatar.png");
const avatar_admin = require("../../assets/pics/avatar_active.png");
const profiles = require("../../assets/pics/Profiles.png");
const dashboard = require("../../assets/pics/Dashboard.png");
const users = require("../../assets/pics/Users.png");
import { NavButton } from "../../UI";
import { UserReducer } from "../../redux/reducers/userReducer";
import useFullscreen from "../../hooks/useFullscreen";
import { RootState } from "../../redux/store";

const classes = require("./styles.module.scss");
import { logout } from "../../redux/actions/authActions";
import { getOneUser } from "../../redux/actions/userActions";

const Navigation = () => {
  const { isFullscreen } = useFullscreen();
  const dispatch = useDispatch();
  const { loggedIn, user, userId } = useSelector(
    (state: RootState) => state.user as UserReducer
  );

  useEffect(() => {
    if (loggedIn && userId) {
      dispatch(getOneUser(userId.toString()));
    }
  }, [loggedIn, dispatch, userId]);

  if (isFullscreen || !loggedIn) return null;
  return (
    <div className={classes.Navigation}>
      <NavLink to="/profiles" className={classes.AvatarContainer}>
        <img
          src={user?.role === "admin" ? avatar_admin : avatar}
          alt="avatar"
          className={classes.Image}
        />
        <h3 className={classes.Username}>{user?.username}</h3>
      </NavLink>
      <menu className={classes.MenuContainer}>
        <li>
          <NavButton name="Profiles" to="/profiles" img={profiles} />
        </li>
        <li>
          <NavButton name="Dashboard" to="/dashboard" img={dashboard} />
        </li>
        <li>
          <NavButton name="Users" to="/users" img={users} />
        </li>
        <li>
          <NavButton
            name="Log out"
            to="/logout"
            onClick={() => dispatch(logout())}
          />
        </li>
      </menu>
    </div>
  );
};

export default Navigation;
