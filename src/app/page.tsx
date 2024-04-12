'use client'
import { useState } from "react";
import EsquireComponents from "@/components/EsquireComponents";
import Header from "@/components/Header/Header";
import Image from "next/image";
import React from "react";
import { TabProvider } from "@/context/tabContext";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <TabProvider>

      <div className="relative">
        <div className="sticky top-0 z-20">
          <Header />
        </div>
        <div className="h-[calc(100vh-90px)] z-10">
          <EsquireComponents />
        </div>


        <div className='fixed flex items-end gap-2 right-10 bottom-10'>
          {isChatOpen && (
            <div className="h-[450px] bg-white w-[300px] relative border-2 rounded-xl">
              <div className="absolute top-0 bg-cyan-800 rounded-t-lg text-white font-semibold border-b-2 text-center py-2 w-full">
                Ask Esquire
              </div>
              <div className="border-t-2 px-2 py-1 flex gap-3 items-center absolute bottom-0 right-0 w-full rounded">
                <div className="h-8 w-10 flex justify-center items-center rounded-full overflow-hidden border-2">
                  <Image src='' alt="user" width={20} height={20} className="object-cover" />
                </div>
                <input type="text" placeholder="write your message" className="w-full outline-none border-l-2 px-2" />
              </div>
            </div>
          )}
          <div onClick={() => setIsChatOpen(!isChatOpen)}>
            <div className={`h-[50px] w-[50px] cursor-pointer `}>
              {
                isChatOpen ?
                  <Image src='/icons/cross.svg' alt="" width={40} height={40} className="object-cover h-full w-full" />
                  :
                  <Image src='/icons/plus.svg' alt="" width={40} height={40} className="object-cover h-full w-full" />
              }
            </div>
          </div>
        </div>
      </div>
    </TabProvider>

  );
}
