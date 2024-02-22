import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between "
      style={{ backgroundImage: "url('/background-img.jpg')" }}
    >
      <div className="mx-64 w-5/6 shadow-xl">
        <div
          style={{ backgroundImage: "url('/header-top.jpg')" }}
          className="bg-cover bg-center h-4 w-full "
        ></div>
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
        <div className="h-2 w-full bg-gradient-to-t from-black to-gray-500 border border-white"></div>
      </div>
    </main>
  );
}
