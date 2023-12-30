import { createContext, useContext, useEffect, useState } from "react";
import data from "../data/data.json";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filterTags, setFilterTags] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  //   console.log("jobs:", filteredJobs);

  function handleAddFilterTag(tagName) {
    setFilterTags((prevTags) => {
      if (!prevTags.includes(tagName)) {
        return [...prevTags, tagName];
      } else {
        return prevTags;
      }
    });
  }

  function clearAllTags() {
    setFilterTags([]);
  }

  function handleDeleteTag(tagName) {
    setFilterTags((prevTags) => {
      return prevTags.filter((tag) => tag !== tagName);
    });
  }

  useEffect(
    function handleFilteredJobs() {
      //return a set of the job ids that match the tag names
      const newFilteredJobIds = new Set(
        data
          .filter((job) =>
            filterTags.every(
              (prevTag) =>
                prevTag === job.role ||
                prevTag === job.level ||
                job.languages.includes(prevTag) ||
                job.tools.includes(prevTag)
            )
          )
          .map((job) => job.id)
      );

      setFilteredJobs((prevJobs) => {
        // Filter out job IDs that don't match the current filterTags
        const updatedJobs = prevJobs.filter((jobId) =>
          newFilteredJobIds.has(jobId)
        );

        // Add new job IDs from the current filterTags
        return [
          ...updatedJobs,
          ...Array.from(newFilteredJobIds).filter(
            (jobId) => !updatedJobs.includes(jobId)
          ),
        ];
      });
    },
    [filterTags]
  );

  return (
    <FilterContext.Provider
      value={{
        filterTags,
        handleAddFilterTag,
        clearAllTags,
        handleDeleteTag,
        filteredJobs,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined)
    throw new Error("FilterContext was used outside of the FilterProvider");
  return context;
}

export { FilterProvider, useFilter };
