import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="w-full h-screen z-8">
      <div className="flex flex-col items-center justify-center w-full h-full gap-6">
        <h1 className="text-center text-7xl font-bold max-w-prose ">
          Design tools
          <br /> from the future.
        </h1>
        <h2 className="text-center text-2xl text-white">
          Unleash your creativity with Diagram's <br />
          AI-powered design tools.
        </h2>
        <Button>Start Free</Button>
      </div>
    </section>
  );
};
