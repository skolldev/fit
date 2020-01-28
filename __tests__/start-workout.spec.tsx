import { render, RenderResult, fireEvent } from "@testing-library/react";
import React from "react";
import { axe } from "jest-axe";
import { IExercise } from "../models/exercise.interface";
import ExerciseLibraryContext from "../components/ExerciseLibraryContext";
import StartWorkout from "../pages/start-workout";

// jest.mock("uuid/v4");
// jest.mock("next/router");

const mockLibrary: IExercise[] = [
  {
    id: "a",
    displayName: "Bench Press",
    equipment: "Barbell"
  },
  {
    id: "b",
    displayName: "Conventional Deadlift",
    equipment: "Barbell"
  },

  {
    id: "c",
    displayName: "High Bar Squat",
    equipment: "Barbell"
  }
];

let renderResult: RenderResult;
describe("exercise", () => {
  beforeEach(() => {
    renderResult = render(
      <ExerciseLibraryContext.Provider value={mockLibrary}>
        <StartWorkout />
      </ExerciseLibraryContext.Provider>
    );
  });

  test("should be able to select and deselect exercises", () => {
    const { getByText } = renderResult;

    const element = getByText(/bench press/i);
    fireEvent.click(element);

    expect(
      element.parentElement?.parentElement?.parentElement?.classList
    ).toContain("border-red-700");

    fireEvent.click(element);

    expect(
      element.parentElement?.parentElement?.parentElement?.classList
    ).not.toContain("border-red-700");
  });

  // test("should pass exercises to workout", () => {
  //   const { getByText } = renderResult;

  //   (uuid as any).default = (): string => "id";

  //   fireEvent.click(getByText(/bench press/i));
  //   fireEvent.click(getByText(/high bar squat/i));
  //   fireEvent.click(getByText(/start/i));

  //   expect(localStorage.setItem).toHaveBeenCalledWith(["id", {}]);
  // });

  test("should be accessible", async () => {
    const { container } = renderResult;
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
