import ProLayout from "@ant-design/pro-layout";
import { BlankLayout, SlaveApp, useGlobalStore } from "@ionia/libs";
import { IoniaApp } from "@ionia/libs/es/core/master-application";
import React from "react";
import { hot } from "react-hot-loader/root";
import { useTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";
import "./App.less";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const { t } = useTranslation();
  const globalStore = useGlobalStore();
  return (
    <Switch>
      <Route path="/auth">
        <BlankLayout>
          <SlaveApp />
        </BlankLayout>
      </Route>
      <Route path="/">
        <ProLayout
          className="io-layout"
          title="Ionia"
          logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
          disableContentMargin
          siderWidth={120}
          route={{
            path: "/",
            routes: globalStore?.state?.apps
              .filter((app: IoniaApp) => !app.hideInMenu)
              .map((app: IoniaApp) => ({
                path: app.activeRule,
                name: app.name ? t(app.name) : "",
              })),
          }}
        >
          <SlaveApp />
        </ProLayout>
      </Route>
    </Switch>
  );
};

export default hot(App);
