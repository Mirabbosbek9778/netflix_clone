import React from "react";
import { redirect } from "next/dist/server/api-utils";

const Page = () => {
  return redirect("/browse");
};

export default Page;
