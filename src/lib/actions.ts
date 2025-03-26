import { redirect } from "next/navigation";

export const registerAction = async () => {
  redirect("/auth/login");
};
