import { FC } from "react";
import { useSetFullPageAdData } from "../hooks/useSetFullPageAdData";
import "./Main.css";

export const Main: FC = ({ children }) => {
  useSetFullPageAdData();

  return <main className="main">{children}</main>;
};
