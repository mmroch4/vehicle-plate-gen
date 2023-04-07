import { Group } from "./Group";

type PlateGroup = Group<"letter"> | Group<"number">;

export type Plate = PlateGroup[];
