import React from "react";

const Footer = () => {
  return (
    <div
      className={`flex w-full items-center justify-center h-20 border-t border-gray-900`}
    >
      <div className="container flex text-center justify-center">
        <p>
          Made with ❤️ by{" "}
          <a href="https://twitter.com/vavax002" className="text-blue-400">
            Pawel Skiba
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
