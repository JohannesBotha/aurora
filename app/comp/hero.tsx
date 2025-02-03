{
  /* Breakdown
  
    > Not using container, remove
    > Create logo object for dynamic logo additions
    > Fix Picture stretch to go to next row
  
  */
}
import heroImg from "@/public/img/the-sun.jpg";
import Image from "next/image";

import Link from "next/link";
interface HeroProps {
  title: string;
  description: string;
  image?: any;
}
export function HeroI(props: Readonly<HeroProps>) {
  return (
    <div className="z-10 ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            {props.title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-pink-500 lg:mb-8 md:text-lg lg:text-xl ">
            {props.description}
          </p>
          <Link
            href="#"
            className="mt-5 ml-2 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-pink-500 hover:text-pink-700  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 border border-gray-300 rounded-lg"
          >
            Get started
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:text-pink-500 focus:ring-4 focus:ring-gray-100 "
          >
            Calculate your saving
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={props.image} alt="mockup" />
        </div>
      </div>
    </div>
  );
}

export function HeroT(props: Readonly<HeroProps>) {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-3 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-32">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              {props.title}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              {props.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </div>
  );
}
