import React from "react";

import Button from "./Button";
import Toolbar from "./Toolbar";

export default {
  title: "Components/Button",
  component: Button,
};

export const usage = () => (
  <div>
    <Toolbar>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </Toolbar>
    <br />
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
