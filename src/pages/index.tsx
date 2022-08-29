import { javascript } from "@codemirror/lang-javascript";
import ReactCodeMirror from "@uiw/react-codemirror";
import type { NextPage } from "next";
import { codeMirrorTheme } from "../config/codeMirrorTheme";
// import styles from "../styles/home.css"

function handleScroller(e: React.UIEvent<HTMLElement>) {
  //  const currentY = e.currentTarget.getBoundingClientRect().y
  const screenCenter = window.innerHeight / 2;
  const element = e.currentTarget.getElementsByClassName("wendel");
  const currentY = element[0].getBoundingClientRect().y;

  if (currentY > screenCenter) {
    element[0].classList.add("bg-red")
  }

  // console.log(elements)

  // console.log(window.scrollBy.)
}

// const controls = document.querySelectorAll(".control");
// let currentItem = 0;
// const items = document.querySelectorAll(".item");
// const maxItems = items.length;

// controls.forEach((control) => {
//   control.addEventListener("click", (e) => {
//     isLeft = e.target.classList.contains("arrow-left");

//     if (isLeft) {
//       currentItem -= 1;
//     } else {
//       currentItem += 1;
//     }

//     if (currentItem >= maxItems) {
//       currentItem = 0;
//     }

//     if (currentItem < 0) {
//       currentItem = maxItems - 1;
//     }

//     items.forEach((item) => item.classList.remove("current-item"));

//     items[currentItem].scrollIntoView({
//       behavior: "smooth",
//       inline: "center"
//     });

//     items[currentItem].classList.add("current-item");
//   });
// });

