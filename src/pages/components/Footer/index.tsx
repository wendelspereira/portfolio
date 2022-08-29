import type { NextComponentType } from "next";
import Link from "next/link";
import { LinkedinLogo, InstagramLogo, GithubLogo } from "phosphor-react";

const Footer: NextComponentType = () => {
  return (
    <footer className="flex absolute bottom-0 left-0 h-12 w-screen items-center bg-brand-900 border-t border-brand-600">
      <ul className="flex items-center w-full h-full overflow-hidden">
        <li className="flex items-center text-brand-600 h-full px-4 border-r border-brand-600">
          find me in:
        </li>
        <li className="flex items-center text-brand-600 h-full px-4 border-r border-brand-600 hover:text-white-100">
          <a  rel="noopener" href="https://www.linkedin.com/in/devwendelspereira">
            <LinkedinLogo size={24} />
          </a>
        </li>
        <li className="flex items-center text-brand-600 h-full px-4 border-r border-brand-600 hover:text-white-100">
          <a  rel="noopener" href="https://www.instagram.com/wendelspereira">
            <InstagramLogo size={24} />
          </a>
        </li>
        <li className="flex items-center text-brand-600 h-full ml-auto px-4 border-l border-brand-600 hover:text-white-100 ">
          <a
            href="https://www.github.com/wendelspereira"
            className="flex whitespace-nowrap gap-2"
          >
            @wendelspereira <GithubLogo size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
