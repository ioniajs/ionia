import { container } from "@ionia/libs";
import { UserService } from "./user.service";

export * from "./user.service";

export const initServices = () => {
  container.bind(UserService).to(UserService);
};
