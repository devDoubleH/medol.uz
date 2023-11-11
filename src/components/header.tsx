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
          className="w-10 h-10 bg-white hidden justify-center rounded-full md:flex"
        >
          <Image src={"/gps.svg"} alt="phone" width={22} height={22} />
        </Link>
        <Link
          href={"/"}
          className="w-10 h-10 bg-white flex justify-center rounded-full"
        >
          <Image src={"/phone-icon.svg"} alt="phone" width={22} height={22} />
        </Link>
        <Link
          href={"/"}
          className="w-10 h-10 bg-white hidden justify-center rounded-full md:flex"
        >
          <Image src={"/search.svg"} alt="phone" width={22} height={22} />
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

const LaptopHeader = () => {
  return (
    <header className="w-screen h-14 flex flex-col justify-between items-center p-4 gap-4 z-10 relative">
      <div className="flex w-full h-14 justify-center items-center gap-6">
        <div className="flex justify-start items-center gap-4 mt-4">
          <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
            <Image src={"/gps.svg"} alt="svg" width={20} height={20} />
          </div>
          <p>
            г.Ташкент, Чиланзар <br />
            10 квартал, дом 3/1
          </p>
        </div>
        <div className="flex justify-start items-center gap-4 mt-4">
          <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
            <Image src={"/phone.svg"} alt="svg" width={20} height={20} />
          </div>
          <div className="flex flex-col">
            <p>+998 71 276-62-53</p>
            <p>+998 71 276-62-54</p>
          </div>
        </div>
        <Link href="/">
          <Image src={"/logo.png"} width={134} height={38} alt="Logo" />
        </Link>

        <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
          <Image src={"/search.svg"} alt="svg" width={20} height={20} />
        </div>

        <div className="flex gap-4 px-4 justify-center items-center rounded-full bg-white h-10">
          <Image src={"/facebook.svg"} alt="svg" width={20} height={20} />
          Мы на Facebook
        </div>

        <select className="w-20 h-10 text-center bg-white rounded-3xl text-3xl outline-none">
          <option>🇷🇺</option>
          <option>🇺🇿</option>
          <option>🇺🇸</option>
        </select>
      </div>
      <div className="w-full"></div>
    </header>
  );
};

export default LaptopHeader;
