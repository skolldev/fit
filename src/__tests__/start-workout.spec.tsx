/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { render, RenderResult, fireEvent } from "@testing-library/react";
import React from "react";
import { axe } from "jest-axe";
import uuid from "uuid/v4";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { IExercise } from "../models/exercise.interface";
import ExerciseLibraryContext from "../components/ExerciseLibraryContext";
import StartWorkout from "../pages/start-workout";

jest.mock("uuid/v4");

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
  let router;
  beforeEach(() => {
    router = {
      pathname: "/start-workout",
      route: "/start-workout",
      asPath: "/start-workout",
      query: { start: "" },
      push: jest.fn(() => Promise.resolve(true)),
      replace: () => Promise.resolve(true),
      reload: () => {},
      back: () => {},
      prefetch: () => Promise.resolve(),
      beforePopState: () => {},
      events: { on: () => {}, off: () => {}, emit: () => {} }
    };
    renderResult = render(
      <RouterContext.Provider value={router}>
        <ExerciseLibraryContext.Provider value={mockLibrary}>
          <StartWorkout />
        </ExerciseLibraryContext.Provider>
      </RouterContext.Provider>
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

  test("should not start workout without any exercises", () => {
    const { getByText } = renderResult;
    fireEvent.click(getByText(/start/i));
    expect(router.push).not.toHaveBeenCalled();
  });

  test("should pass exercises to workout", () => {
    const { getByText } = renderResult;
    (uuid as any).mockImplementation((): string => "12");

    fireEvent.click(getByText(/bench press/i));
    fireEvent.click(getByText(/high bar squat/i));
    fireEvent.click(getByText(/start/i));

    expect(router.push).toHaveBeenCalledWith("/workout/12");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const savedWorkout = JSON.parse(localStorage.getItem("12")!);
    expect(savedWorkout.exercises).toMatchInlineSnapshot(`
      Array [
        Object {
          "displayName": "Bench Press",
          "equipment": "Barbell",
          "id": "a",
        },
        Object {
          "displayName": "High Bar Squat",
          "equipment": "Barbell",
          "id": "c",
        },
      ]
    `);
  });

  test("should be accessible", async () => {
    const { container, debug } = renderResult;
    const result = await axe(container);
    debug();
    expect(result).toHaveNoViolations();
  });
});
