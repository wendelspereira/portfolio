import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="flex h-[calc(100vh-6rem)]">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col w-fit h-fit gap-20 justify-center">
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
              <span className="text-white text-base font-medium">=&nbsp;</span>
              <span className="text-orange-900 text-base font-medium" text->
                "https://github.com/wendelspereira/url"
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 items-center justify-center">
        <div className="relative top-550 left-0">
        </div>
        <div className="absolute  top-[calc(50%-14.9rem)] left-[calc(50%+5rem)]">
          <img src="/Snake.svg" className="" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
