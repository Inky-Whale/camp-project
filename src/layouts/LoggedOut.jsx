import React from "react";
import { Button, MenuItem } from "semantic-ui-react";

export default function LoggedOut(props) {
  return (
    <div>
      <MenuItem>
        <Button onClick={props.logIn}>Sign In</Button>
        <Button style={{ marginLeft: "0.5em" }}>Sign Up</Button>
      </MenuItem>
    </div>
  );
}
