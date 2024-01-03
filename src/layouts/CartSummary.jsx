import React from "react";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
} from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Cart🛒">
        <DropdownMenu>
          <DropdownItem>Acer Laptop</DropdownItem>
          <DropdownItem>Asus Laptop</DropdownItem>
          <DropdownItem>Dell Laptop</DropdownItem>
          <DropdownDivider />
          <DropdownItem as={NavLink} to="/cart">
            Cart
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
