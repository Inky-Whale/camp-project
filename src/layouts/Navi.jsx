import React, { useState } from "react";
import { MenuMenu, MenuItem, Button, Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import LoggedOut from "./LoggedOut";
import LoggedIn from "./LoggedIn";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogOut = () => {
    setIsAuthenticated(false);
  };

  const handleLogIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            <CartSummary />
            {isAuthenticated ? (
              <LoggedIn logOut={handleLogOut} bisey="1" />
            ) : (
              <LoggedOut logIn={handleLogIn} />
            )}
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}
