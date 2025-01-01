import { calcExpensePercentage } from "../utils/helpers/methods";

test("should calculate percentage correctly", () => {
  expect(calcExpensePercentage(500, 1000)).toBe("50.00");
});

test("should return a string", () => {
  expect(typeof calcExpensePercentage(500, 1000)).toBe("string");
});
