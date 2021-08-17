import { useContext } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { AppContext } from "../context/context/AppContext";
import * as AppActions from "../context/actions/app/actions";
import { pageRoutes } from "../global/constants";
import { EChatProviders } from "../global/types";

export const useSetFullPageAdData = () => {
  const { dispatch } = useContext(AppContext);
  const { pathname } = useLocation();
  useEffect(() => {
    const { gubagoo, livePerson } = pageRoutes;

    switch (pathname) {
      case gubagoo.slug:
        dispatch(
          AppActions.setFullPageAdData({
            DID: 4400,
            chatProvider: EChatProviders.GUBAGOO,
            year: 2000,
            make: "Ford",
            model: "Fiesta",
            vin: "xxx",
            stockType: "USED",
            trim: "x-wing",
          })
        );
        break;
      case livePerson.slug:
        dispatch(
          AppActions.setFullPageAdData({
            DID: 10000247,
            chatProvider: EChatProviders.LIVE_PERSON,
            year: 2020,
            make: "Vauxhall",
            model: "Corsa",
            vin: "aaabbbccc",
            stockType: "USED",
            trim: "boy racer",
          })
        );
        break;

      default:
        dispatch(AppActions.setFullPageAdData(undefined));
        break;
    }
  }, [pathname, dispatch]);
};