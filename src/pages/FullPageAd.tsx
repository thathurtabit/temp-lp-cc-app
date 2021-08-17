import { useContext } from "react";
import { FC } from "react";
import { Button } from "../components/Button/Button";
import { AppContext } from "../context/context/AppContext";
import { EButtonTypes } from "../global/types";
import { useSelectChatProviderScript } from "../hooks/useSelectChatProviderScript";

export const FullPageAd: FC = () => {
  const { state } = useContext(AppContext);
  const { fullPageAdData } = state;
  const chatProvider = fullPageAdData?.chatProvider;

  useSelectChatProviderScript();

  return (
    <section>
      <h1>{chatProvider}</h1>
      <Button text="Chat Now" type={EButtonTypes.CHAT} />
      <Button text="Send Text" type={EButtonTypes.TEXT} />
    </section>
  );
};
