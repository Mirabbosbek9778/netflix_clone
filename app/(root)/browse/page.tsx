"use client";

import Login from "@/components/shared/login";
import { useGlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import React from "react";

const Page = () => {
  const { account } = useGlobalContext();
  const { data: session } = useSession();
  console.log(session);

  if (session === null) return <Login />;
  // if (account === null) return <Login />;

  return <div>hello browse</div>;
};

export default Page;
