import { IFullPageAdData } from "../../../global/types";
import * as Actions from "../../constants/constants";

export const setConversationId = (payload: string) => ({
  type: Actions.SET_CONVERSATION_ID,
  payload,
});

export const setFullPageAdData = (payload?: IFullPageAdData) => ({
  type: Actions.SET_FULL_PAGE_AD_DATA,
  payload,
});

export const setIsChatReady = (payload: boolean) => ({
  type: Actions.SET_IS_CHAT_READY,
  payload,
});
