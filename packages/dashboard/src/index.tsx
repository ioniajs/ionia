import configs from "@/configs";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./public-path";

const render = (props: any) => {
  const { container } = props;
  ReactDOM.render(
    <App {...props} />,
    container
      ? container.querySelector("#slave-container")
      : document.getElementById("slave-container")
  );
};

if (!configs.isQiankun) {
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react16] props from main framework", props);

  props.onGlobalStateChange((state: any, prev: any) => {
    console.log("【Slave】", state, prev);
  });

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
