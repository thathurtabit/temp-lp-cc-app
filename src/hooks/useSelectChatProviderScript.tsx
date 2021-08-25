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

  useEffect(() => {
    const { gubagoo, livePerson } = pageRoutes;

    const getScriptIdFormat = (scriptId: string) =>
      `script-${scriptId.toLowerCase().replace(" ", "-")}`;

    const chatProviderRaw = fullPageAdData?.chatProvider || "";
    const scriptId = getScriptIdFormat(chatProviderRaw);
    const DID = fullPageAdData?.DID || 0;

    switch (pathname) {
      case gubagoo.slug:
        console.log("adding script: ", scriptId);
        fullPageAdData && addGubagooScript(fullPageAdData, scriptId, DID);
        dispatch(AppActions.setIsChatReady(true));
        break;
      case livePerson.slug:
      case `${livePerson.slug}-2`:
        console.log("adding script: ", scriptId);
        addLivePersonScript(scriptId);
        break;
      default:
        break;
    }

    return () => {
      dispatch(AppActions.setIsChatReady(false));

      console.log("remove script tag: ", scriptId);

      // On unmount, remove script
      const scriptTag = document.getElementById(scriptId);
      if (scriptTag) {
        scriptTag?.parentNode?.removeChild(scriptTag);
      }
    };
  }, [pathname, fullPageAdData, dispatch]);
};