const Home: NextPage = () => {
  return (
    <main className="flex h-[calc(100vh-6rem)]">
      <section className="flex-1 flex items-center justify-center">
        <div className="flex flex-col w-fit h-fit gap-20 justify-center">
          <div>
            <p className="text-lg text-white-100">Hi all. I am</p>
            <h1 className="text-6xl text-white-100 text-bold">
              Wendel S. Pereira
            </h1>
            <h2 className="text-purple-900 text-[2rem]">
              {" Full stack developer"}
            </h2>
          </div>
          <div>
            <p className="text-brand-600 text-base">
              {"// complete the game to continue"}
            </p>
            <p className="text-brand-600 text-base">
              {"// you can also see it on my Github page"}
            </p>
            <p>
              <span className="text-purple-900 text-base font-medium">
                {"const "}
              </span>
              <span className="text-green-900 text-base font-medium">
                {"github"}
              </span>
              <span className="text-white-100 text-base font-medium">
                {" = "}
              </span>
              <span className="text-orange-900 text-base font-medium">
                <a  href="https://github.com/wendelspereira/">
                  {"https://github.com/wendelspereira/"}
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section id="container" className={`flex-1 items-center justify-center bg-index_blur bg-auto`}>
        <div
          className="flex w-full h-full flex-col justify-center items-center no-scrollbar overflow-y-auto gap-4 py-8"
          onScroll={handleScroller}
        >
          <div className="bg-brand-1000 rounded-lg py-6 px-7 opacity-50">
            <ReactCodeMirror
              value={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {\n   const value: T = parseModel(chunk._response, chunk._value);\n   const initializedChunk: InitializedChunk<T> = (chunk: any);\n   initializedChunk._status = INITIALIZED;\n   initializedChunk._value = value;\n   return value;\n}`}
              height="100%"
              editable={false}
              theme={codeMirrorTheme}
              extensions={[javascript({ jsx: true })]}
              width="100%"
              maxWidth="100%"
              style={{
                fontSize: "1rem",
              }}
            />
          </div>
          <div className="bg-brand-1000 rounded-lg py-6 px-7 opacity-50 wendel">
            <ReactCodeMirror
              value={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {\n   const value: T = parseModel(chunk._response, chunk._value);\n   const initializedChunk: InitializedChunk<T> = (chunk: any);\n   initializedChunk._status = INITIALIZED;\n   initializedChunk._value = value;\n   return value;\n}`}
              height="100%"
              editable={false}
              theme={codeMirrorTheme}
              extensions={[javascript({ jsx: true })]}
              width="100%"
              maxWidth="100%"
              style={{
                fontSize: "1rem",
              }}
            />
          </div>
          <div className="bg-brand-1000 rounded-lg py-6 px-7 opacity-50">
            <ReactCodeMirror
              value={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {\n   const value: T = parseModel(chunk._response, chunk._value);\n   const initializedChunk: InitializedChunk<T> = (chunk: any);\n   initializedChunk._status = INITIALIZED;\n   initializedChunk._value = value;\n   return value;\n}`}
              height="100%"
              editable={false}
              theme={codeMirrorTheme}
              extensions={[javascript({ jsx: true })]}
              width="100%"
              maxWidth="100%"
              style={{
                fontSize: "1rem",
              }}
            />
          </div>
          <div className="bg-brand-1000 rounded-lg py-6 px-7 opacity-50">
            <ReactCodeMirror
              value={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {\n   const value: T = parseModel(chunk._response, chunk._value);\n   const initializedChunk: InitializedChunk<T> = (chunk: any);\n   initializedChunk._status = INITIALIZED;\n   initializedChunk._value = value;\n   return value;\n}`}
              height="100%"
              editable={false}
              theme={codeMirrorTheme}
              extensions={[javascript({ jsx: true })]}
              width="100%"
              maxWidth="100%"
              style={{
                fontSize: "1rem",
              }}
            />
          </div>
          <div className="bg-brand-1000 rounded-lg py-6 px-7 opacity-50">
            <ReactCodeMirror
              value={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {\n   const value: T = parseModel(chunk._response, chunk._value);\n   const initializedChunk: InitializedChunk<T> = (chunk: any);\n   initializedChunk._status = INITIALIZED;\n   initializedChunk._value = value;\n   return value;\n}`}
              height="100%"
              editable={false}
              theme={codeMirrorTheme}
              extensions={[javascript({ jsx: true })]}
              width="100%"
              maxWidth="100%"
              style={{
                fontSize: "1rem",
              }}
            />
          </div>
          <div className="bg-brand-1000 rounded-lg py-6 px-7 opacity-50">
            <ReactCodeMirror
              value={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {\n   const value: T = parseModel(chunk._response, chunk._value);\n   const initializedChunk: InitializedChunk<T> = (chunk: any);\n   initializedChunk._status = INITIALIZED;\n   initializedChunk._value = value;\n   return value;\n}`}
              height="100%"
              editable={false}
              theme={codeMirrorTheme}
              extensions={[javascript({ jsx: true })]}
              width="100%"
              maxWidth="100%"
              style={{
                fontSize: "1rem",
              }}
            />
          </div>
          <div className="bg-brand-1000 rounded-lg py-6 px-7 opacity-50">
            <ReactCodeMirror
              value={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {\n   const value: T = parseModel(chunk._response, chunk._value);\n   const initializedChunk: InitializedChunk<T> = (chunk: any);\n   initializedChunk._status = INITIALIZED;\n   initializedChunk._value = value;\n   return value;\n}`}
              height="100%"
              editable={false}
              theme={codeMirrorTheme}
              extensions={[javascript({ jsx: true })]}
              width="100%"
              maxWidth="100%"
              style={{
                fontSize: "1rem",
              }}
            />
          </div>
        </div>
        {/* <div className="relative top-550 left-0"></div>
        <div className="absolute  top-[calc(50%-14.9rem)] left-[calc(50%+5rem)]">
          <img src="/Snake.svg" className="" alt="" />
        </div> */}
      </section>
    </main>
  );
};

export default Home;




// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="utf-8">
//   <title>HTML</title>
//   <link rel="stylesheet" href="main2.css" type="text/css" />
// </head>

// <body>
//   <div id="container">
//     <div id="box">as</div>
//   </div>
// </body>

// </html>