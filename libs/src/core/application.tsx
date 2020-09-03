import { MicroAppStateActions } from "qiankun";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalLayout } from "../layouts";
import { initSlave, isSlave } from "../utils";

export interface SlaveAppProps extends MicroAppStateActions {
  container?: any;
}

class Application {
  constructor(
    private readonly root: React.ReactNode,
    private readonly containerId: string = "#app"
  ) {}

  start(callback?: Function): void {
    callback && callback();
    if (!isSlave) {
      this.render();
    } else {
      initSlave();
    }
  }

  async bootstrap() {}

  async mount(props: any) {
    this.render(props);
  }

  async unmount(props: any) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(
      container
        ? container.querySelector(this.containerId)
        : document.querySelector(this.containerId)
    );
  }

  private render(props?: SlaveAppProps) {
    const { container } = props ?? {};
    ReactDOM.render(
      <GlobalLayout globalProps={props}>{this.root}</GlobalLayout>,
      container
        ? container.querySelector(this.containerId)
        : document.querySelector(this.containerId)
    );
  }
}

export default Application;
