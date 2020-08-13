import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

declare const __POWERED_BY_QIANKUN__: any;

function render(props: any) {
  const { container } = props;
  ReactDOM.render(
    <App name="Dashboard" />,
    container
      ? container.querySelector("#slave-container")
      : document.getElementById("slave-container")
  );
}

if (!__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#slave-container")
      : document.getElementById("slave-container")
  );
}
