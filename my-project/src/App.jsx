import { useState } from "react";
import BGHeaderDesktop from "./assets/bg-header-desktop.svg";
import Filter from "./components/Jobs/Filter";
import Jobs from "./components/Jobs/Jobs";

function App() {
  const [filterModal, setFilterModal] = useState(false);
  const [filter, setFilter] = useState([]);

  const clearFilter = () => {
    setFilter([]);
    setFilterModal(false);
  };

  const handleFilter = (item) => {
    if (!filter.includes(item)) {
      setFilter([...filter, item]);
    }
    setFilterModal(true);
  };

  const removeFilter = (item) => {
    const updatedFilter = filter.filter((f) => f !== item);
    setFilter(updatedFilter);

    if (updatedFilter.length === 0) {
      setFilterModal(false);
    }
  };

  return (
    <div className="App">
      <div className="bg-DesaturatedDarkCyan w-full mx-auto xl:w-auto">
        <img
          src={BGHeaderDesktop}
          alt="BGHeaderDesktop"
          className="h-52 bg-contain lg:h-24 md:h-36"
        />
      </div>
      <Filter
        filterModal={filterModal}
        clearFilter={clearFilter}
        filter={filter}
        removeFilter={removeFilter}
      />
      <Jobs handleFilter={handleFilter} filter={filter} />
    </div>
  );
}
export default App;
