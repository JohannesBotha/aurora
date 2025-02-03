import React from "react";
import { Card } from "@/app/comp/card";
import Image from "next/image";
import BusinessCard from "@/public/img/AURORA_NEW_12.png";

import { Cta } from "@/app/comp/cta";

import AlisonPic from "@/public/img/Alison_Deysel.jpg";
import SamPic from "@/public/img/Samantha Koch.jpg";
import LorindaPic from "@/public/img/Lorinda_Deysel.jpg";
export default function About() {
  return (
    <>
      <Cta />
      <div className=" gap-4 columns-3">
        <Card
          image={AlisonPic}
          heading="Alison Deysel"
          detail="CEO"
          className=""
        />

        <Card
          image={SamPic}
          heading="Samantha Koch"
          detail="COO"
          className="grow"
        />

        <Card
          image={LorindaPic}
          heading="Lorinda Deysel"
          detail="CFO"
          className="grow"
        />
      </div>

      <Image src={BusinessCard} alt="Contact Details of company" width={1000} />
    </>
  );
}
