import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between h-[48rem] "
      style={{ backgroundImage: "url('/background-img.jpg')" }}
    >
      <div className="mx-64 w-5/6 lg:w-4/6 xl:w-4/6 shadow-xl mt-4">
        <div
          style={{ backgroundImage: "url('/header-top.jpg')" }}
          className="bg-cover bg-center flex h-4 w-full "
        >
          <div className="w-full h-full  flex items-center gap-8 justify-end mx-8  text-gray-700 text-md">
            <h1>HOME</h1>
            <h1>CONTACT US</h1>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('/banner.jpg')" }}
          className="bg-auto h-[5.6rem]  w-full "
        ></div>
        <div
          style={{ backgroundImage: "url('/header-top.jpg')" }}
          className="bg-cover bg-center h-4 w-full flex  "
        >
          <div className="w-full h-full  flex items-center gap-16 justify-start text-gray-800 text-sm">
            <h1>About</h1>
            <h1>FAQ</h1>
            <h1>Lifestyle</h1>
          </div>
          <div className="w-1/3 h-full "></div>
        </div>
        <div className="h-3 w-full bg-gradient-to-t from-black to-gray-500 border border-b-1 border-t-0 border-white"></div>
        {/* Container looking thing */}
        <div className="bg-white h-[35rem] flex">
          <div className=" h-full bg-blue-500 w-8/12 flex"></div>
          <div
            className=" h-full bg-blue-500 w-full"
            style={{
              backgroundImage: "url('/web_assets/paper_background-0000.jpg')",
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}
