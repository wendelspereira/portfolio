import type { NextPage } from "next";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";

import {
  CaretDown,
  CaretRight,
  EnvelopeSimple,
  EnvelopeSimpleOpen,
  Files,
  Folder,
  GameController,
  GraduationCap,
  Phone,
  TerminalWindow,
  UserList,
  X,
} from "phosphor-react";
import styles from "../styles/about.module.scss";
import { useCallback } from "react";
import { createTheme } from "@uiw/codemirror-themes";

const myTheme = createTheme({
  theme: "dark",
  
  settings: {
    background: "#011627",
    foreground: "#75baff",
    caret: "#5d00ff",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#8a91991a",
    gutterBackground: "#011627",
    gutterForeground: "#607B96",
  },
  styles: [
    { tag: t.comment, color: "#607b96" },
    { tag: t.variableName, color: "#0080ff" },
    { tag: [t.string, t.special(t.brace)], color: "#5c6166" },
    { tag: t.number, color: "#5c6166" },
    { tag: t.bool, color: "#5c6166" },
    { tag: t.null, color: "#5c6166" },
    { tag: t.keyword, color: "#5c6166" },
    { tag: t.operator, color: "#5c6166" },
    { tag: t.className, color: "#5c6166" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "#5c6166" },
    { tag: t.angleBracket, color: "#5c6166" },
    { tag: t.tagName, color: "#5c6166" },
    { tag: t.attributeName, color: "#5c6166" },
  ],
});

const About: NextPage = () => {
  const onChange = useCallback((value: any, viewUpdate: any) => {
    console.log("value:", value);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.primaryBar + " flex flex-col gap-8 items-center py-4"}
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
      <div className={styles.activityBar}>
        {/* personal-info */}
        <div>
          <div
            className={
              "flex items-center gap-3 border-b border-brand-600 min-h-[2.5rem] hover:text-white-100 px-3"
            }
          >
            <span>
              <CaretDown className="inline" size={16} />
            </span>
            personal-info
          </div>
          {/* content */}
          <div className={"flex flex-col justify-center pt-4 pb-7 px-3 gap-2"}>
            <div className={"flex items-center hover:text-white-100"}>
              <CaretRight className="inline mr-3" size={16} />
              <Folder className="inline mr-2" size={20} color="#E99287" />
              bio
            </div>
            <div className={"flex items-center hover:text-white-100"}>
              <CaretRight className="inline mr-3" size={16} />
              <Folder className="inline mr-2" size={20} color="#43D9AD" />
              interests
            </div>
            <div className={"flex items-center hover:text-white-100"}>
              <CaretDown className="inline mr-3" size={16} />
              <Folder className="inline mr-2" size={20} color="#3A49A4" />
              education
            </div>
            <div className={"flex items-center hover:text-white-100 ml-7"}>
              <GraduationCap
                className="inline mr-2"
                size={20}
                color="#607B96"
              />
              university
            </div>
            <div className={"flex items-center hover:text-white-100 ml-7"}>
              <Files className="inline mr-2" size={20} color="#607B96" />
              courses
            </div>
          </div>
        </div>

        {/* contacts */}
        <div>
          <div
            className={
              "flex items-center gap-3 border-y border-brand-600 min-h-[2.5rem] hover:text-white-100 px-3"
            }
          >
            <CaretDown className="inline" size={16} />
            <span>contacts</span>
          </div>
          {/* content */}
          <div className={"flex flex-col justify-center pt-4 pb-7 px-3 gap-2"}>
            <div className={"flex items-center hover:text-white-100"}>
              <EnvelopeSimple
                className="inline mr-2"
                size={20}
                color="#43D9AD"
              />
              <a href="mailto:wendelspereira@outlook.com">@wendelspereira</a>
            </div>
            <div className={"flex items-center hover:text-white-100"}>
              <Phone className="inline mr-2" size={20} color="#43D9AD" />
              {"(87)99659-2930"}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tabs + " flex items-center"}>
        <div className="flex px-3 items-center border-r border-x-brand-600 h-full gap-12">
          personal-info
          <X weight="bold" size={12} />
        </div>
      </div>

      <div className={styles.codeBody + " justfy-start items-start text-xl text-brand-600 pl-6 pb-0 w-full overflow-y-scroll"}>
        <CodeMirror
          
          value={`/** Sou um deseull stack, com mais de três anos dea no\n*   desenvolvimento web, mobile e Itefólio conta com alguns projetos\n*   desenvolfreelancer além de várias outras aplicaçõesPossuo\n*   conhecimentos em programal e orientada a objetos, atuando pre com\n*   a linguagem Typescript, principais tecnologias em torno do seu\n*   ecossistemama. Tenho grande ila automação de processos de forma\n*   einteligente, área onde tenh por implementar de soluções que\n*   economizem recursos e entreguem melhores  resultados.\n*/`}
          height="100%"
          editable={false}
          theme={myTheme}
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
