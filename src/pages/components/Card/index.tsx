import type { NextComponentType } from "next";

const ProjectCard: NextComponentType = () => {
  return (
    <div className="flex flex-col w-[23rem] h-[21.8rem] rounded-2xl gap-4">
      <p>
        <span className="text-purple-900 font-bold">Project 1</span>
        <span className="text-brand-600">{" // _project name"}</span>
      </p>
      <div className="flex flex-col border rounded-2xl border-brand-600">
        <div className="flex h-36 w-full bg-project_image bg-cover">
          <div className="flex relative top-5 left-[calc(100%-3rem)] h-8 w-8 rounded-sm bg-blue-300 items-center justify-center">
            <img src="/icons/react_dark.svg" className="h-[70%]" />
          </div>
        </div>
        <div className="flex flex-col px-6 pt-6 pb-8 gap-4">
          <p className="text-brand-600 text-lg">
            Duis aute irure dolor in velit esse cillum dolore.
          </p>
          <button className="text-white-100 bg-brand-500 rounded-lg hover:opacity-80">
            view-project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
