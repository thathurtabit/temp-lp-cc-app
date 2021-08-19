import { FC, useContext, useEffect } from "react";
import { Button } from "../components/Button/Button";
import { AppContext } from "../context/context/AppContext";
import { EButtonTypes } from "../global/types";
import * as AppActions from "../context/actions/app/actions";
import { useSelectChatProviderScript } from "../hooks/useSelectChatProviderScript";
import { useBindToLivePersonReady } from "../hooks/useBindToLivePersonReady";
import { HiddenEngagement } from "../components/HiddenEngagment/HiddenEngagement";
import { PopupChat } from "../components/PopupChat/PopupChat";
import { useRef } from "react";
export const FullPageAd: FC = () => {
  const livePersonChatButtonRef = useRef(null);
  const livePersonTextButtonRef = useRef(null);
  const { state, dispatch } = useContext(AppContext);
  const { fullPageAdData } = state;
  const chatProvider = fullPageAdData?.chatProvider;

  useSelectChatProviderScript();
  useBindToLivePersonReady();

  useEffect(() => {
    dispatch(AppActions.setLivePersonChatButtonRef(livePersonChatButtonRef));
    dispatch(AppActions.setLivePersonTextButtonRef(livePersonTextButtonRef));
  }, [dispatch]);

  return (
    <section>
      <h1>{chatProvider}</h1>
      <Button text="Chat Now" type={EButtonTypes.CHAT} />
      <Button text="Send Text" type={EButtonTypes.TEXT} />
      <div>
        <HiddenEngagement
          ref={livePersonChatButtonRef}
          type={EButtonTypes.CHAT}
        />
        <HiddenEngagement
          ref={livePersonTextButtonRef}
          type={EButtonTypes.TEXT}
        />
      </div>
      <PopupChat />
    </section>
  );
};
