import { injectable } from "inversify";
import { extend, RequestMethod } from "umi-request";
import {
  OnionMiddleware,
  OnionOptions,
  RequestOptionsInit,
  RequestOptionsWithResponse,
} from "umi-request/types";

@injectable()
export class HttpService {
  protected client: RequestMethod<false>;

  constructor() {
    this.client = extend({
      prefix: "/api",
      timeout: 10000,
      headers: {},
      errorHandler: (error) => {
        console.error(error);
        throw error;
      },
    });
  }

  async get(url: string, options?: RequestOptionsWithResponse): Promise<any>;
  async get(
    url: string,
    options?: RequestOptionsInit | undefined
  ): Promise<any> {
    return await this.client.get(url, options);
  }

  async post(url: string, options?: RequestOptionsWithResponse): Promise<any>;
  async post(
    url: string,
    options?: RequestOptionsInit | undefined
  ): Promise<any> {
    return await this.client.post(url, options);
  }

  async put(url: string, options?: RequestOptionsWithResponse): Promise<any>;
  async put(
    url: string,
    options?: RequestOptionsInit | undefined
  ): Promise<any> {
    return await this.client.put(url, options);
  }

  async delete(url: string, options?: RequestOptionsWithResponse): Promise<any>;
  async delete(
    url: string,
    options?: RequestOptionsInit | undefined
  ): Promise<any> {
    return await this.client.delete(url, options);
  }

  async patch(url: string, options?: RequestOptionsWithResponse): Promise<any>;
  async patch(
    url: string,
    options?: RequestOptionsInit | undefined
  ): Promise<any> {
    return await this.client.patch(url, options);
  }

  async head(url: string, options?: RequestOptionsWithResponse): Promise<any>;
  async head(
    url: string,
    options?: RequestOptionsInit | undefined
  ): Promise<any> {
    return await this.client.head(url, options);
  }

  async options(
    url: string,
    options?: RequestOptionsWithResponse
  ): Promise<any>;
  async options(
    url: string,
    options?: RequestOptionsInit | undefined
  ): Promise<any> {
    return await this.client.options(url, options);
  }

  use(handler: OnionMiddleware, options?: OnionOptions | undefined): void {
    this.client.use(handler, options);
  }

  fork(): HttpService {
    return new HttpService();
  }
}
