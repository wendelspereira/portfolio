import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";

const Header: NextComponentType = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <header className="flex w-full h-12 border-b border-brand-600">
      <ul className="flex  items-center justify-start w-full h-full overflow-clip ">
        <li className="flex items-center h-full border-r border-brand-600 text-brand-600 w-[19rem] pl-5 overflow-clip">
          Wendel S. Pereira
        </li>
        <Link href="/">
          <li
            className={classNames(
              "flex items-center h-full border-r border-brand-600 text-brand-600 px-5 hover:text-white-100 hover:border-b-2 hover:border-b-orange-900",
              { "text-white-100 border-b-2 border-b-orange-900": path === "/" }
            )}
          >
            _hello
          </li>
        </Link>
        <Link href="/about">
          <li
            className={classNames(
              "flex items-center h-full border-r border-brand-600 text-brand-600 px-5 hover:text-white-100 hover:border-b-2 hover:border-b-orange-900",
              {
                "text-white-100 border-b-2 border-b-orange-900":
                  path === "/about",
              }
            )}
          >
            _about-me
          </li>
        </Link>
        <Link href="/projects">
          <li
            className={classNames(
              "flex  items-center h-full border-r border-brand-600 text-brand-600 px-5 hover:text-white-100 hover:border-b-2 hover:border-b-orange-900",
              {
                "text-white-100 border-b-2 border-b-orange-900":
                  path === "/projects",
              }
            )}
          >
            _projects
          </li>
        </Link>
        <Link
          href="/contact"
          className={classNames("", {
            "border-b-2 border-b-orange-900": path === "/contact",
          })}
        >
          <li
            className={classNames(
              "flex ml-auto items-center h-full text-brand-600 px-5 border-l border-brand-600 hover:border-b-2 hover:text-white-100 hover:border-b-orange-900",
              {
                "text-white-100 border-b-2 border-b-orange-900":
                  path === "/contact",
              }
            )}
          >
            _contact-me
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
