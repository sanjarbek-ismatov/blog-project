import React from "react";
import { Nav, Button, NavigationBar, Main, H1, H2 } from "../components/styled";
const Index = () => {
  return (
    <div>
      <header>
        <Nav>
          <h1>My Blog</h1>
          <NavigationBar>
            <Button>Ro'yhatdan o'tish</Button>
            <Button>Tizimga kirish</Button>
          </NavigationBar>
        </Nav>
      </header>
      <main>
        <Main>
          <div style={{ textAlign: "center" }}>
            <H1>Assalomu alaykum</H1>
            <hr />
            <H2>My blog platformasiga xush kelibsiz!</H2>
          </div>
        </Main>
      </main>
    </div>
  );
};

export default Index;
