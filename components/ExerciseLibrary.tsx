import React, { useContext, useState, ChangeEvent } from "react";
import Exercise from "./Exercise";
import ExerciseLibraryContext from "./ExerciseLibraryContext";

const ExerciseLibrary = (): JSX.Element => {
  const totalLibrary = useContext(ExerciseLibraryContext);

  const [library, setLibrary] = useState(totalLibrary);
  const [filter, setFilter] = useState("");

  const filterLibrary = (event: ChangeEvent<HTMLInputElement>): void => {
    const filterValue = event.target.value.toLowerCase();
    const result = filterValue
      ? totalLibrary
          .filter(ex => ex.displayName.toLowerCase().includes(filterValue))
          .sort(({ displayName: a }, { displayName: b }) =>
            a > b ? 1 : b > a ? -1 : 0
          )
      : totalLibrary;

    setFilter(filterValue);
    setLibrary(result);
  };

  return (
    <div>
      <div className="flex flex-col w-1/6">
        <label htmlFor="exercise-search-input">Search Exercises</label>
        <input
          className="border border-gray-500"
          id="exercise-search-input"
          type="text"
          onChange={filterLibrary}
        />
      </div>
      <span className="text-xl">
        {filter
          ? `Found ${library.length} results for "${filter}":`
          : `Showing all ${totalLibrary.length} exercises`}
      </span>
      {library.map(exercise => {
        return <Exercise key={exercise.id} exercise={exercise} />;
      })}
    </div>
  );
};

export default ExerciseLibrary;
