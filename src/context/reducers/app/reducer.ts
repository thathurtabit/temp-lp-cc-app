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
    case Actions.SET_LIVEPERSON_ENGAGEMENT_DATA:
      return {
        ...state,
        livePerson: {
          ...state.livePerson,
          engagementData: payload,
        },
      };
    case Actions.SET_LIVEPERSON_CHAT_BUTTON_REF:
      return {
        ...state,
        livePerson: {
          ...state.livePerson,
          chatButtonRef: payload,
        },
      };
    case Actions.SET_LIVEPERSON_TEXT_BUTTON_REF:
      return {
        ...state,
        livePerson: {
          ...state.livePerson,
          textButtonRef: payload,
        },
      };
    default:
      return state;
  }
};
