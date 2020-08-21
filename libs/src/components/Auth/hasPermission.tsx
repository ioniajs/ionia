import get from "lodash/get";

const checkResource = (resources: any, role: any, id: any) => {
  // TODO: This assumes the role is in the form of <entityType>:<action> which wont always be the case...
  const entity = role.split(":")[0];

  return !!get(resources, [entity, id]);
};

const checkPermission = (permissions: any, role: any) => {
  return !!get(permissions, role);
};

const hasPermission = (
  permissions = {},
  resources: any,
  roles = [],
  additional: any
) => {
  const isArrayOfRoles = Array.isArray(roles);

  if (!!additional.resource) {
    const hasResourceAccess = !isArrayOfRoles
      ? checkResource(resources, roles, additional.resource)
      : roles.every((role) =>
          checkResource(resources, role, additional.resource)
        );

    if (!hasResourceAccess) {
      return false;
    }
  }

  const isAllowed = !isArrayOfRoles
    ? checkPermission(permissions, roles)
    : roles.every((role) => checkPermission(permissions, role));

  return isAllowed;
};

export default hasPermission;
