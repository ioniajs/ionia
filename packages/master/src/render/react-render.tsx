import * as React from "react";
import * as ReactDOM from "react-dom";

/**
 * 渲染子应用
 */
function Render(props: any) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="slave-loading">Loading...</h4>}
      <div id="slave-container" />
    </>
  );
}

export default function render({ loading }: { loading: boolean }) {
  const container = document.getElementById("slave-container");
  ReactDOM.render(<Render loading={loading} />, container);
}
