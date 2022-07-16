import type { NextPage } from "next";
import Link from "next/link";
import { LinkedinLogo, InstagramLogo, GithubLogo } from "phosphor-react";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen  bg-brand-900 items-center">
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

      <main className="flex w-full h-[calc(100%-6rem)] max-w-[80rem] items-center p-4">
        <div className="flex-1 flex h-full w-full">
          <div className="flex flex-col gap-20 justify-center">
            <div>
              <p className="text-lg text-white">Hi all. I am</p>
              <h1 className="text-6xl text-white">Wendel S. Pereira</h1>
              <h2 className="text-purple-900 text-[2rem]">
                &gt; Full stack developer
              </h2>
            </div>
            <div>
              <p className="text-brand-600 text-base">
                // complete the game to continue
              </p>
              <p className="text-brand-600 text-base">
                // you can also see it on my Github page
              </p>
              <p>
                <span className="text-purple-900 text-base font-medium">
                  const&nbsp;
                </span>
                <span className="text-green-900 text-base font-medium">
                  githubLink&nbsp;
                </span>
                <span className="text-white text-base font-medium">
                  =&nbsp;
                </span>
                <span className="text-orange-900 text-base font-medium" text->
                  "https://github.com/wendelspereira/url"
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1  items-center justify-center">
          <img className="h-[80%]" src="/backgroundBlurs.svg" alt="Blur" />
        </div>
      </main>

      <footer className="flex absolute bottom-0 left-0 h-12 w-screen items-center border-t border-brand-600">
        <ul className="flex items-center w-full h-full overflow-hidden">
          <li className="flex items-center text-brand-600 h-full px-4 border-r border-brand-600">
            find me in:
          </li>
          <li className="flex items-center text-brand-600 h-full px-4 border-r border-brand-600 hover:text-white">
            <a href="https://www.linkedin.com/in/devwendelspereira">
              <LinkedinLogo size={24} />
            </a>
          </li>
          <li className="flex items-center text-brand-600 h-full px-4 border-r border-brand-600 hover:text-white">
            <a href="https://www.instagram.com/wendelspereira">
              <InstagramLogo size={24} />
            </a>
          </li>
          <li className="flex items-center text-brand-600 h-full ml-auto px-4 border-l border-brand-600 hover:text-white ">
            <a
              href="https://www.github.com/wendelspereira"
              className="flex whitespace-nowrap gap-2"
            >
              @wendelspereira <GithubLogo size={24} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
