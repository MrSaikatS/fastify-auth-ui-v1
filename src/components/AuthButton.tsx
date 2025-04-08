"use client";

import { Button } from "./ui/button";

const AuthButton = () => {
  const checkAuthFn = async () => {
    console.log("Checking Auth");
  };

  return (
    <>
      <Button onClick={checkAuthFn}>Check Auth</Button>
    </>
  );
};

export default AuthButton;
