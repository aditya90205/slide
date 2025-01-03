import { onBoardUser } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const user = await onBoardUser();
  console.log("User ", user);

  if (user!.status === 200 || user!.status === 201) {
    return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`);
  }

  return redirect("/sign-in");
};

export default page;
