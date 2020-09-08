import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    history.pushState(null, "", "/dashboard");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="io-page__login">
      <Form
        className="io-form__login"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="username">
          <Input
            size="large"
            prefix={<UserOutlined className="icon__prefix" />}
          />
        </Form.Item>

        <Form.Item name="password">
          <Input.Password
            size="large"
            prefix={<LockOutlined className="icon__prefix" />}
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="remember">自动登录</Checkbox>
          </Form.Item>

          <Link className="forgot" to="/auth/forgot">
            忘记密码
          </Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" size="large" block htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
      <div className="other">
        其他登录方式
        <AlipayCircleOutlined className="icon" />
        <TaobaoCircleOutlined className="icon" />
        <WeiboCircleOutlined className="icon" />
        <Link className="register" to="/auth/register">
          注册账户
        </Link>
      </div>
    </div>
  );
};

export default Login;
