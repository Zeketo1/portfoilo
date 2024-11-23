"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  name: string;
  position: string;
};

export default function Navigation({ name, position }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={`/${pathname !== "/" ? "" : ""}#${position}`} // Fixed `href` to avoid redundant `/#/#`
      className="cursor-pointer"
      onClick={(e) => {
        if (pathname !== "/") {
          e.preventDefault(); // Prevent default behavior
          window.location.href = `/#${position}`; // Navigate to the home page + hash
        }
      }}
    >
      {name}
    </Link>
  );
}
