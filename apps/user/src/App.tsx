import { Auth, useGlobalStore } from "@ionia/libs";
import { useMount } from "ahooks";
import { Button } from "antd";
import * as React from "react";
import { hot } from "react-hot-loader/root";

const { Show, useAccess } = Auth;

const App: React.FC = () => {
  const { can, define } = useAccess();
  const globalStore = useGlobalStore();

  useMount(() => {
    define({
      permissions: {
        "users:read": true,
        "users:write": false,
      },
    });
  });

  const userCanWrite = can("users:write");

  return (
    <div>
      <h1>{globalStore?.state?.title}</h1>
      {userCanWrite && <div>User actions</div>}
      <Show when="users:read" fallback={<div>oops no access</div>}>
        <div>User list</div>
        <Button
          type="primary"
          onClick={() => globalStore.actions?.setGlobalState({ title: "User" })}
        >
          Change title
        </Button>
      </Show>
    </div>
  );
};

export default hot(App);
