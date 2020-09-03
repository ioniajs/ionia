import { SlaveLayout } from "@ionia/libs";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import routes from "./routes";

const App: React.FC = () => {
  return <SlaveLayout menus={routes} />;
};

export default hot(App);
