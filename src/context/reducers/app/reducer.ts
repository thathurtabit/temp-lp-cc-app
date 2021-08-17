import { IApp } from "../../state/state.types";
import { IAppAction } from "../../state/state.types";
import * as Actions from "../../constants/constants";

export const appReducer = (
  state: IApp,
  { type, payload }: IAppAction
): IApp => {
  switch (type) {
    case Actions.SET_CONVERSATION_ID:
      return {
        ...state,
        conversationId: payload,
      };
    case Actions.SET_FULL_PAGE_AD_DATA:
      return {
        ...state,
        fullPageAdData: payload,
      };
    case Actions.SET_IS_CHAT_READY:
      return {
        ...state,
        isChatReady: payload,
      };
    default:
      return state;
  }
};
