import { useContext, forwardRef } from "react";
import { AppContext } from "../../context/context/AppContext";
import { EButtonTypes, EChatProviders } from "../../global/types";
import { IHiddenEngagement } from "./HiddenEngagement.types";
import { engagementClass } from "../../global/constants";
import "./HiddenEngagement.css";

export const HiddenEngagement = forwardRef<HTMLSpanElement, IHiddenEngagement>(
  ({ type }, ref) => {
    const { state } = useContext(AppContext);
    const { fullPageAdData, conversationId } = state;

    if (fullPageAdData?.chatProvider !== EChatProviders.LIVE_PERSON)
      return null;

    const className =
      type === EButtonTypes.CHAT ? engagementClass.chat : engagementClass.text;

    const dataAttrs = {
      "data-lp-referenceid":
        type === EButtonTypes.CHAT
          ? fullPageAdData.chatRefID
          : fullPageAdData.textRefID,
      "data-lp-sdes": JSON.stringify([
        {
          type: "voi",
          voi: {
            year: fullPageAdData.year,
            make: fullPageAdData.make,
            model: fullPageAdData.model,
            vin: fullPageAdData.vin,
            stockType: fullPageAdData.stockType,
            trim: fullPageAdData.trim,
          },
        },
        { type: "personal", personal: { company: conversationId } },
      ]),
    };

    return <span ref={ref} className={className} {...dataAttrs} />;
  }
);
