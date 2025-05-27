import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex ">
      {/* Left */}
      <div className="w-[15%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
        <Link
          href="/"
          className="flex justify-center items-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">SchooLama</span>
        </Link>
        <Menu />
      </div>
      {/* Right */}
      <div className="w-[85%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] flex flex-col ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
