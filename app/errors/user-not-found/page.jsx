"use client";
import React from "react";
import { useRouter } from "next/navigation";

const UserNotFound = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center gap-4 h-[50vh] w-full">
      <h1 className="head_text text-center orange_gradient">User not found</h1>
      <button
        className="black_btn"
        onClick={() => {
          router.push("/");
        }}
      >
        Return to Home Screen
      </button>
    </section>
  );
};

export default UserNotFound;
