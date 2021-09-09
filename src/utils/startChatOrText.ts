import { Dispatch } from "react";
import {
  EButtonTypes,
  EChatProviders,
  IFullPageAdData,
  ILivePerson,
} from "./../global/types";
import { getConversationId } from "./getConversationId";
import * as AppActions from "../context/actions/app/actions";
import { getCommonVariables, sdkExecStartChat } from "./contactAtOnce.utils";

interface IStartCharOrText {
  chatProvider: EChatProviders;
  type: EButtonTypes;
  livePerson?: ILivePerson;
  fullPageAdData?: IFullPageAdData;
  dispatch: Dispatch<any>;
}

export const startChatOrText = async ({
  chatProvider,
  type,
  livePerson,
  fullPageAdData,
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
    case EChatProviders.CONTACT_AT_ONCE:
      if (type === EButtonTypes.CHAT) {
        const chatEngConfiguration = {
          referenceId: fullPageAdData?.DID,
          channel: "chat",
          lpVars: getCommonVariables(fullPageAdData!),
        };
        sdkExecStartChat(chatEngConfiguration);
      } else {
        const chatEngConfiguration = {
          referenceId: fullPageAdData?.DID,
          channel: "mtc",
          lpVars: getCommonVariables(fullPageAdData!),
          mtc: {
            phoneNumber: "000",
            tapToTextDisabled: false,
            message: `Hello I'm super interested in your vehicle thing`,
          },
        };
        sdkExecStartChat(chatEngConfiguration);
      }
      break;
    case EChatProviders.LIVE_PERSON:
      dispatch(AppActions.setConversationId(conversationId));

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
