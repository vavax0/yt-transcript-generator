import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <header
      className={`flex w-full items-center justify-center h-20 border-b border-gray-900`}
    >
      <div className="container flex justify-center">
        <a
          className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
          href="http://videojoy.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/videojoy_logo.png"
            alt="VideoJoy Logo"
            width={100}
            height={24}
            priority
          />
        </a>
        {/* <a
          href="/#"
          className="px-6 py-2 text-black font-medium rounded-md bg-white hover:bg-slate-200 transition ease-in-out"
        >
          Get started for free
        </a> */}
      </div>
    </header>
  );
};

export default Navbar;
