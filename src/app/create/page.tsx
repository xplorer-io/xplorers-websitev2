import CreateAccoladePage from "@components/CreateAccolade";
import QuillEditor from "@components/QuillEditor";
import { NextPage } from "next";
import React from "react";

const Index: NextPage = () => {
  return (
    <div>
      <CreateAccoladePage />
      {/* <QuillEditor /> */}
    </div>
  );
};

export default Index;
