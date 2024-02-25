import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between h-full sm:h-[48rem] "
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
          className="bg-cover bg-center h-8 w-full flex  "
        >
          <div className="w-full h-full  flex items-center gap-x-4 justify-start text-gray-800 text-sm">
            <h1>About</h1>
            <h1>FAQ</h1>
            <h1>Lifestyle</h1>
          </div>
          <div className="w-1/3 h-full "></div>
        </div>
        <div className="h-3 w-full bg-gradient-to-t from-black to-gray-500 border border-b-1 border-t-0 border-white"></div>
        {/* Container looking thing */}
        <div className="bg-white h-[35rem] flex">
          {/* Left side of screen div */}
          <div className=" h-full bg-blue-500 w-8/12 flex flex-col items-center  justify-start">
            <div className="w-52 h-28  mt-16  rounded-t-lg shadow-xl   flex items-center justify-start flex-col">
              <div className=" blue-gradient text-white w-full border-b-2 rounded-t-lg  h-6 flex items-center justify-center text-sm">
                <h1>Products and Services</h1>
              </div>
              <div className="h-1/6 bg-blue-400 w-full border flex items-center justify-start">
                <div className="w-1/12 h-full blue-gradient"></div>
                <div className="w-full h-full pink-gradient"></div>
              </div>
              <div className="h-1/6 bg-blue-400 w-full border flex items-center justify-start">
                <div className="w-1/12 h-full blue-gradient"></div>
                <div className="w-full h-full pink-gradient"></div>
              </div>
              <div className="h-1/6 bg-blue-400 w-full border flex items-center justify-start">
                <div className="w-1/12 h-full blue-gradient"></div>
                <div className="w-full h-full pink-gradient"></div>
              </div>
              <div className="h-1/6 bg-blue-400 w-full border flex items-center justify-start">
                <div className="w-1/12 h-full blue-gradient"></div>
                <div className="w-full h-full pink-gradient"></div>
              </div>
              <div className="h-1/6 bg-blue-400 w-full border flex items-center justify-start">
                <div className="w-1/12 h-full blue-gradient"></div>
                <div className="w-full h-full pink-gradient"></div>
              </div>
              <div className="h-2 bg-white w-full border flex items-center justify-start"></div>
              <div className="w-full h-2 pink-gradient rounded-b-xl shadow-xl"></div>
            </div>
            <div className="w-52 h-24  mt-16 rounded-t-lg   bg-red-500"></div>
            <svg
              width="300"
              height="170"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
          {/* Right side screen div */}
          <div
            className=" h-full bg-white w-full flex flex-col items-center justify-start"
            style={{
              backgroundImage: "url('/web_assets/paper_background-0000.jpg')",
            }}
          >
            <div className="w-8/12 h-52 rounded-md mt-24 bg-red-500"></div>
            <div className="w-8/12 h-24 rounded-md mt-8 bg-red-500"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
