import { Vaccine } from "./vaccine";

export interface SideEffect {
  shortDescription: string,
  frequency: number,
  longDescription: string;
  priority: string;
  vaccines: Vaccine[];
}
