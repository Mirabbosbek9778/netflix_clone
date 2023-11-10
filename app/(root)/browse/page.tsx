"use client";

import Login from "@/components/shared/login";
import { useGlobalContext } from "@/context";
import React from "react";

const Page = () => {
  const { account } = useGlobalContext();

  if (account === null) return <Login />;
  return <div>hello browse</div>;
};

export default Page;
