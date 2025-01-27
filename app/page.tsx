import Image from "next/image";
import { Bentogrid } from "@/app/comp/bentogrid";
import { Bento } from "@/app/comp/bento";

export default function Home() {
  return (
    <div>
      <div>
        <Bento />
      </div>
    </div>
  );
}
{
  /*
  
  Fix Components: 
  Video, 
  Contact, 
  Footer (md:2col like ProofG Responsiveness), 
  Navbar (Pretty Mobile menu), 
  Faq(split into components)
  
  Create: 
  Social(T,F,I,L),
  Card(Image,Text,Link,Text)
  */
}
