import Image from "next/image";

import { benefitOne, benefitTwo, CardOne } from "@/app/comp/data";
import { Benefits } from "./comp/benefits";
import { Cta } from "./comp/cta";
import { FeatureList } from "./comp/featurelist";
import AuroraWealth from "@/public/img/aurora_gold.png";
export default function Home() {
  return (
    <div>
      <div>
        <Cta />

        <FeatureList
          title="Aurora Tax services:"
          description="We offer the best service "
          subTitle="Subtitle is"
          image={AuroraWealth}
          features={[
            "In 20 years we have probably seen it in personal taxes",
            "We gladly do taxes for sole-propriators",
          ]}
        />

        <Benefits imgPos="right" data={benefitOne} />
        <Benefits data={benefitTwo} />
        <Cta />
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
