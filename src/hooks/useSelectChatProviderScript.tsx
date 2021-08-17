import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { AppContext } from "../context/context/AppContext";
import * as AppActions from "../context/actions/app/actions";
import { pageRoutes } from "../global/constants";
import { addGubagooScript } from "../utils/addGubagooScript";
import { addLivePersonScript } from "../utils/addLivePersonScript";

export const useSelectChatProviderScript = () => {
  const { state, dispatch } = useContext(AppContext);
  const { pathname } = useLocation();
  const { fullPageAdData } = state;

  const livePersonWaitForScriptReady = () => {
    const livePersonIsReady = (data: any) => {
      console.log({ data });
    };

    window.lpTag.events.bind({
      eventName: "OFFER_DISPLAY",
      appName: "LP_OFFERS",
      func: livePersonIsReady,
      context: null,
      async: false, //default is false,
      triggerOnce: true, //default is false
    });
  };

  useEffect(() => {
    const { gubagoo, livePerson } = pageRoutes;

    const chatProvider = fullPageAdData?.chatProvider || "";
    const DID = fullPageAdData?.DID || 0;

    switch (pathname) {
      case gubagoo.slug:
        fullPageAdData && addGubagooScript(fullPageAdData, chatProvider, DID);
        dispatch(AppActions.setIsChatReady(true));
        break;
      case livePerson.slug:
        addLivePersonScript(chatProvider);
        livePersonWaitForScriptReady();
        break;
      default:
        break;
    }

    return () => {
      // On unmount, remove script
      const scriptTag = document.getElementById(`script-${chatProvider}`);
      if (scriptTag) {
        scriptTag?.parentNode?.removeChild(scriptTag);
      }
    };
  }, [pathname, fullPageAdData, dispatch]);
};
