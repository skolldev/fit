import { render, RenderResult } from "@testing-library/react";
import { build, fake } from "test-data-bot";
import React from "react";
import { axe } from "jest-axe";
import Exercise from "../components/Exercise";
import { IExercise } from "../models/exercise.interface";

const exerciseBuilder = build<IExercise>("Exercise").fields({
  displayName: fake(f => f.commerce.productName()),
  equipment: fake(f => f.commerce.productName()),
  image: fake(f => f.image.sports())
});

let exercise: IExercise;
let renderResult: RenderResult;
describe("exercise", () => {
  beforeEach(() => {
    exercise = exerciseBuilder();
    renderResult = render(<Exercise exercise={exercise} />);
  });
  test("should render exercise name, equipment and image", () => {
    const { getByText, getByAltText } = renderResult;
    const exerciseImage = new RegExp(`${exercise.displayName}`, "i");

    getByText(exercise.displayName);
    getByText(exercise.equipment);
    getByAltText(exerciseImage);
  });

  test("should be accessible", async () => {
    const { container } = renderResult;
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
