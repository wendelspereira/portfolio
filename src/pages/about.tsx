import type { NextPage } from "next";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { codeMirrorTheme } from "../config/codeMirrorTheme"
import {
  CaretDown,
  CaretRight,
  EnvelopeSimple,
  Files,
  Folder,
  GameController,
  GraduationCap,
  Phone,
  TerminalWindow,
  UserList,
  X,
} from "phosphor-react";

const About: NextPage = () => {
  return (
    <div className="flex w-full h-[calc(100vh-6rem)] text-text-main">
      {/* Primary bar #######################################################################*/}
      <div
        className="flex flex-col w-16 gap-8 items-center py-4 border-r border-brand-600"
      >
        <span>
          <TerminalWindow size={32} color="#607B96" />
        </span>
        <span>
          <UserList color="#607B96" size={32} />
        </span>
        <span>
          <GameController color="#607B96" size={32} />
        </span>
      </div>

      {/* Activity bar ######################################################################*/}
      <div className="w-56 border-r border-brand-600">
        {/* personal-info */}
        <div
          className={
            "flex w-full items-center gap-3 border-b border-brand-600 h-10 hover:text-white-100 px-3"
          }
        >
          <span>
            <CaretDown className="inline" size={16} />
          </span>
          personal-info
        </div>
        {/* content */}
        <ul className="personal-info flex flex-col justify-center pt-4 pb-7 px-3 gap-2">
          <li className="flex w-full items-center hover:text-white-100">
            <input type="checkbox" id="bio" className="list-item" />
            <label htmlFor="bio">
              <CaretRight className="caret-r inline mr-3" size={16} />
              <Folder className="folder-icon inline mr-2" size={20} color="#E99287" />
              bio
              <div>
                <ul>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                </ul>
              </div>
            </label>
          </li>
          <li className="flex items-center hover:text-white-100">
            <input type="checkbox" id="interests" className="list-item" />
            <label htmlFor="interests">
              <CaretRight className="caret-r inline mr-3" size={16} />
              <Folder className="inline mr-2" size={20} color="#43D9AD" />
              interests
            </label>
          </li>
          <li className="flex items-center hover:text-white-100">
            <input type="checkbox" id="education" className="list-item" />
            <label htmlFor="education">
              <CaretDown className="caret-r inline mr-3" size={16} />
              <Folder className="inline mr-2" size={20} color="#3A49A4" />
              education
            </label>
            <ul id="sub-items">
              <li className="flex items-center hover:text-white-100 ml-7">
                <GraduationCap
                  className="inline mr-2"
                  size={20}
                  color="#607B96"
                />
                university
              </li>
              <li className="flex items-center hover:text-white-100 ml-7">
                <Files className="inline mr-2" size={20} color="#607B96" />
                courses
              </li> 
            </ul>

          </li>

        </ul>

        {/* contacts */}
        <div>
          <div
            className="flex items-center gap-3 border-y border-brand-600 h-10 hover:text-white-100 px-3">
            <CaretDown className="inline" size={16} />
            <span>contacts</span>
          </div>
          {/* content */}
          <ul className="flex flex-col justify-center pt-4 pb-7 px-3 gap-2">
            <li className="flex items-center hover:text-white-100">
              <EnvelopeSimple
                className="inline mr-2"
                size={20}
                color="#43D9AD"
              />
              <a rel="noopener noreferrer" target="_blank" href="mailto:wendelspereira@outlook.com">@wendelspereira</a>
            </li>
            <li className="flex items-center hover:text-white-100">
              <Phone className="inline mr-2" size={20} color="#43D9AD" />
              {"(87)99659-2930"}
            </li>
          </ul>
        </div>
      </div>
      {/* Code body ########################################################################## */}
      <div className="flex flex-col flex-1 text-brand-600 no-scrollbar overflow-auto ">
        <div className="flex w-full border-b border-brand-600 h-10">
          <div className="flex items-center ">
            <div className="flex px-3 items-center border-r border-x-brand-600 h-full gap-12">
              personal-info
              <div className="items-center justify-center p-1 hover:rounded-md hover:text-white-100 hover:bg-brand-500 hover:transition">

                <X weight="bold" size={12} />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">

          <CodeMirror
            value={`/** Sou um deseull stack, com mais de três anos dea no\n*   desenvolvimento web, mobile e Itefólio conta com alguns projetos\n*   desenvolfreelancer além de várias outras aplicaçõesPossuo\n*   conhecimentos em programal e orientada a objetos, atuando pre com\n*   a linguagem Typescript, principais tecnologias em torno do seu\n*   ecossistemama. Tenho grande ila automação de processos de forma\n*   einteligente, área onde tenh por implementar de soluções que\n*   economizem recursos e entreguem melhores  resultados.\n*/`}
            height="100%"
            editable={false}
            theme={codeMirrorTheme}
            extensions={[javascript({ jsx: true })]}
            width="100%"
            maxWidth="100%"
            className="pb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
