import { Plate } from "./@types/Plate";
import { generateLetterGroup, generateNumberGroup } from "./generate-group";
import { patterns, patternsCount } from "./patterns";
import { placeholder } from "./placeholder";
import { randomNumber } from "./utils/random-number";

function generatePlate(): string {
  const plate: Plate = [];

  const pattern = patterns[randomNumber(0, patternsCount)];

  for (const group of pattern) {
    if (group === placeholder.number) {
      plate.push(generateNumberGroup());
    } else if (group === placeholder.letter) {
      plate.push(generateLetterGroup());
    }
  }

  return plate.join("•").toLocaleUpperCase();
}

console.log(generatePlate());
