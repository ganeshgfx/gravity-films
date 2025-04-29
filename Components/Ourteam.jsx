"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { people } from "../data";

export function Ourteam() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center mb-10 mt-10 w-full px-4">
      <AnimatedTooltip items={people} />
    </div>
  );
}
