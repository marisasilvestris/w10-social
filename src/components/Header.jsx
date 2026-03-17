"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import UserSection from "./UserSection";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Header({ className }) {
  // const [showNav, setShowNav] = useState(true);

  // function toggleNav() {
  //   setShowNav(!showNav);
  // }

  return (
    <>
      <header className={className}>
        <Link
          href="/"
          className="flex flex-row place-self-center text-6xl px-8 text-center pt-4 pb-8 hover:text-accent"
        >
          <h1 className="font-bold">post party 5000</h1>
        </Link>
        {/* <motion.div
          layout
          className={`flex flex-row gap-4 w-fit text-lg place-self-center ${showNav === false ? "h-0" : "h-full"} overflow-clip`}
          transition={{
            duration: 0.2,
            ease: "circOut",
          }}
        >
          <UserSection key="UserSection" />
          <NavBar key="NavBar" />
        </motion.div>

        <motion.div
          layout
          transition={{ duration: 0.2, ease: "circOut" }}
          // className={`${showNav === true ? "border-b-4 border-t-0" : "border-b-0 border-t-4"}`}
        >
          <button
            className={`w-0 h-0 place-self-center block border-l-transparent border-r-transparent border-l-16 border-r-16 ${showNav === true ? "border-b-16 border-t-0" : "border-b-0 border-t-16"}`}
            onClick={toggleNav}
          ></button>
        </motion.div> */}
      </header>
    </>
  );
}
