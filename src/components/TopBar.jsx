import React from 'react'
import { GiNetworkBars } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { FaBatteryFull } from "react-icons/fa";
export default function TopBar() {
  return (
    <div className="flex flex-row justify-between">
        <span>9:45</span>
        <div className="flex flex-row w-[20%] justify-between">
        <GiNetworkBars />
        <IoWifi />
        <FaBatteryFull />

        </div>
    </div>
  )
}
