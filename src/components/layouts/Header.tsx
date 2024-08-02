"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="topnav" className={`defaultscroll ${menuOpen ? "is-sticky" : ""}`}>
      <div className="container relative">
        {/* Logo container */}
        <Link className="logo ps-0" href="/">
          <span className="sm:hidden">
            <Image
              src="/assets/images/logo-icon-30.png"
              width={30}
              height={30}
              alt="Logo Icon"
            />
          </span>
          <span className="hidden sm:block">
            <Image
              src="/assets/images/logo-dark.png"
              className="inline-block dark:hidden"
              width={150}
              height={24}
              alt="Logo Dark"
            />
            <Image
              src="/assets/images/logo-light.png"
              className="hidden dark:inline-block"
              width={150}
              height={24}
              alt="Logo Light"
            />
          </span>
        </Link>
        {/* End Logo container */}
        <div className="menu-extras">
          <div className="menu-item">
            {/* Mobile menu toggle */}
            <button
              className="navbar-toggle"
              id="isToggle"
              onClick={toggleMenu}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {/* End mobile menu toggle */}
          </div>
        </div>

        {/* Login button Start */}
        <ul className="buy-button list-none mb-0">
          <li className="inline-block mb-0">
            <div className="form-icon relative">
              <i className="uil uil-search text-lg absolute top-1/2 -translate-y-1/2 start-3"></i>
              <input
                type="text"
                className="form-input sm:w-50 w-40 ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 bg-white"
                name="s"
                id="searchItem"
                placeholder="Search..."
              />
            </div>
          </li>

          <li className="dropdown inline-block relative ps-1">
            <button
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
              type="button"
            >
              <Image
                src="/assets/images/client/05.jpg"
                className="rounded-full"
                width={30}
                height={30}
                alt="User Avatar"
              />
            </button>
            {/* Dropdown menu */}
            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden">
              <div className="relative">
                <div className="py-8 bg-gradient-to-tr from-indigo-600 to-red-600"></div>
                <div className="absolute px-4 -bottom-7 start-0">
                  <div className="flex items-end">
                    <Image
                      src="/assets/images/client/05.jpg"
                      className="rounded-full size-10 shadow dark:shadow-gray-700"
                      width={30}
                      height={30}
                      alt="User Avatar"
                    />
                    <span className="font-semibold text-[15px] ms-1">
                      Cristina Murfy
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-10 px-4">
                <h5 className="font-semibold text-[15px]">Wallet:</h5>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-slate-400">
                    qhut0...hfteh45
                  </span>
                  <Link href="#" className="text-indigo-600">
                    <i className="uil uil-copy"></i>
                  </Link>
                </div>
              </div>
              <div className="mt-4 px-4">
                <h5 className="text-[15px]">
                  Balance:{" "}
                  <span className="text-indigo-600 font-semibold">
                    0.00045ETH
                  </span>
                </h5>
              </div>
              <ul className="py-2 text-start">
                <li>
                  <Link
                    href="nft-creator-profile.html"
                    className="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"
                  >
                    <i className="uil uil-user text-[16px] align-middle me-1"></i>{" "}
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="nft-creator-profile-edit.html"
                    className="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"
                  >
                    <i className="uil uil-setting text-[16px] align-middle me-1"></i>{" "}
                    Settings
                  </Link>
                </li>
                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                <li>
                  <Link
                    href="auth-login.html"
                    className="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"
                  >
                    <i className="uil uil-sign-out-alt text-[16px] align-middle me-1"></i>{" "}
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* Login button End */}

        <div id="navigation" className={`${menuOpen ? "block" : "hidden"}`}>
          {/* Navigation Menu */}
          <ul className="navigation-menu justify-start">
            <li>
              <Link href="index-nft.html" className="sub-menu-item">
                Home
              </Link>
            </li>
            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Portfolio</a>
              <span className="menu-arrow"></span>
              <ul className="submenu megamenu">
                <li>
                  <ul>
                    <li className="megamenu-head">Modern Portfolio</li>
                    <li>
                      <a
                        href="portfolio-modern-two.html"
                        className="sub-menu-item"
                      >
                        Two Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-modern-three.html"
                        className="sub-menu-item"
                      >
                        Three Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-modern-four.html"
                        className="sub-menu-item"
                      >
                        Four Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-modern-five.html"
                        className="sub-menu-item"
                      >
                        Five Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-modern-six.html"
                        className="sub-menu-item"
                      >
                        Six Column
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="megamenu-head">Business Portfolio</li>
                    <li>
                      <a
                        href="portfolio-business-two.html"
                        className="sub-menu-item"
                      >
                        Two Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-business-three.html"
                        className="sub-menu-item"
                      >
                        Three Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-business-four.html"
                        className="sub-menu-item"
                      >
                        Four Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-business-five.html"
                        className="sub-menu-item"
                      >
                        Five Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-business-six.html"
                        className="sub-menu-item"
                      >
                        Six Column
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="megamenu-head">Creative Portfolio</li>
                    <li>
                      <a
                        href="portfolio-creative-two.html"
                        className="sub-menu-item"
                      >
                        Two Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-creative-three.html"
                        className="sub-menu-item"
                      >
                        Three Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-creative-four.html"
                        className="sub-menu-item"
                      >
                        Four Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-creative-five.html"
                        className="sub-menu-item"
                      >
                        Five Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-creative-six.html"
                        className="sub-menu-item"
                      >
                        Six Column
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="megamenu-head">Masonry Portfolio</li>
                    <li>
                      <a
                        href="portfolio-masonry-two.html"
                        className="sub-menu-item"
                      >
                        Two Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-masonry-three.html"
                        className="sub-menu-item"
                      >
                        Three Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-masonry-four.html"
                        className="sub-menu-item"
                      >
                        Four Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-masonry-five.html"
                        className="sub-menu-item"
                      >
                        Five Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-masonry-six.html"
                        className="sub-menu-item"
                      >
                        Six Column
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="megamenu-head">Portfolio Detail</li>
                    <li>
                      <a
                        href="portfolio-detail-one.html"
                        className="sub-menu-item"
                      >
                        Portfolio One
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-detail-two.html"
                        className="sub-menu-item"
                      >
                        Portfolio Two
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-detail-three.html"
                        className="sub-menu-item"
                      >
                        Portfolio Three
                      </a>
                    </li>
                    <li>
                      <a
                        href="portfolio-detail-four.html"
                        className="sub-menu-item"
                      >
                        Portfolio Four
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="nft-wallet.html" className="sub-menu-item">
                Wallet
              </Link>
            </li>
            <li className="has-submenu parent-parent-menu-item">
              <Link href="#">Pages</Link>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li className="has-submenu parent-menu-item">
                  <Link href="#">Auth Pages</Link>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <Link href="auth-login.html" className="sub-menu-item">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link href="auth-signup.html" className="sub-menu-item">
                        Signup
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="auth-re-password.html"
                        className="sub-menu-item"
                      >
                        Reset Password
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <Link href="#">Utility</Link>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <Link href="page-terms.html" className="sub-menu-item">
                        Terms of Services
                      </Link>
                    </li>
                    <li>
                      <Link href="page-privacy.html" className="sub-menu-item">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="page-about.html" className="sub-menu-item">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="page-contact-one.html"
                        className="sub-menu-item"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="page-contact-two.html"
                        className="sub-menu-item"
                      >
                        Contact Us Two
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="page-comingsoon.html"
                        className="sub-menu-item"
                      >
                        Coming Soon
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="page-maintenance.html"
                        className="sub-menu-item"
                      >
                        Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link href="page-error.html" className="sub-menu-item">
                        Error
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <Link href="#">Portfolio</Link>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <Link
                        href="portfolio-modern-two.html"
                        className="sub-menu-item"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="portfolio-classic.html"
                        className="sub-menu-item"
                      >
                        Portfolio Classic
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="portfolio-four.html"
                        className="sub-menu-item"
                      >
                        Portfolio Four
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="portfolio-four-classic.html"
                        className="sub-menu-item"
                      >
                        Portfolio Four Classic
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="portfolio-five.html"
                        className="sub-menu-item"
                      >
                        Portfolio Five
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="portfolio-five-classic.html"
                        className="sub-menu-item"
                      >
                        Portfolio Five Classic
                      </Link>
                    </li>
                    <li>
                      <Link href="portfolio-six.html" className="sub-menu-item">
                        Portfolio Six
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="portfolio-seven.html"
                        className="sub-menu-item"
                      >
                        Portfolio Seven
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="portfolio-eight.html"
                        className="sub-menu-item"
                      >
                        Portfolio Eight
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="portfolio-detail-two.html"
                        className="sub-menu-item"
                      >
                        Portfolio Detail
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="portfolio-detail.html"
                        className="sub-menu-item"
                      >
                        Portfolio Detail Classic
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-submenu parent-parent-menu-item">
              <Link href="#">Blog</Link>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <Link href="blog.html" className="sub-menu-item">
                    All Blog
                  </Link>
                </li>
                <li>
                  <Link href="blog-detail.html" className="sub-menu-item">
                    Blog Detail
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {/* End navigation menu */}
        </div>
        {/* End navigation */}
      </div>
    </nav>
  );
};

export default Header;
