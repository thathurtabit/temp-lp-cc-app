import { FC, useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/context/AppContext";
import { Button } from "../../components/Button/Button";
import { EButtonTypes } from "../../global/types";
import "./PopupChat.css";

export const PopupChat: FC = () => {
  const { state } = useContext(AppContext);
  const [showPopup, setShowPopup] = useState(false);
  const { isChatReady } = state;

  useEffect(() => {
    setTimeout(() => setShowPopup(isChatReady), 500);
  }, [isChatReady]);

  if (!isChatReady) return null;

  return (
    <section className={`popup-chat ${showPopup ? "ready" : ""}`}>
      <h3>Chat is ready</h3>
      <div className="popup-chat-buttons">
        <Button text="Chat Now" type={EButtonTypes.CHAT} />
        <Button text="Send Text" type={EButtonTypes.TEXT} />
      </div>
    </section>
  );
};
