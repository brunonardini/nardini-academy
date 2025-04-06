import React from "react";

import Button from "./Button";
import Toolbar from "./Toolbar";

const meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

export const usage = () => (
  <div>
    <p>Default:</p>
    <Toolbar>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </Toolbar>
    <br />
    <p>As a link</p>
    <Toolbar>
      <Button href="#">Default</Button>
      <Button href="#" color="primary">
        Primary
      </Button>
      <Button href="#" color="secondary">
        Secondary
      </Button>
    </Toolbar>
    <br />
    <p>Outlined</p>
    <Toolbar>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
    </Toolbar>
  </div>
);
