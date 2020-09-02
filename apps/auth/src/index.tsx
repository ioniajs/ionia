import { Application } from "@ionia/libs";
import * as React from "react";
import App from "./App";

const app = new Application(<App />);

app.start();

export async function bootstrap() {
  await app.bootstrap();
}

export async function mount(props: any) {
  await app.mount(props);
}

export async function unmount(props: any) {
  await app.unmount(props);
}
