import React from "react";
import data from "../../constants/data";

const Jobs = ({ handleFilter, filter }) => {
  const filteredData = data.filter((job) => {
    if (filter.length === 0) {
      return true; // no filter applied, return all jobs
    }
    // check if the job matches all filter items
    return filter.every((item) => {
      return (
        item === job.role ||
        item === job.level ||
        job.languages.includes(item) ||
        job.tools.includes(item)
      );
    });
  });

  return (
    <div className="w-[1440px] mx-auto py-28 flex flex-col gap-6 xl:w-auto lg:gap-16">
      {filteredData.map((job, i) => (
        <div
          id={job.id}
          key={i}
          className={`w-4/5 mx-auto flex justify-between items-center bg-white px-10 py-8 rounded-md shadow-lg lg:flex-col lg:items-start lg:relative lg:gap-5 ${
            job.new &&
            job.featured &&
            "border-l-[5px] border-DesaturatedDarkCyan"
          }`}
        >
          <div className="flex items-center gap-5 lg:border-b lg:w-full">
            <img
              src={job.logo}
              alt={job.company}
              className="w-20 lg:absolute lg:top-0 lg:-translate-y-1/2 lg:w-16"
            />
            <div className="flex flex-col items-start lg:py-5 lg:gap-2">
              <div className="flex items-center gap-1.5 ">
                <p className="text-DesaturatedDarkCyan pr-2">{job.company}</p>
                {job.new && (
                  <span className="text-xs text-white px-2 pt-1 rounded-full bg-DesaturatedDarkCyan">
                    NEW!
                  </span>
                )}
                {job.featured && (
                  <span className="text-xs text-white px-2 pt-1 rounded-full bg-VeryDarkGrayishCyan">
                    FEATURED
                  </span>
                )}
              </div>
              <p className="font-bold VeryDarkGrayishCyan text-lg cursor-pointer hover:text-DesaturatedDarkCyan">
                {job.position}
              </p>
              <div className="flex items-center gap-8 text-DarkGrayishCyan">
                <span className="relative">
                  {job.postedAt}
                  <div className="w-[5px] h-[5px] bg-DarkGrayishCyan absolute right-[-18px] bottom-1/2 rounded-full" />
                </span>
                <span>{job.contract}</span>
                <span className="relative">
                  {job.location}
                  <div className="w-[5px] h-[5px] bg-DarkGrayishCyan absolute -left-5 bottom-1/2 rounded-full" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-5 text-DesaturatedDarkCyan lg:flex-wrap">
            <span
              className="bg-LightGrayishCyan px-2 pt-1 rounded-sm cursor-pointer hover:bg-DesaturatedDarkCyan hover:text-white"
              onClick={() => handleFilter(job.role)}
            >
              {job.role}
            </span>
            <span
              className="bg-LightGrayishCyan px-2 pt-1 rounded-sm cursor-pointer hover:bg-DesaturatedDarkCyan hover:text-white"
              onClick={() => handleFilter(job.level)}
            >
              {job.level}
            </span>
            {job.languages.concat(job.tools).map((item, index) => (
              <span
                key={index}
                className="bg-LightGrayishCyan px-2 pt-1 rounded-sm cursor-pointer hover:bg-DesaturatedDarkCyan hover:text-white"
                onClick={() => handleFilter(item)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
