{
  /* Create
        Card(Image,Text,Link)
        Parent: 

*/
}

import Image from "next/image";

interface CardProps {
  className?: string;
  image: any;
  imgStyle?: string;
  heading: string;
  detail: string;
}

export function Card(props: Readonly<CardProps>) {
  return (
    <span className={props.className ? props.className : ""}>
      <Image
        className={`rounded-xl mb-4 ${props.imgStyle ? props.imgStyle : ""}`}
        src={props.image}
        alt=""
      />

      <span className="">
        <h5 className="mb-2 text-2xl font-bold tracking-tigh ">
          {props.heading}
        </h5>

        <p className="mb-3 font-normal">{props.detail}</p>
      </span>
    </span>
  );
}
{
  /*People.Team



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




PricesO


<div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Best option for personal use & for your next project.
            </p>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">$29</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
    */
}
