import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className={"w-full h-screen"}>
      <div className={"absolute inset-0"}>
        <Image
          src={
            "https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4"
          }
          alt={"bg"}
          fill
        />
        <div
          className={
            "relative z-10 w-[500px] bg-black/50  h-[50vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl px-8 py-4"
          }
        >
          <div className={"flex items-center flex-col"}>
            <h1 className={"text-4xl font-bold"}>Login</h1>
            <Button
              onClick={() => signIn("google")}
              className={
                "mt-4 flex items-center gap-2 w-full h-[56px] bg-red-500 !text-white hove:bg-red-800"
              }
            >
              <AiFillGithub className={"w-7 h-7"} />
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
