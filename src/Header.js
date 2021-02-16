import React from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://www.freelogodesign.org/file/app/client/thumb/efe347c5-3aaa-4bb5-bd80-20b98250f1e3_200x200.png?1604920586213"
        alt="logo"
      />

      <h6>By: Ali Saleem Hasan</h6>

      <div className="header__search">
        <Search />
        <input placeholder="Search..." type="text" />
      </div>

      <Avatar src={user?.photoURL} />
    </div>
  );
}

export default Header;
