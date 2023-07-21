import AccoladesBox from "@components/AccoladesBox";
import { NextPage } from "next";
import React from "react";

export const metadata = {
  title: "Xplorers | Accolades",
  description: "Xplorers website",
};
const AccoladesPage: NextPage = () => {
  return (
    <div>
      <AccoladesBox />
    </div>
  );
};

export default AccoladesPage;
