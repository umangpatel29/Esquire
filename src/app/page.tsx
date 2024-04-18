'use client'
import { useState } from "react";
import EsquireComponents from "@/components/EsquireComponents";
import Header from "@/components/Header/Header";
import Image from "next/image";
import React from "react";
import { TabProvider } from "@/context/tabContext";
import ChatBox from "@/components/ChatBox";

export default function Home() {

  return (
    <TabProvider>

      <div className="relative">
        <div className="sticky top-0 z-20">
          <Header />
        </div>

        <div className="h-[calc(100vh-90px)] z-10">
          <EsquireComponents />
        </div>

        <ChatBox />

      </div>
    </TabProvider>
  );
}
