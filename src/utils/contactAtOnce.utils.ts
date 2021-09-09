import { IFullPageAdData } from "./../global/types";

export const sdkExecStartChat = (chatConfig: any) => {
  window.lpTag && window.lpTag.sdk.exec("caoEngager.startChat", chatConfig);
};

export const getCommonVariables = (fullPageAdData: IFullPageAdData) => [
  { name: "VRN", value: fullPageAdData.vin },
  { name: "AdvertId", value: fullPageAdData.DID },
  { name: "Year", value: fullPageAdData.year },
  { name: "Model", value: fullPageAdData.model },
  { name: "Make", value: fullPageAdData.make },
  { name: "MerchantId", value: fullPageAdData.DID },
  { name: "Postcode", value: "M15 4FN" },
  { name: "StockType", value: fullPageAdData.stockType },
  { name: "PlacementId", value: 201 },
];
