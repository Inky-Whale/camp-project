import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Image,
  MenuItem,
} from "semantic-ui-react";

export default function LoggedIn(props) {
  return (
    <div>
      <MenuItem>
        <Image
          avatar
          spaced="right"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        />
        <Dropdown pointing="top right" text="Berk">
          <DropdownMenu>
            <DropdownItem text="Info" icon="info" />
            <DropdownItem
              text="Log Out"
              icon="sign-out"
              onClick={props.logOut}
            />
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </div>
  );
}
