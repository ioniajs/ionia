import { Auth } from "@ionia/components";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./init";

const { AccessProvider } = Auth;

declare const __POWERED_BY_QIANKUN__: any;

const containerId = "#slave-container";

const render = (props: any) => {
  const { container } = props;
  ReactDOM.render(
    <AccessProvider>
      <App />
    </AccessProvider>,
    container
      ? container.querySelector(containerId)
      : document.querySelector(containerId)
  );
};

if (!__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[user] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[user] props from main framework", props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector(containerId)
      : document.querySelector(containerId)
  );
}
