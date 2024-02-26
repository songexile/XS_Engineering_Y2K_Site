"use client";

import Layout from "@/components/layouts/layout";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
  const container = useRef();
  useGSAP(
    () => {
      const t1 = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      gsap.to("#products", { x: 10 }, {});
      gsap.to("#row-1", { x: 10 }, { delay: 5 }); // <-- automatically reverted
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <Layout>
      <div
        id="mbk"
        style={{ backgroundImage: "url('web_assets/MBK1.jpg')" }}
        className=" h-full bg-blue-400  w-full sm:w-8/12 flex flex-col items-center  justify-start"
        ref={container}
      >
        <div className="w-52 h-FULL  mt-16 text-white  rounded-t-lg shadow-xl   flex items-center justify-start flex-col">
          <div
            id="products"
            className=" blue-gradient  text-white w-full border-b-2 rounded-t-lg  h-6 flex items-center justify-center text-sm"
          >
            <h1>Products </h1>
          </div>
          <div
            id="row-1"
            className="h-1/6  w-full border flex items-center justify-start"
          >
            <div className="w-1/12 h-full pink-gradient"></div>
            <div className="w-full h-full pink-gradient flex items-center justify-start text-sm">
              <a href="https://www.google.com" target="_blank">
                <h1>RX7</h1>
              </a>
            </div>
          </div>
          <div
            id="row-2"
            className="h-1/6  w-full border flex items-center justify-start"
          >
            <div className="w-1/12 h-full pink-gradient"></div>
            <div className="w-full h-full pink-gradient flex items-center justify-start text-sm">
              <a href="https://www.google.com" target="_blank">
                <h1>EK CIVIC</h1>
              </a>
            </div>
          </div>
          <div
            id="row-3"
            className="h-1/6  w-full border flex items-center justify-start"
          >
            <div className="w-1/12 h-full pink-gradient"></div>
            <div className="w-full h-full pink-gradient flex items-center justify-start text-sm">
              <a href="https://www.google.com" target="_blank">
                <h1>AKL</h1>
              </a>
            </div>
          </div>

          <div className="h-2 bg-white w-full border flex items-center justify-start"></div>
          <div className="w-full h-2 pink-gradient rounded-b-xl shadow-xl"></div>
        </div>
        <div className="w-52 h-32   flex-col flex items-center justify-start  mt-16  rounded-t-lg   pink-gradient">
          <div className=" blue-gradient  text-white w-full border-b-2 rounded-t-lg  h-6 flex items-center justify-center text-sm">
            <h1>MP3 TrakZ </h1>
          </div>
          <Image
            className="rounded-t-xl shadow-2xl mt-2 mb-4 "
            src="/web_assets/Kriss2.jpg"
            alt="MBK1"
            width={100}
            height={100}
          />
          <div className=" blue-gradient  text-white w-full border-b-2  h-4 flex items-center justify-start text-sm">
            <h1>MADE </h1>
          </div>
          <div className=" blue-gradient  text-white w-full border-b-2  h-4 flex items-center justify-start text-sm">
            <h1>BY </h1>
          </div>
          <div className=" blue-gradient  text-white w-full border-b-2  h-4 flex items-center justify-start text-sm">
            <h1>GITHUB LINK </h1>
          </div>
        </div>
        <svg width="300" height="170" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
      {/* Right side screen div */}
      <div
        className=" h-full bg-white w-full flex-y-4 flex flex-col items-center justify-start"
        style={{
          backgroundImage: "url('/web_assets/paper_background-0000.jpg')",
        }}
      >
        <h1 className="mt-8 text-4xl">Welcome to my website</h1>
        <h1 className=" ">
          This place serves to look like a 2000's website, it uses Next.js .
        </h1>
      </div>
    </Layout>
  );
}
