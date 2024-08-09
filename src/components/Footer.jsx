export default function Footer() {
  return (

    <footer className="bg-slate-900 text-white">
      <div className="container max-w-screen-xl mx-auto p-4 md:py-8 text-white">
        <div className="flex flex-col items-center space-y-10 md:flex-row md:justify-between md:items-center">
          <img
            src="/logo-dark.png"
            className="h-8 md:self-end" 
            alt="Flowbite Logo"
          />

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex">
            <div className="flex space-x-4">
              <a href="" className="icon-facebook2 text-2xl"></a>
              <a href="" className="icon-instagram1 text-2xl"></a>
              <a href="" className="icon-youtube text-2xl"></a>
              <a href="" className="icon-linkedin2 text-2xl"></a>
              <a href="" className="icon-twitter1 text-2xl"></a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">
          © 2024{" "}
          <a href="" className="hover:underline">
            TiSo™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
