import { EChatProviders } from "./types";

interface PageRoutes {
  [key: string]: {
    slug: string;
    title: EChatProviders;
  };
}

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
