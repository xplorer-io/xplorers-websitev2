import AccoladesPage from "@components/pages/AccoladesPage";
import { NextPage } from "next";
import React from "react";

export const metadata = {
  title: "Xplorers | Accolades",
  description: "Xplorers website",
};

const Index: NextPage = () => {
  return (
    <div>
      <AccoladesPage />
    </div>
  );
};

export default Index;
