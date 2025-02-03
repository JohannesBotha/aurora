"use client";

import { submitForm } from "./actions";
import { useFormState } from "react-dom";

export  function ContactF() {
  const [result, formAction] = useFormState(submitForm, null);
  return (
    <section className="bg-white ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16  text-center text-gray-600  sm:text-xl">
          Do you have a taxrelated question or are interested in partnering up.
          Please contact us...
        </p>
        <form action={formAction} className="space-y-8">
          <input
            type="hidden"
            name="access_key"
            value="8461831b-6c08-4586-8302-dd960d36aac6"
          />
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="name@aurora.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className=" py-3 px-5 text-md font-bold text-center text-gray-900 bg-pink-200 hover:text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
          >
            Send message
          </button>
          <span>{result?.message}</span>
        </form>
      </div>
    </section>
  );
}
