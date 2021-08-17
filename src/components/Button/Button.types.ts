import { EButtonTypes } from "../../global/types";

export interface IButton {
  text: string;
  type: EButtonTypes;
  additionalClassNames?: string;
}
