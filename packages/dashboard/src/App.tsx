import * as React from "react";
import { hot } from "react-hot-loader/root";

interface AppProps {
  name: string;
}

const App = (props: AppProps) => {
  const { name } = props;
  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
};

export default hot(App);
