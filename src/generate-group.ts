import { Group } from "./@types/Group";
import { randomNumber } from "./utils/random-number";

const LETTERS = "abcdefghijklmnopqrstuvwxyz";

export function generateLetterGroup(): Group<"letter"> {
  return (LETTERS[randomNumber(0, LETTERS.length - 1)] +
    LETTERS[randomNumber(0, LETTERS.length - 1)]) as Group<"letter">;
}

export function generateNumberGroup(): Group<"number"> {
  return `${randomNumber(0, 9)}${randomNumber(0, 9)}` as Group<"number">;
}
