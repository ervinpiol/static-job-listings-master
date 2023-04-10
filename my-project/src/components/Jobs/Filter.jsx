import React from "react";
import IconRemove from "../../assets/icon-remove.svg";

const Filter = ({ filterModal, clearFilter, filter, removeFilter }) => {
  return (
    <div
      className={`w-[1440px] relative mx-auto items-center justify-center xl:w-auto ${
        filterModal ? "flex" : "hidden"
      }`}
    >
      <div className="absolute w-4/5 bg-white px-12 py-5 rounded flex shadow-lg items-center justify-between">
        <div className="flex gap-5 flex-wrap">
          {filter.map((item) => (
            <div
              className="flex text-DesaturatedDarkCyan font-bold "
              key={item}
            >
              <span className="pt-1.5 pb-0.5 pl-3 pr-3 bg-BGLightGrayishCyan rounded-l">
                {item}
              </span>
              <button
                className="bg-DesaturatedDarkCyan hover:bg-VeryDarkGrayishCyan px-2 rounded-r"
                onClick={() => removeFilter(item)}
              >
                <img src={IconRemove} alt="IconRemove" />
              </button>
            </div>
          ))}
        </div>

        <button
          className="text-DesaturatedDarkCyan hover:text-DesaturatedDarkCyan font-bold hover:underline text-lg"
          onClick={clearFilter}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
