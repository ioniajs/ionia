import { setupWorker } from "msw";
import hero from "./hero";

export default setupWorker(...hero);
