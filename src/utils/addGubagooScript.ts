import { IFullPageAdData } from "../global/types";
import { addScript } from "./addScript";

export const addGubagooScript = (
  fullPageAdData: IFullPageAdData,
  scriptId: string,
  DID: number
) => {
  window.gubagooCustomParams = {
    make: fullPageAdData.make,
    model: fullPageAdData.model,
    trim: fullPageAdData.trim,
    vin: fullPageAdData.vin,
    year: fullPageAdData.year,
  };

  if (DID) {
    addScript({
      src: `https://cdn.gubagoo.io/toolbars/integration/ATUK_${DID}.js`,
      id: scriptId,
      async: true,
    });
  }
};
