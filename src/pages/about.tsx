import type { NextPage } from "next";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import {codeMirrorTheme} from "../config/codeMirrorTheme"
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
import { useCallback } from "react";

const About: NextPage = () => {
  const onChange = useCallback((value: any, viewUpdate: any) => {
    console.log("value:", value);
  }, []);

  return (
    <div className="container">
      <div
        className="flex flex-col w-full gap-8 items-center py-4"
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
      <div className="activityBar border-l border-text-main">
        {/* personal-info */}
        <div>
          <div
            className={
              "flex items-center gap-3 border-b border-brand-600 min-h-[2.5rem] hover:text-white-100 px-3 w-full"
            }
          >
            <span>
              <CaretDown className="inline" size={16} />
            </span>
            personal-info
          </div>
          {/* content */}
          <ul className="flex flex-col justify-center pt-4 pb-7 px-3 gap-2">
            <li className="flex items-center hover:text-white-100">
              <CaretRight className="inline mr-3" size={16} />
              <Folder className="inline mr-2" size={20} color="#E99287" />
              bio
            </li>
            <li className="flex items-center hover:text-white-100">
              <CaretRight className="inline mr-3" size={16} />
              <Folder className="inline mr-2" size={20} color="#43D9AD" />
              interests
            </li>
            <li className="flex items-center hover:text-white-100">
              <CaretDown className="inline mr-3" size={16} />
              <Folder className="inline mr-2" size={20} color="#3A49A4" />
              education
            </li>
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
        </div>

        {/* contacts */}
        <div>
          <div
            className="flex items-center gap-3 border-y border-brand-600 min-h-[2.5rem] hover:text-white-100 px-3">
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
              <a  rel="noopener noreferrer" target="_blank" href="mailto:wendelspereira@outlook.com">@wendelspereira</a>
            </li>
            <li className="flex items-center hover:text-white-100">
              <Phone className="inline mr-2" size={20} color="#43D9AD" />
              {"(87)99659-2930"}
            </li>
          </ul>
        </div>
      </div>

      <div className="tabs flex items-center">
        <div className="flex px-3 items-center border-r border-x-brand-600 h-full gap-12">
          personal-info
          <div className="items-center justify-center p-1 hover:rounded-md hover:text-white-100 hover:bg-brand-500 hover:transition">

            <X weight="bold" size={12} />
          </div>
        </div>
      </div>

      <div className="codeBody justfy-start items-start text-lg text-brand-600 pl-6 pb-0 w-full overflow-y-scroll">
        <CodeMirror
          value={`/** Sou um deseull stack, com mais de três anos dea no\n*   desenvolvimento web, mobile e Itefólio conta com alguns projetos\n*   desenvolfreelancer além de várias outras aplicaçõesPossuo\n*   conhecimentos em programal e orientada a objetos, atuando pre com\n*   a linguagem Typescript, principais tecnologias em torno do seu\n*   ecossistemama. Tenho grande ila automação de processos de forma\n*   einteligente, área onde tenh por implementar de soluções que\n*   economizem recursos e entreguem melhores  resultados.\n*/`}
          height="100%"
          editable={false}
          theme={codeMirrorTheme}
          extensions={[javascript({ jsx: true })]}
          width="100%"
          maxWidth="100%"
          onChange={onChange}
          className="pb-0"
        />

      </div>
    </div>
  );
};

export default About;
