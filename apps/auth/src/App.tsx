import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import "./App.less";

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);

    history.replaceState(null, "/dashboard", "/dashboard");
  };
  return (
    <div className="io-page-auth">
      <div className="io-form__container">
        <div className="io-logo" />
        <div className="io-form__wrapper">
          <Form
            className="io-form"
            name="login"
            initialValues={{ username: "ionia" }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                size="large"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" block htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default hot(observer(App));
