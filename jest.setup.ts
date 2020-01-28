import "@testing-library/jest-dom/extend-expect";
import "jest-axe/extend-expect";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
(global as any).localStorage = localStorageMock;
