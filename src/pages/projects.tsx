import type { NextPage } from "next";
import { CaretDown, X } from "phosphor-react";

import ProjectCard from "./components/Card";
import { useEffect, useState } from "react";

const Projects: NextPage = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleFilter = (e: React.FormEvent<HTMLInputElement>) => {
    const checked = e.currentTarget.checked;
    const inputName = e.currentTarget.name;

    if (checked) {
      setFilters([...filters, inputName]);
    }

    if (!checked) {
      const newFilters = [...filters];
      newFilters.splice(filters.indexOf(inputName), 1);
      setFilters(newFilters);
    }
  };

  const tecnologies = [
    { name: "Typescript", icon: "icons/typescript.svg" },
    { name: "NodeJS", icon: "icons/nodejs.svg" },
    { name: "HTML", icon: "icons/html.svg" },
    { name: "CSS", icon: "icons/css.svg" },
    { name: "JavaScript", icon: "icons/javascript.svg" },
    { name: "Next.js", icon: "icons/next.svg" },
    { name: "React", icon: "icons/react.svg" },
    { name: "React Native", icon: "icons/react.svg" },
  ];

  return (
    <div className="flex w-full h-[calc(100vh-6rem)]">
      <div className="flex flex-col border-r border-brand-600 w-[19rem] h-full">
        <div className="flex items-center h-10 w-full border-b border-brand-600 text-brand-600 gap-3 px-3">
          <span>
            <CaretDown className="inline" size={16} />
          </span>
          projects
        </div>
        <div className="tecnologies px-5 py-4">
          <ul className="flex flex-col gap-4">
            {tecnologies.map((item, index) => (
              <li key={index} className="flex h-6">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name={item.name}
                    onChange={handleFilter}
                  />
                  <span className="checkmark"></span>
                  <div className="flex items-center text-brand-600 justify-start h-full gap-3">
                    <img src={item.icon} alt="" className="h-5" />
                    {item.name}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={"flex-1"}>
        <div className="flex items-center border-b text-brand-600 border-brand-600 h-10 gap-12">
          <div className="flex px-3 items-center border-r border-brand-600 h-full gap-12 hover:text-white">
            {filters.length === 0
              ? "all_projects"
              : filters.reduce((prev, curr) => prev + "; " + curr)}

            <div className="items-center justify-center p-1 hover:rounded-md hover:text-white-100 hover:bg-brand-500 hover:transition">
              <X weight="bold" size={12} />
            </div>
          </div>
        </div>

        <main className="inline-flex flex-wrap w-full h-full py-12 px-14 overflow-y-auto gap-8">
          <ProjectCard />
        </main>
      </div>
    </div>
  );
};

export default Projects;
