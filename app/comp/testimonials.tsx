"use client";
{
  /* Breakdown*/
}
{
  /*
  > Create Component for clients to iterate through
  
  */
}

import Image from "next/image";
import React from "react";

import userOneImg from "@/public/next.svg";
import userTwoImg from "@/public/next.svg";
import userThreeImg from "@/public/next.svg";

export function Testimonials() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
      <div className="lg:col-span-2 xl:col-auto">
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal ">
            &quot;Aurora Financial Services has been a game-changer for our
            business. Their expertise in tax consulting saved us from costly
            errors, and their team is always professional and reliable.&quot;
          </p>

          <Avatar
            image={userOneImg}
            name="Jesica Miller"
            title="CEO of GreenWave Solutions"
          />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal ">
            &quot;The Aurora team is exceptional! They handled our bookkeeping
            and provisional tax returns seamlessly, giving us more time to focus
            on growing our company.&quot;
          </p>

          <Avatar
            image={userTwoImg}
            name="Mark Roberts"
            title="Managing Director at Apex Technologies"
          />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal ">
            &quot;Aurora Financial Services took the stress out of tax season
            for me. Their attention to detail and commitment to excellence are
            unmatched.&quot;
          </p>

          <Avatar
            image={userThreeImg}
            name="Susan Taylor"
            title="Owner of Taylor Designs"
          />
        </div>
      </div>
    </div>
  );
}

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-4 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-md w-14 h-14">
        <Image src={props.image} width="80" height="80" alt="Avatar" />
      </div>
      <div>
        <div className="text-pink-500 text-lg font-medium">{props.name}</div>
        <div className="text-pink-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

import ProfileImage from "@/public/next.svg";

export function TestimonialO() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
              &quot;Landwind is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <Image
              className="w-6 h-6 rounded-full"
              src={ProfileImage}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                Micheal Gough
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                CEO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
