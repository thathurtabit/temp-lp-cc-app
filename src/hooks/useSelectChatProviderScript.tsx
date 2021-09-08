import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { AppContext } from "../context/context/AppContext";
import * as AppActions from "../context/actions/app/actions";
import { pageRoutes } from "../global/constants";
import { addGubagooScript } from "../utils/addGubagooScript";
import { addLivePersonScript } from "../utils/addLivePersonScript";
import { HiddenEngagement } from "../components/HiddenEngagment/HiddenEngagement";

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
        fullPageAdData && addGubagooScript(fullPageAdData, scriptId, DID);
        dispatch(AppActions.setIsChatReady(true));
        break;
      case livePerson.slug:
      case `${livePerson.slug}-2`:
        addLivePersonScript(scriptId);
        break;
      default:
        break;
    }

    return () => {
      //dispatch(AppActions.setIsChatReady(false));

      // On unmount, remove script
      const scriptTag = document.getElementById(scriptId);

      var parent = document.getElementsByClassName("gan-test1")[0];
      var child = parent ? parent.children[0] : undefined;

      if (parent && child) {
       console.log("remove child")
       parent.removeChild(child);
       parent.removeAttribute('id');
      //parent.remove();
      }

    //  aa()
      if (scriptTag) {
        // remove script tag
        console.log("remove window")
        window.lpTag?.taglets?.lpUnifiedWindow &&
        window.lpTag.taglets.lpUnifiedWindow.onBeforeNavigation({
          dispose: true,
        });
        //scriptTag?.parentNode?.removeChild(scriptTag);

      }

      console.log("unmounting...");
      window.lpTag?.taglets?.lpUnifiedWindow &&
        window.lpTag.taglets.lpUnifiedWindow.onBeforeNavigation({
          dispose: true,
        });
    };
  }, [pathname, fullPageAdData, dispatch]);
};
