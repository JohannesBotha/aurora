{
  /* Breakdown*/
}

import React from "react";

import Image from "next/image";
import Link from "next/link";

import memOneImg from "@/public/next.svg";
import memTwoImg from "@/public/next.svg";
import memThreeImg from "@/public/next.svg";

export function Team() {
  return (
    <div className="container flex grid-cols-3 gap-8">
      <div className="w-1/3 col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/About">
          <Image
            className=" object-cover rounded-t-lg px-5"
            src={memOneImg}
            alt=""
            layout="responsive"
            sizes="(700px)"
          />
        </Link>
        <div className="p-5">
          <Link href="/About">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Alison Deysel
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            CEO
          </p>
          <Link
            href="/Contact"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  "
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="w-1/3 col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/About">
          <Image className="object-cover rounded-t-lg" src={memTwoImg} alt="" />
        </Link>
        <div className="p-5">
          <Link href="/About">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Samatha Koch
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            COO
          </p>
          <Link
            href="/Contact"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="w-1/3 col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/About">
          <Image
            className="object-cover rounded-t-lg"
            src={memThreeImg}
            alt=""
          />
        </Link>
        <div className="p-5">
          <Link href="/About">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Lorinda Deysel
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            CFO
          </p>
          <Link
            href="/Contact"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export function TeamT() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div className="flex items-center gap-x-6">
              <Image className="size-16 rounded-full" src={memOneImg} alt="" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                  Leslie Alexander
                </h3>
                <p className="text-sm/6 font-semibold text-indigo-600">
                  Co-Founder / CEO
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
