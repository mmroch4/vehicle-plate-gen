import { Placeholder } from "./Placeholder";

type PlaceholderGroup = Placeholder["letter"] | Placeholder["number"];

export type Pattern = PlaceholderGroup[];
