import { SideEffect } from "./side-effect";

export interface Vaccine {
  researchName: string,
  manufacturerName: string;
  vaccineType: string;
  requiredNumberOfShots: number;
  availableNumberOfShots: number;
  approved: boolean;
  sideEffects: SideEffect[];
}
