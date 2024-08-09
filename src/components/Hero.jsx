export default function Hero() {
  return (
    <div className="flex justify-between items-center pt-14 space-x-10 flex-col-reverse md:flex-row">
      <div className="md:w-1/2 flex flex-col justify-center space-y-5 py-8 items-center md:text-left md:items-start text-slate-900">
        <h1 className="font-bold text-3xl md:text-5xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
        </p>
        <div>
          <a
            href=""
            className="bg-orange-500 px-6 py-2 text-white rounded-full hover:bg-slate-900 transition-all ease-in-out w-fit"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_0qfo.svg"
          alt="Hero img"
        />
      </div>
    </div>
  );
}
