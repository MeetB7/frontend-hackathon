import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="fixed w-full px-0 lg:px-6 h-16 flex items-center z-50 bg-navbg">
      <Link
        href="#landing"
        className="flex items-center justify-center ml-1 mb-2 md:ml-6 "
        prefetch={false}
      >
        <Image src="/image.png"  alt="" width={80} height={120} />
      </Link>
      <div className=" ml-auto flex gap-2 mr-3 sm:gap-6 sm:mr-0 text-white">
        <Link
          href="#features"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About Us
        </Link>
        <Link
          href="#testimonials"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Events
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Cafeteria
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
        Announcements
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Reach
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
