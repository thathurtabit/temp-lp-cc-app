import { EChatProviders, PageRoutes } from "./types";

export const pageRoutes: PageRoutes = {
  gubagoo: {
    slug: "/gubagoo",
    title: EChatProviders.GUBAGOO,
  },
  livePerson: {
    slug: "/live-person",
    title: EChatProviders.LIVE_PERSON,
  },
};

export const engagementClass = {
  chat: "lp-chat-engagement",
  chat2: "lp-chat-engagement-2",
  text: "lp-text-engagement",
  text2: "lp-text-engagement-2",
};
