import { Avatar, Button } from "@chakra-ui/react";
import React from "react";

const NavButtons = () => {
  return (
    <>
      <Button variant={"text"}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Button>
    </>
  );
};

export default NavButtons;
