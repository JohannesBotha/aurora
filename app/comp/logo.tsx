{
  /* Create*/
}

import Link from "next/link";
import Image from "next/image";


interface LogoProps {
  className: string;
  image: any;
  href?: any;
}

export function Logo(props: Readonly<LogoProps>) {
  return (
    <Link href={props.href} className={props.className}>
      <Image src={props.image} className="h-8" alt="Aurora Logo" width={44} />
      <span>AURORA</span>
    </Link>
  );
}
