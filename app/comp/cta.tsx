{
  /* Breakdown
> Create interface for variables
> make responsive
*/
}
import React from "react";
import Link from "next/link";



export function Cta() {
  return (
    <div className="flex py-5 px-5 items-center justify-between  w-auto  mt-5 mb-5 text-white bg-gray-500 rounded-3xl ">
      <div className="text-left ">
        <h2 className="text-3xl font-medium">Ready to sort out your taxes?</h2>
        <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Don&apos;t let taxes get you down.
        </p>
      </div>
      <div className="flex-shrink-0 w-full text-center lg:w-auto">
        <Link
          href="/Contact"
          target="_blank"
          rel="noopener"
          className="inline-block py-3 mx-auto text-lg font-medium text-center text-green-600 hover:text-black bg-white rounded-md px-7 lg:px-10 lg:py-5 "
        >
          CONTACT US NOW
        </Link>
      </div>
    </div>
  );
}
