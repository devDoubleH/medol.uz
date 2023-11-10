"use client";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-screen h-14 flex justify-between items-center p-4 gap-4 z-10 relative">
      <Link href="/">
        <Image src={"/logo.png"} width={134} height={38} alt="Logo" />
      </Link>
      <div className="flex justify-center items-center gap-4">
        <Link
          href={"/"}
          className="w-10 h-10 bg-white flex justify-center rounded-full"
        >
          <Image src={"/phone-icon.svg"} alt="phone" width={22} height={22} />
        </Link>
        <select className="w-20 h-10 text-center bg-white rounded-3xl text-3xl outline-none">
          <option>🇷🇺</option>
          <option>🇺🇿</option>
          <option>🇺🇸</option>
        </select>

        <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
          <Image src={"/menu.svg"} alt="menu" width={20} height={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
