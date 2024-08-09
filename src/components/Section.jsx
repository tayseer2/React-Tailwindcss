export default function Section() {
  return (
    <div className="my-32 text-center">
      <h1 className="font-bold text-4xl">
        “Best practices” don’t actually work.
      </h1>
      <p className="mt-8 max-w-5xl mx-auto">
        I’ve written a few thousand words on why traditional “semantic class
        names” are the reason CSS is hard to maintain, but the truth is you’re
        never going to believe me until you actually try it. If you can suppress
        the urge to retch long enough to give it a chance, I really think you’ll
        wonder how you ever worked with CSS any other way.
      </p>

      <div className="mt-10 flex flex-col space-x-0 space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        <div className="md:w-1/3 flex flex-col items-center p-6 space-y-2 rounded-lg border border-slate-200 bg-slate-100 hover:bg-white transition-all ease-in-out">
          <img
            src="/1.png"
            alt=""
            className="w-16 rounded-full -mt-12"
          />
          <h5>Adam Sandler</h5>
          <p>
            The way I wrote it changed frequently. It’s not a coincidence
            Tailwind was released the same year. It might look wrong, but spend
            time with it and you’ll realize semantic CSS was a 20 year mistake.
          </p>
        </div>

        <div className="md:w-1/3 flex flex-col items-center p-6 space-y-2 rounded-lg border border-slate-200 bg-slate-100 hover:bg-white transition-all ease-in-out">
          <img
            src="/2.png"
            alt=""
            className="w-16 rounded-full -mt-12"
          />
          <h5>Madeline Bauer</h5>
          <p>
            I have no design skills and with Tailwind I can actually make good
            looking websites with ease and It’s everything I ever wanted in a
            CSS framework.
          </p>
        </div>

        <div className="md:w-1/3 flex flex-col items-center p-6 space-y-2 rounded-lg border border-slate-200 bg-slate-100 hover:bg-white transition-all ease-in-out">
          <img
            src="/3.png"
            alt=""
            className="w-16 rounded-full -mt-12"
          />
          <h5>Marcel Khalifa</h5>
          <p>
            I started using @tailwindcss. I instantly fell in love with their
            responsive modifiers, thorough documentation, and how easy it was
            customizing color palettes.
          </p>
        </div>
      </div>
    </div>
  );
}
