import { GlobalLayout } from "@ionia/libs";
import { isQiankun, initQiankun } from "@ionia/libs";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const containerId = "#slave-container";

const render = (props: any) => {
  const { container } = props;
  ReactDOM.render(
    <GlobalLayout globalProps={isQiankun ? props : null}>
      <App />
    </GlobalLayout>,
    container
      ? container.querySelector(containerId)
      : document.querySelector(containerId)
  );
};

if (!isQiankun) {
  render({});
} else {
  initQiankun();
}

export async function bootstrap() {}

export async function mount(props: any) {
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
