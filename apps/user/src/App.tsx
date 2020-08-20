import { Auth } from "@ionia/components";
import * as React from "react";
import { hot } from "react-hot-loader/root";

const { Show, useAccess } = Auth;

const App: React.FC = () => {
  const { can, define } = useAccess();

  React.useEffect(() => {
    define({
      permissions: {
        "users:read": true,
        "users:write": false,
      },
    });
  }, []);

  const userCanWrite = can("users:write");

  return (
    <div>
      {userCanWrite && <div>User actions</div>}
      <Show when="users:read" fallback={<div>oops no access</div>}>
        <div>User list</div>
      </Show>
    </div>
  );
};

export default hot(App);
