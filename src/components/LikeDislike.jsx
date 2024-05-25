"use client";
import React, { useState } from "react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
export default function LikeDislike() {
  const [inlike, setInlike] = useState("");
  return (
    <div className="flex flex-row w-[80%] justify-between ">
      <span
        className="flex flex-row justify-between text-xl"
        onClick={() => {
          console.log("dislike clicked");
          setInlike("dislike");
        }}
      >
        <BiSolidDislike
          className="mx-3 text-4xl"
          color={inlike === "dislike" ? "#67b384" : "#D3D3D3"}
        />
        <span
          className={`font-bold ${
            inlike === "dislike" ? "text-[#67b384]" : "text-[#000]"
          } `}
        >
          no
        </span>
      </span>
      <span
        className="flex flex-row justify-between text-xl"
        onClick={() => {
          console.log("like clicked");
          setInlike("like");
        }}
      >
        <BiSolidLike
          className="mx-3 text-4xl"
          color={inlike === "like" ? "#67b384" : "#D3D3D3"}
        />
        <span
          className={`font-bold ${
            inlike === "like" ? "text-[#67b384]" : "text-[#000]"
          } `}
        >
          yes
        </span>
      </span>
    </div>
  );
}
