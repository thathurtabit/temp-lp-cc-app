export enum EChatProviders {
  GUBAGOO = "Gubagoo",
  LIVE_PERSON = "Live Person",
}

export enum EButtonTypes {
  CHAT = "Chat",
  TEXT = "Text",
}

export interface IFullPageAdData {
  chatProvider: EChatProviders;
  DID: number;
  year: number;
  make: string;
  model: string;
  vin: string;
  stockType: "USED" | "NEW";
  trim: string;
}
