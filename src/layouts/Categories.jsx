import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";

export default function Categories() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Menu pointing vertical>
        <MenuItem as={NavLink} to="/home" name="home" />
        <MenuItem name="products" as={NavLink} to="/products" />
        <MenuItem name="friends" />
      </Menu>
    </div>
  );
}
