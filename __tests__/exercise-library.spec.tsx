import { render, RenderResult, fireEvent } from "@testing-library/react";
import React from "react";
import { axe } from "jest-axe";
import { IExercise } from "../models/exercise.interface";
import ExerciseLibrary from "../components/ExerciseLibrary";
import ExerciseLibraryContext from "../components/ExerciseLibraryContext";

let mockLibrary: IExercise[] = [
  {
    id: 0,
    displayName: "Bench Press",
    equipment: "Barbell"
  },
  {
    id: 1,
    displayName: "Conventional Deadlift",
    equipment: "Barbell"
  },

  {
    id: 2,
    displayName: "High Bar Squat",
    equipment: "Barbell"
  }
];

let renderResult: RenderResult;
describe("exercise", () => {
  beforeEach(() => {
    renderResult = render(
      <ExerciseLibraryContext.Provider value={mockLibrary}>
        <ExerciseLibrary />
      </ExerciseLibraryContext.Provider>
    );
  });

  test("should render multiple exercises", () => {
    const { getByText } = renderResult;
    expect(getByText(/bench press/i)).toBeInTheDocument();
    expect(getByText(/high bar squat/i)).toBeInTheDocument();
  });

  test("should be accessible", async () => {
    const { container } = renderResult;
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });

  test("should be able to filter the library", () => {
    const { getByLabelText, getByText, queryByText } = renderResult;

    fireEvent.change(getByLabelText(/search exercises/i), {
      target: { value: "squat" }
    });
    expect(getByText(/high bar squat/i));
    expect(queryByText(/bench press/i)).not.toBeInTheDocument();

    fireEvent.change(getByLabelText(/search exercises/i), {
      target: { value: "" }
    });
    expect(getByText(/bench press/i));
  });
});
