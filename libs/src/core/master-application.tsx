import {
  FrameworkLifeCycles,
  initGlobalState,
  MicroAppStateActions,
  registerMicroApps,
  RegistrableApp,
  setDefaultMountApp,
  start,
  FrameworkConfiguration,
} from "qiankun";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalLayout } from "../layouts";

export interface MasterAppProps extends MicroAppStateActions {
  container?: any;
}

class MasterApplication {
  public readonly actions: MicroAppStateActions;

  constructor(
    private readonly root: React.ReactNode,
    private readonly apps: Partial<RegistrableApp<{}>>[],
    private readonly defaultMount: string,
    private readonly lifeCycles: FrameworkLifeCycles<{}>,
    private readonly globalState: Record<string, any> = {},
    private readonly containerId: string = "app"
  ) {
    this.apps = this.apps.map((app) => ({
      container: "#slave-container",
      ...app,
    }));
    this.actions = initGlobalState({ ...this.globalState, apps: this.apps });
    registerMicroApps(this.apps as RegistrableApp<{}>[], this.lifeCycles);
    setDefaultMountApp(this.defaultMount);
  }

  start(options?: FrameworkConfiguration): void {
    start(options);
    this.render();
  }

  private render(): void {
    ReactDOM.render(
      <GlobalLayout globalProps={this.actions}>{this.root}</GlobalLayout>,
      document.getElementById(this.containerId)
    );
  }
}

export default MasterApplication;
