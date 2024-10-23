"use client";

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="w-full py-3 px-5 bg-cyan-400 grid grid-cols-8 items-center ">
      <h1 className="justify-self-center col-span-7">topbar</h1>
      <IoMdClose
        className="justify-self-end hover:opacity-50 cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
    </div>
  ) : (
    <></>
  );
};

export default Topbar;
