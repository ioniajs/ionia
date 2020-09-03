import Column from "@/pages/Column";
import Home from "@/pages/Home";
import { SlaveLayout } from "@ionia/libs";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const App: React.FC = () => {
  return <SlaveLayout menus={routes} />;
};

export default hot(App);
