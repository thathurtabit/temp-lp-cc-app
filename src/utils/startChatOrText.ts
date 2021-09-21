import { Dispatch } from "react";
import { EButtonTypes, EChatProviders, ILivePerson } from "./../global/types";
import { getConversationId } from "./getConversationId";
import * as AppActions from "../context/actions/app/actions";

interface IStartCharOrText {
  chatProvider: EChatProviders;
  type: EButtonTypes;
  livePerson?: ILivePerson;
  dispatch: Dispatch<any>;
}

export const startChatOrText = async ({
  chatProvider,
  type,
  livePerson,
  dispatch,
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
      dispatch(AppActions.setConversationId(conversationId));

      const hiddenLivePersonChatEngagement = livePerson?.chatButtonRef;
      const hiddenLivePersonTextEngagement = livePerson?.textButtonRef;

      if (type === EButtonTypes.CHAT) {
        // const generatedEmbeddedButton: HTMLElement =
        //   hiddenLivePersonChatEngagement?.current?.children.item(
        //     0
        //   ) as HTMLElement;
        // generatedEmbeddedButton.click();
        window.lpTag.taglets.providerSubscription.click({referenceId: "20380", engagementId: 3186547350});
      } else {
        // hiddenLivePersonTextEngagement?.current?.click();
        // const generatedEmbeddedButton: HTMLElement =
        //   hiddenLivePersonTextEngagement?.current?.children.item(
        //     0
        //   ) as HTMLElement;
        // generatedEmbeddedButton.click();
        window.lpTag.taglets.providerSubscription.click({referenceId: "66897", engagementId: 3186547950});
      }
      break;
    default:
      break;
  }
};
