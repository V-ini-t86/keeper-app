import React from "react";
import classes from "./Navbar.module.css";
import {
  Close,
  AddAlertOutlined,
  DeleteRounded,
  ArchiveOutlined,
} from "@material-ui/icons";
import glogo from "./Images/gmaillogo.png";
import { useStateValue } from "../../StateProvider";
import menu from "./Images/menu.png";
import SearchBar from "./SearchBar/SearchBar";
import IconButton, { NavButton } from "./IconButton/IconButton";
import doubt from "./Images/doubts-button.png";
import dot from "./Images/dots-menu.png";
import man from "./Images/man.png";
import setting from "./Images/settings.png";
// import { Divider } from "@material-ui/core";
import { ACTIONS } from "../../reducer";
import { useAuth } from "../../AuthContext";
import ReminderPallete from "../Content/Card/Reminder/ReminderPallete";

function Navbar() {
  const [{ allSelect }, dispatch] = useStateValue();
  const { signIn, currentUser } = useAuth();
  console.log(signIn);

  const loginHandler = () => {
    console.log("clikcked");
    return signIn();
  };

  const allDelete = () => {
    dispatch({ type: ACTIONS.REMOVE_FROM_SELECT });
    dispatch({ type: ACTIONS.ADD_ALL_TO_TRASH, ids: allSelect });
  };
  const allToArchive = () => {
    dispatch({ type: ACTIONS.REMOVE_FROM_SELECT });
    dispatch({ type: ACTIONS.ADD_ALL_TO_ARCHIVE, ids: allSelect });
  };

  const selected = (
    <>
      <div className={classes.menuBrand}>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.REMOVE_FROM_SELECT });
          }}
        >
          <Close fontSize="large" />
        </button>
        <h3>{allSelect.length > 0 && `${allSelect.length} Selected`}</h3>
      </div>

      <div className={classes.list}>
        <NavButton title="Reminder">
          <ReminderPallete style={{ fill: "blue" }} fontSize="medium" />
          {/* <AddAlertOutlined style={{ fill: "blue" }} fontSize="medium" /> */}
        </NavButton>
        <NavButton title="Delete">
          <DeleteRounded
            onClick={allDelete}
            style={{ fill: "blue" }}
            fontSize="medium"
          />
        </NavButton>
        <NavButton title="Archive">
          <ArchiveOutlined
            onClick={allToArchive}
            style={{ fill: "blue" }}
            fontSize="medium"
          />
        </NavButton>
        {/* <NavButton title="">
          <AddAlertOutlined style={{ fill: "blue" }} fontSize="medium" />
        </NavButton> */}
      </div>
    </>
  );
  return (
    <div className={classes.navbar}>
      {allSelect.length ? (
        selected
      ) : (
        <>
          <div className={classes.menuBrand}>
            <button>
              <img src={menu} alt="menu" />
            </button>
            <img src={glogo} alt="glogo" />
          </div>
          <SearchBar />
          <div className={classes.list}>
            <IconButton src={doubt} alt="doubt" />
            <IconButton src={setting} alt="setting" />
            <IconButton src={dot} alt="dot" />
            <button onClick={loginHandler}>
              <IconButton
                src={currentUser ? currentUser.photoURL : man}
                alt="man"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
