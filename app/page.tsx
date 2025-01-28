import Image from "next/image";

import { benefitOne, benefitTwo, CardOne } from "@/app/comp/data";
import { Benefits } from "@/app/comp/Benefits";

import { Bentogrid } from "@/app/comp/bentogrid";

import { Card } from "@/app/comp/Card";
import theSun from "@/public/img/the-sun.jpg";

export default function Home() {
  return (
    <div>
      <div>
        <Benefits imgPos="right" data={benefitOne} />
        <Benefits data={benefitTwo} />
        <Bentogrid />
        <div className="flex flex-wrap gap-4 ">
          <Card image={theSun} heading="Alison Deysel" detail="CEO" />

          <Card image={theSun} heading="Samantha Koch" detail="COO" />

          <Card image={theSun} heading="Lorinda Deysel" detail="CFO" />
        </div>
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
