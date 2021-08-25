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
    const DID = fullPageAdData?.DID;

    if (fullPageAdData?.chatProvider !== EChatProviders.LIVE_PERSON)
      return null;

    let className: string;

    if (DID === 10000248) {
      if (type === EButtonTypes.CHAT) {
        className = engagementClass.chat2;
      } else {
        className = engagementClass.text2;
      }
    } else {
      if (type === EButtonTypes.CHAT) {
        className = engagementClass.chat;
      } else {
        className = engagementClass.text;
      }
    }

    const dataAttrs = {
      "data-lp-referenceid": fullPageAdData.DID,
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
