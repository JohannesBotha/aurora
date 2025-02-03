{
  /*Create 
  
  NavT([menu items],Hstyle), NavF([menu],Fstyle),NavM([menu],Mstyle)
  
  Parents: Navbar, MobileMenu, Footer*/
}
import Link from "next/link";


interface NavProps {
  listFormat?: string;
  linkFormat?: string;
  nav: any;
}

export function Nav(props: Readonly<NavProps>) {
  return (
    <ul
      className={`flex flex-col  md:p-0  md:space-x-12 rtl:space-x-reverse md:flex-row ${
        props.listFormat === "" ? "" : props.listFormat
      }`}
    >
      {props.nav.map((menu, index) => (
        <li className="block " key={index}>
          <Link
            className={props.linkFormat}
            href={menu === "Home" ? "/" : menu}
          >
            {menu}
          </Link>
        </li>
      ))}
    </ul>
  );
}
