import { RefObject } from "react";

export enum EChatProviders {
  GUBAGOO = "Gubagoo",
  LIVE_PERSON = "Live Person",
}

export enum EButtonTypes {
  CHAT = "Chat",
  TEXT = "Text",
}

export interface PageRoutes {
  [key: string]: {
    slug: string;
    title: EChatProviders;
  };
}

export interface IFullPageAdData {
  title: string;
  chatProvider: EChatProviders;
  DID: number;
  chatRefID?: number;
  textRefID?: number;
  year: number;
  make: string;
  model: string;
  vin: string;
  stockType: "USED" | "NEW";
  trim: string;
}

export interface ILivePerson {
  engagementData?: Object;
  chatButtonRef?: RefObject<HTMLButtonElement>;
  textButtonRef?: RefObject<HTMLButtonElement>;
}
