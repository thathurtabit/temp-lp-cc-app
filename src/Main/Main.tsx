import { FC } from "react";
import { useLocation } from "react-router";
import { useOnPageChange } from "../hooks/useOnPageChange";
import { useSetFullPageAdData } from "../hooks/useSetFullPageAdData";
import "./Main.css";

export const Main: FC = ({ children }) => {
  useSetFullPageAdData();
  const location = useLocation();
  useOnPageChange(location.pathname);

  return <main className="main">{children}</main>;
};
