import { Pattern } from "./@types/Pattern";

// "a" represents a letter group and 1 represents a number group
export const patterns: Pattern[] = [
  ["a", 1, 1],
  [1, "a", 1],
  [1, 1, "a"],
  ["a", 1, "a"],
];

export const patternsCount = patterns.length - 1;
