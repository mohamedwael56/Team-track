import React from "react";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

function Page() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-68">
      <Header />
      </div>
    </div>
  );
}

export default Page;
