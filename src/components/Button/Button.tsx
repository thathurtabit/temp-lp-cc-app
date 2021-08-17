import { FC } from "react";
import { IButton } from "./Button.types";
import "./Button.css";
import { EButtonTypes, EChatProviders } from "../../global/types";
import { useContext } from "react";
import { AppContext } from "../../context/context/AppContext";
import { startChatOrText } from "../../utils/startChatOrText";

export const Button: FC<IButton> = ({ text, type, additionalClassNames }) => {
  const { state } = useContext(AppContext);
  const { fullPageAdData, isChatReady } = state;
  const chatProvider = fullPageAdData?.chatProvider;

  const conditionalClassNames = () => {
    if (chatProvider !== EChatProviders.LIVE_PERSON) return null;
    return type === EButtonTypes.CHAT
      ? "lp-chat-engagement"
      : "lp-text-engagement";
  };

  const handleStartChatOrText = () => {
    chatProvider && startChatOrText({ chatProvider, type });
  };

  return (
    <button
      className={`button ${additionalClassNames} ${
        conditionalClassNames() ?? ""
      }`}
      disabled={!isChatReady}
      onClick={handleStartChatOrText}
    >
      {text}
    </button>
  );
};
