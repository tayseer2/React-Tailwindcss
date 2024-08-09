import { useState } from "react";

function Navbar() {
  const [showbBtn, setShowbBtn] = useState(false);
  return (
    <>
      <nav>
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo-light.png" alt="tailwindcss" width="200px" />
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="" className="text-slate-900 hover:text-orange-500">
              Protfolio
            </a>
            <a href="" className="text-slate-900 hover:text-orange-500">
              About
            </a>
            <a href="" className="text-slate-900 hover:text-orange-500">
              Contact
            </a>
            <a href="" className="text-slate-900 hover:text-orange-500">
              Social
            </a>
            <a
              href=""
              className="bg-orange-500 px-6 py-2 text-white rounded-full hover:bg-slate-900 transition-all ease-in-out  "
            >
              Call Me
            </a>
          </div>
          <span className="icon-menu md:hidden text-slate-900 hover:text-orange-500 cursor-pointer text-2xl" onClick={() => setShowbBtn(!showbBtn)}></span>
        </div>
        {showbBtn && (
          <div className="md:hidden absolute bg-gray-50 py-8 left-6 right-6 px-12 space-y-4 drop-shadow-lg border border-gray-300 flex flex-col items-center mt-5 font-bold	">
            <a href="" className="text-slate-900 hover:text-orange-500">
              Protfolio
            </a>
            <a href="" className="text-slate-900 hover:text-orange-500">
              About
            </a>
            <a href="" className="text-slate-900 hover:text-orange-500">
              Contact
            </a>
            <a href="" className="text-slate-900 hover:text-orange-500">
              Social
            </a>
            <a
              href=""
              className="bg-orange-500 px-6 py-2 text-white rounded-full hover:bg-slate-900 transition-all ease-in-out  "
            >
              Call Me
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
