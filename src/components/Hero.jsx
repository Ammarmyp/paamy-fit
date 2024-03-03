import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT's TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          SWOLE<span className="text-blue-400">nornously</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At repellat
        lorem fan repellat adipisicing consectetur amet, sit dolor aspernatur
        repellat sit amet, dolor sit adipising labore incidunt aspernatur labore
        incidunt cumque{" "}
        <span className="text-blue-400 font-medium">
          non sint neque obcaecati! Eligendi
        </span>{" "}
        id cumque laboriosam reprehenderit aut vero
        <span className="text-blue-400 font-medium">
          {" "}
          nihil dicta quibusdam animi
        </span>
        aspernatur.
      </p>
     <Button func={() =>{
      window.location.href = '#generate'
     } } text={"Accept & Begin"}></Button>
    </div>
  );
}

export default Hero;
