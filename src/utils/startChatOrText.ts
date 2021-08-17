import { EButtonTypes, EChatProviders } from "./../global/types";
import { getConversationId } from "./getConversationId";
interface IStartCharOrText {
  chatProvider: EChatProviders;
  type: EButtonTypes;
}

export const startChatOrText = async ({
  chatProvider,
  type,
}: IStartCharOrText) => {
  const conversationId = await getConversationId();
  console.log(`Start ${type} for ${chatProvider}`);

  switch (chatProvider) {
    case EChatProviders.GUBAGOO:
      if (type === EButtonTypes.CHAT) {
        window.gubagooCustomParams.conversationId = conversationId;
        try {
          window?.ggChat();
        } catch (error) {
          console.error("Couldn't start Gubagoo chat", error);
        }
      } else {
        try {
          window?.ggToolbar?.apps.chat?.goMobile();
        } catch (error) {
          console.error("Couldn't start Gubagoo text", error);
        }
      }
      break;
    case EChatProviders.LIVE_PERSON:
      if (type === EButtonTypes.CHAT) {
      } else {
      }
      break;
    default:
      break;
  }
};
