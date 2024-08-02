"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        className={`footer bg-dark-footer relative text-gray-200 ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div className="container relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-4 md:col-span-12">
                    <Link href="#" passHref>
                      <Image
                        src="/assets/images/logo-dark.png"
                        alt="Logo"
                        className="text-[22px] focus:outline-none"
                        width={200}
                        height={200}
                      />
                    </Link>
                    <p className="mt-6 text-gray-300">
                      Start working with Tailwind CSS that can provide
                      everything you need to generate awareness, drive traffic,
                      connect.
                    </p>
                    <ul className="list-none mt-6">
                      <li className="inline">
                        <Link
                          href="http://linkedin.com/company/rabalan"
                          passHref
                        >
                          <div className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                            <i
                              className="uil uil-linkedin"
                              title="Linkedin"
                            ></i>
                          </div>
                        </Link>
                      </li>
                      <li className="inline">
                        <Link href="https://www.facebook.com/rabalan" passHref>
                          <div className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                            <i
                              className="uil uil-facebook-f align-middle"
                              title="facebook"
                            ></i>
                          </div>
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="https://www.instagram.com/rabalan/"
                          passHref
                        >
                          <div className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                            <i
                              className="uil uil-instagram align-middle"
                              title="instagram"
                            ></i>
                          </div>
                        </Link>
                      </li>
                      <li className="inline">
                        <Link href="https://twitter.com/rabalan" passHref>
                          <div className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                            <i
                              className="uil uil-twitter align-middle"
                              title="twitter"
                            ></i>
                          </div>
                        </Link>
                      </li>
                      <li className="inline">
                        <Link href="mailto:support@rabalan.com" passHref>
                          <div className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                            <i
                              className="uil uil-envelope align-middle"
                              title="email"
                            ></i>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-2 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Company
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      <li>
                        <Link href="/about-us" passHref>
                          About us
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link href="/page-privacy.html" passHref>
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link href="/page-faq.html" passHref>
                          FAQ
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link href="/page-support.html" passHref>
                          Support
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Contact Us
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      <li>
                        <Link href="mailto:support@rabalan.com" passHref>
                          support@rabalan.com
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link href="tel:+1234567890" passHref>
                          +123 456 7890
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link href="#" passHref>
                          123 Street, City, Country
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Newsletter
                    </h5>
                    <p className="mt-6">Sign up and receive the updates.</p>
                    <form>
                      <div className="grid grid-cols-1">
                        <div className="my-3">
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="mail"
                              className="size-4 absolute top-3 start-4"
                            ></i>
                            <input
                              type="email"
                              className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200"
                              placeholder="Email"
                              name="email"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          id="submitsubscribe"
                          name="send"
                          className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container relative text-center">
            <div className="grid md:grid-cols-2 items-center">
              <div className="md:text-start text-center">
                <p className="mb-0">
                  © <script>document.write(new Date().getFullYear())</script>
                  <Link
                    href="https://rabalana.com"
                    target="_blank"
                    className="text-reset"
                    passHref
                  >
                    Rabalana
                  </Link>
                  . All rights reserved.
                </p>
              </div>

              <ul className="list-none md:text-end text-center mt-6 md:mt-0"></ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Popup 
      <div className="cookie-popup fixed max-w-lg bottom-3 end-3 start-3 sm:start-0 mx-auto bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md py-5 px-6 z-50">
        <p className="text-slate-400">
          This website uses cookies to provide you with a great user experience.
          By using it, you accept our{" "}
          <Link href="https://shreethemes.in" passHref>
            use of cookies
          </Link>
        </p>
        <div className="cookie-popup-actions text-end">
          <button
            onClick={() =>
              document.querySelector(".cookie-popup")?.classList.add("hidden")
            }
            className="absolute border-none bg-none p-0 cursor-pointer font-semibold top-2 end-2"
          >
            <i className="uil uil-times text-dark dark:text-slate-200 text-2xl"></i>
          </button>
        </div>
      </div>
      */}

      {/* Back to Top */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 size-9 text-center bg-indigo-600 text-white leading-9"
      >
        <i className="uil uil-arrow-up"></i>
      </a>

      {/* Dark Mode Switcher */}
      <div className="fixed top-[30%] -right-2 z-50">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
            onChange={toggleDarkMode}
            checked={isDarkMode}
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk"
          >
            <i className="uil uil-moon text-[20px] text-yellow-500"></i>
            <i className="uil uil-sun text-[20px] text-yellow-500"></i>
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
          </label>
        </span>
      </div>
    </>
  );
};

export default Footer;
