"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import logoutHook from "@/lib/hooks/logoutHook";

const LogoutBtn = () => {
  const logoutFn = async () => {
    const { message, success } = await logoutHook();

    if (!success) {
      console.log(message);
    }

    if (success) {
      console.log(message);
    }
  };

  return (
    <>
      <Button
        className="cursor-pointer"
        variant="outline"
        onClick={logoutFn}
      >
        <LogOut /> Logout
      </Button>
    </>
  );
};

export default LogoutBtn;
