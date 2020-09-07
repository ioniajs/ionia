import { setupWorker } from "msw";
import user from "./user";

export default setupWorker(...user);
