import container from "../core/container";
import { interfaces } from "inversify";

export const useService = <T>(token: interfaces.ServiceIdentifier<T>) => {
  return container.get<T>(token);
};
