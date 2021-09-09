import { EChatProviders, PageRoutes } from "./types";

export const pageRoutes: PageRoutes = {
  gubagoo: {
    slug: "/gubagoo",
    title: EChatProviders.GUBAGOO,
  },
  contactAtOnce: {
    slug: "/contact-at-once",
    title: EChatProviders.CONTACT_AT_ONCE,
  },
  livePerson: {
    slug: "/live-person",
    title: EChatProviders.LIVE_PERSON,
  },
};

export const engagementClass = {
  chat: "lp-chat-engagement",
  text: "lp-text-engagement",
};
