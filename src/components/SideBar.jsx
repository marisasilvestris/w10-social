"use client";
import { Show, SignIn, SignUpButton, UserButton } from "@clerk/nextjs";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import NavBar from "./NavBar";
import UserSection from "./UserSection";

export default function SideBar() {
  const [showSideBar, setShowSideBar] = useState(true);

  function toggleSideBar() {
    setShowSideBar(!showSideBar);
  }
  return (
    <>
      <motion.div
        className={`sideBar w-full md:w-2xs bg-secondary md:bg-primary text-primary md:text-secondary border-r-4 flex flex-row md:flex-col relative overflow-hidden ${showSideBar === false ? "h-0" : "h-full"}`}
        transition={{
          duration: 0.2,
          ease: "circOut",
        }}
      >
        <UserSection />

        <Show when={`signed-out`}>
          <div className="signedOut">
            {/* <SignIn /> */}
            {/* <SignUpButton /> */}
          </div>
        </Show>

        <NavBar />
      </motion.div>

      {/* <motion.div
        layout
        transition={{ duration: 0.2, ease: "circOut" }}
        className={`${showSideBar === true ? "border-b-4 border-t-0" : "border-b-0 border-t-4"}`}
      >
        <button
          className={`w-0 h-0 place-self-center block border-l-transparent border-r-transparent border-l-16 border-r-16 ${showSideBar === true ? "border-b-16 border-t-0" : "border-b-0 border-t-16"}`}
          onClick={toggleSideBar}
        ></button>
      </motion.div> */}
    </>
  );
}

// <motion.div
//   layout
//   className={`flex flex-row gap-4 w-fit text-lg place-self-center ${showNav === false ? "h-0" : "h-full"} overflow-clip`}
//   transition={{
//     duration: 0.2,
//     ease: "circOut",
//   }}
// >
//   <UserSection key="UserSection" />
//   <NavBar key="NavBar" />
// </motion.div>

// <motion.div
//   layout
//   transition={{ duration: 0.2, ease: "circOut" }}
//   // className={`${showNav === true ? "border-b-4 border-t-0" : "border-b-0 border-t-4"}`}
// >
//   <button
//     className={`w-0 h-0 place-self-center block border-l-transparent border-r-transparent border-l-16 border-r-16 ${showNav === true ? "border-b-16 border-t-0" : "border-b-0 border-t-16"}`}
//     onClick={toggleNav}
//   ></button>
// </motion.div>
