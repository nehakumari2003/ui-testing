"use client";

import { Cards } from "@/components/cards";
import { Header } from "@/components/header";
import { Header1 } from "@/components/header1";

export default function Home() {
  return (
    <>
      <div className="dark flex items-center h-screen content-center">
        <Header />
      </div>
      <div className="dark bg-black flex items-center h-screen content-center">
        <Header1 />
      </div>
      <div className="dark bg-black flex items-center h-screen content-center">
        <Cards />
      </div>
    </>
  );
}
