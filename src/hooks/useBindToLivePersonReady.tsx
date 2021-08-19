import { useContext, useEffect } from "react";
import { AppContext } from "../context/context/AppContext";
import * as AppActions from "../context/actions/app/actions";
import { EChatProviders } from "../global/types";

export const useBindToLivePersonReady = () => {
  const { state, dispatch } = useContext(AppContext);
  const { fullPageAdData } = state;
  const chatProvider = fullPageAdData?.chatProvider;

  useEffect(() => {
    if (chatProvider === EChatProviders.LIVE_PERSON) {
      const livePersonCallback = (data: any) => {
        dispatch(AppActions.setLivePersonEngagementData(data));
        dispatch(AppActions.setIsChatReady(true));
      };

      // Bind to this LP event and run callback on complete
      window.lpTag.events.bind({
        eventName: "OFFER_DISPLAY",
        appName: "LP_OFFERS",
        func: livePersonCallback,
      });
    }
  }, [chatProvider, dispatch]);
};
