import { Container } from "inversify";
import { HttpService } from "../services";

const container = new Container();

container.bind(HttpService).to(HttpService);

export default container;
