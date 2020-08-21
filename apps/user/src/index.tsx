import { GlobalLayout } from "@ionia/libs";
import { isQiankun } from "@ionia/libs";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./init";

const containerId = "#slave-container";

const render = (props: any) => {
  const { container } = props;
  ReactDOM.render(
    <GlobalLayout globalProps={props}>
      <App />
    </GlobalLayout>,
    container
      ? container.querySelector(containerId)
      : document.querySelector(containerId)
  );
};

if (!isQiankun) {
  render({});
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
