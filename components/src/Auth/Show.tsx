import React from "react";
import useAccess from "./useAccess";

const Show = ({ when, resource, fallback, children, ...rest }: any) => {
  const { hasPermission } = useAccess();

  const show = hasPermission(when, { resource });

  if (show) {
    return React.Children.map(children, (child) =>
      React.cloneElement(child, rest)
    );
  }

  return fallback || null;
};

export default Show;
