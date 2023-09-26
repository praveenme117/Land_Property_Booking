import React from "react";
import Link from "next/link";

// Define the interface for NavItem props
interface NavItemProps {
  href: string;
  text: string;
}

// Define the Navbar component
const Navbar: React.FC = () => {
  return (
    <nav className="bg-black p-5">
      <div className="container mx-auto flex justify-between gap-4 items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">COMPANY LOGO</Link>
        </div>

        <ul className="flex space-x-4">
          <NavItem href="/contactDetails" text="CONTACT DETAILS" />
          <NavItem href="/propertyDetails" text="PROPERTY DETAILS" />
          <NavItem href="/schedule" text="SCHEDULE" />
          <NavItem href="/confirmAndBook" text="CONFIRM & BOOK" />
        </ul>
      </div>
    </nav>
  );
};

// Define the NavItem component using NavItemProps interface
const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
  return (
    <li>
      <Link href={href}>
        <div className="text-white hover:text-gray-300 active:text-gray-500">{text}</div>
      </Link>
    </li>
  );
};

export default Navbar;
