"use client";
import { Avatar, Button } from "@chakra-ui/react";
import { useUserContext } from "contexts/UserContext";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SignInWithGoogle } from "services/firebase";

const NavButtons = () => {
  const { user, setUser } = useUserContext();

  const signInHandler = () => {
    SignInWithGoogle().then((data) => {
      setUser(data);

      // Save data to sessionStorage
      sessionStorage.setItem("user", JSON.stringify(data));
    });
  };

  return (
    <>
      {user ? (
        <Button variant={"text"}>
          <Avatar name={user.displayName} src={user.photoURL} />
        </Button>
      ) : (
        <Button onClick={signInHandler} rightIcon={<FcGoogle />}>
          Sign In
        </Button>
      )}
    </>
  );
};

export default NavButtons;
