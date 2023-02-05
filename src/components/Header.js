// import React from 'react'
import Image from "next/image";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingCartIcon
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header>
        {/* Top Nav */}
        <div className="flex items-center bg-amazon_blue p-2 flex-grow py-4">
            {/* Logo */}
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image src={"/images/amazon-nav.png"} width={150} height={40}
                objectFit="contain" className="cursor-pointer" />
            </div>
            {/* Search Bar */}
            <div className="bg-yellow-400 hover:bg-yellow-500 items-center rounded-md flex-grow cursor-pointer h-10 hidden sm:flex">
                <input type="text" className="flex-grow flex-shrink p-2 h-full w-6 rounded-tl-md rounded-bl-md focus:outline-none" />
                <MagnifyingGlassIcon className="h-12 p-3"/>
            </div>
            {/* Right Bar */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6">
                <div className="link">
                    <p>Hello Mohammed Alhamed!</p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                </div>
                <div className="link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                <div className="link relative flex items-center">
                   <span className=" absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-extrabold">8</span>
                   <ShoppingCartIcon className="h-10" />
                   <p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p> 
                </div>
            </div>
        </div>
        {/* Bottom Nav */}
        <div className="bg-amazon_blue-light flex items-center text-sm text-white p-2 space-x-3">
            <p className="link flex items-center">
                <Bars3Icon className="h-6 mr-1" />
                All
            </p>
            <p className="link">
                Prime Video
            </p>
            <p className="link">
                Amazon Business
            </p>
            <p className="link">
                Today's Deals
            </p>
            <p className="hidden lg:inline-flex link">
                Electronics
            </p>
            <p className="hidden lg:inline-flex link">
                Food & Grocery
            </p>
            <p className="hidden lg:inline-flex link">
                Prime
            </p>
            <p className="hidden lg:inline-flex link">
                Buy Again
            </p>
            <p className="hidden lg:inline-flex link">
                Shopper Toolkit
            </p>
            <p className="hidden lg:inline-flex link">
                Health & Personal Care
            </p>
        </div>
    </header>
  )
}
