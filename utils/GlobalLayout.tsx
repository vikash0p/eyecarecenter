"use client";
import React from "react";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children} </main>
    </div>
  );
};

export default GlobalLayout;
