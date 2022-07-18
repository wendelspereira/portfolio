import type { NextComponentType } from "next";
import Link from "next/link";

const Header: NextComponentType = () => {
  return (
    <header className="flex w-full h-12 border-b border-brand-600">
      <ul className="flex  items-center justify-start w-full h-full overflow-clip ">
        <li className="flex items-center  h-full border-r border-brand-600 text-brand-600 pr-36 pl-5 overflow-clip ">
          Wendel S. Pereira
        </li>
        <li className="flex items-center h-full border-r border-brand-600 text-brand-600 px-5 hover:text-white hover:border-b-2 hover:border-b-orange-900">
          <Link href="/">
            <a>_hello</a>
          </Link>
        </li>
        <li className="flex items-center h-full border-r border-brand-600 text-brand-600 px-5 hover:text-white hover:border-b-2 hover:border-b-orange-900">
          <Link href="/">
            <a>_about-me</a>
          </Link>
        </li>
        <li className="flex  items-center h-full border-r border-brand-600 text-brand-600 px-5 hover:text-white hover:border-b-2 hover:border-b-orange-900">
          <Link href="/">
            <a>_projects</a>
          </Link>
        </li>
        <li className="flex ml-auto items-center h-full text-brand-600 px-5 border-l border-brand-600 hover:border-b-2 hover:text-white hover:border-b-orange-900">
          <Link href="/">
            <a>_contact-me</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
