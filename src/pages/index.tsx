import { javascript } from "@codemirror/lang-javascript";
import ReactCodeMirror from "@uiw/react-codemirror";
import type { NextPage } from "next";
import { codeMirrorTheme } from "../config/codeMirrorTheme";

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
                <a href="https://github.com/wendelspereira/">
                  {"https://github.com/wendelspereira/"}
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section id="container" className={`flex-1 items-center justify-center bg-index_blur bg-auto`}>
        <div
          className="flex w-full h-full flex-col no-scrollbar overflow-auto gap-4 py-8"
        >
          <div className="hover:opacity-100 cursor-pointer bg-brand-1000 w-fit rounded-lg py-6 px-7 opacity-50">
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
          <div className="hover:opacity-100 cursor-pointer bg-brand-1000 w-fit rounded-lg py-6 px-7 opacity-50 wendel">
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
          <div className="hover:opacity-100 cursor-pointer bg-brand-1000 w-fit rounded-lg py-6 px-7 opacity-50">
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
          <div className="hover:opacity-100 cursor-pointer bg-brand-1000 w-fit rounded-lg py-6 px-7 opacity-50">
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
          <div className="hover:opacity-100 cursor-pointer bg-brand-1000 w-fit rounded-lg py-6 px-7 opacity-50">
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
          <div className="hover:opacity-100 cursor-pointer bg-brand-1000 w-fit rounded-lg py-6 px-7 opacity-50">
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
          <div className="hover:opacity-100 cursor-pointer bg-brand-1000 w-fit rounded-lg py-6 px-7 opacity-50">
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
      </section>
    </main>
  );
};

export default Home;