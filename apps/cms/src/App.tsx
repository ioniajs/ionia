import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { MainLayout } from "@ionia/libs";
import "./App.less";

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);

    history.replaceState(null, "/dashboard", "/dashboard");
  };
  return <MainLayout>11</MainLayout>;
};

export default hot(observer(App));
