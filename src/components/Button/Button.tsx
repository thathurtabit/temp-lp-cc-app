import { FC } from "react";
import { IButton } from "./Button.types";
import "./Button.css";
import { useContext } from "react";
import { AppContext } from "../../context/context/AppContext";
import { startChatOrText } from "../../utils/startChatOrText";

export const Button: FC<IButton> = ({ text, type, additionalClassNames }) => {
  const { state } = useContext(AppContext);
  const { fullPageAdData, isChatReady, livePerson } = state;
  const chatProvider = fullPageAdData?.chatProvider;

  const handleStartChatOrText = () => {
    chatProvider && startChatOrText({ chatProvider, type, livePerson });
  };

  return (
    <button
      className={`button ${additionalClassNames ?? ""}`}
      disabled={!isChatReady}
      onClick={handleStartChatOrText}
    >
      {text}
    </button>
  );
};
