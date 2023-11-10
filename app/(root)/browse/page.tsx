"use client";

import Login from "@/components/shared/login";
import ManageAccount from "@/components/shared/manage-account";
import { useGlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import React from "react";

const Page = () => {
  const { account } = useGlobalContext();
  const { data: session } = useSession();

  if (session === null) return <Login />;
  if (account === null) return <ManageAccount />;

  return <div>hello browse</div>;
};

export default Page;
