import React from "react";
import context from "./context";
import checkRole from "./hasPermission";

const useAccess = () => {
  const { permissions, resources, isLoaded, define } = React.useContext(
    context
  );

  const can = (role: any, opts = {}) => {
    return React.useMemo(() => checkRole(permissions, resources, role, opts), [
      permissions,
      role,
      opts,
    ]);
  };

  return { isLoaded, can, define };
};

export default useAccess;
