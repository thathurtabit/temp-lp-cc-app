import { EButtonTypes, EChatProviders, ILivePerson } from "./../global/types";
import { getConversationId } from "./getConversationId";
interface IStartCharOrText {
  chatProvider: EChatProviders;
  type: EButtonTypes;
  livePerson?: ILivePerson;
}

export const startChatOrText = async ({
  chatProvider,
  type,
  livePerson,
}: IStartCharOrText) => {
  const conversationId = await getConversationId();

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
      const hiddenLivePersonChatEngagement = livePerson?.chatButtonRef;
      const hiddenLivePersonTextEngagement = livePerson?.textButtonRef;

      if (type === EButtonTypes.CHAT) {
        const generatedEmbeddedButton: HTMLElement =
          hiddenLivePersonChatEngagement?.current?.children.item(
            0
          ) as HTMLElement;
        generatedEmbeddedButton.click();
      } else {
        hiddenLivePersonTextEngagement?.current?.click();
        const generatedEmbeddedButton: HTMLElement =
          hiddenLivePersonTextEngagement?.current?.children.item(
            0
          ) as HTMLElement;
        generatedEmbeddedButton.click();
      }
      break;
    default:
      break;
  }
};
