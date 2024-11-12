import React from "react";
import logo from "../assets/logo.png";

type Props = {
  style: string;
};
export default function Logo({ style }: Props) {
  return <img src={logo.src} alt="Logo" className={style} />;
}
