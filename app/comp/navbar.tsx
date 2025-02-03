"use client";
import React from "react";


{
  /* Fix
  > Create Menu Component to import here and reuse              (2)
  > Create Headlessui using react componnent for mobile menu    (2)
  > Add Theme changer
  ----------------------------------------------------------------------
  Component Status                                              (5.5)
  */
}

import Image from "next/image";

import Logos from "@/app/favicon.ico";

import { useState } from "react";
import TitleSlide from "@/public/img/AURORA_NEW_123.png";

import { Logo } from "@/app/comp/logo";
import { Nav } from "@/app/comp/nav";

interface NavbarProps {
  nav: any;
}

export function Navbar(props: Readonly<NavbarProps>) {
  const [mmenu, setMmenu] = useState(false);
  function handleClick() {
    setMmenu(!mmenu);
  }

  return (
    <nav className=" bg-white border-gray-200  ">
      <Image
        src={TitleSlide}
        alt="Title Slide"
        width={2000}
        className="w-full"
      />
      <div className="flex">
        <Logo
          image={Logos}
          className="flex items-center space-x-3 rtl:space-x-reverse hover:text-green-700 self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          href="#"
        />
        {/*Cant get mobile menu icon to stick to the right side */}
        <div className="max-w-screen-xl flex flex-wrap mx-auto p-5 md:order-1">
          <div className="">
            <button
              onClick={handleClick}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="md:justify-end text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between w-full md:flex md:w-auto md:order-2 hidden">
            <Nav
              listFormat="flex flex-col mx-auto"
              linkFormat=" text-xl bg-green-500  rounded-3xl p-3   hover:bg-green-300"
              nav={props.nav}
            />
          </div>
        </div>
      </div>
      {mmenu && (
        <div
          className="fixed top-20 right-20 z-40 w-32 h-screen p-4 overflow-y-auto transition-transform -translate-x-1  "
          aria-labelledby="drawer-navigation-label"
          onClick={handleClick} >
          <Nav
            
            listFormat="flex flex-col mx-auto gap-y-4"
            linkFormat="text-lg bg-green-600 hover:bg-green-300 rounded-2xl p-2 "
            nav={props.nav}
          />
        </div>
      )}
    </nav>
  );
}
