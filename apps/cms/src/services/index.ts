import { HttpService, container } from "@ionia/libs";
import { UserService } from "./user.service";

export * from "./user.service";

export const initServices = () => {
  container.bind(HttpService).to(HttpService);
  container.bind(UserService).to(UserService);
};
