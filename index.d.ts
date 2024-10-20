/**
 * Represents the `Context` of the function including `Request` and `Response` handlers,
 * along with logging capabilities.
 */
export declare type RuntimeContext = {
  /** The incoming request object. */
  req: RuntimeRequest;

  /** The response object providing methods to end the request. */
  res: RuntimeResponse;

  /**
   * Log messages during function execution.
   *
   * @param messages - The messages or object to log. Objects are converted to strings.
   */
  log: (...messages: any) => void;

  /**
   * Log error messages or object during function execution.
   *
   * @param messages - The error messages or object to log. Objects are converted to strings.
   */
  error: (...messages: any) => void;
};

/**
 * Represents an HTTP request received by the function.
 */
export declare type RuntimeRequest = {
  /**
   * The raw body of the request as a string.
   * @deprecated Use `bodyText` on `1.6.x`.
   */
  bodyRaw: string;

  /** The raw body of the request as a string. */
  bodyText: string;

  /** The parsed body of the request, which is a JSON object. */
  bodyJson: Record<string, string>;

  /** The binary body of the request. */
  bodyBinary: any;

  /** A key-value pair of the headers included in the request. */
  headers: Record<string, string>;

  /** The HTTP method of the request (e.g., GET, POST). */
  method: string;

  /** The function domain host. */
  host: string;

  /** The scheme of the request (e.g., http, https). */
  scheme: string;

  /** A key-value pair representing the query parameters of the request. */
  query: Record<string, string>;

  /** The raw query string part of the URL of the request. */
  queryString: string;

  /**
   * The port number as a string.
   *
   * Should be a number but server.js uses quotes around port so, it is a string.
   */
  port: string;

  /** The full URL of the request. */
  url: string;

  /** The path component of the URL (excluding query string). */
  path: string;
};

/**
 * Represents the response that is used to sent back an output back to the client.
 */
export declare type RuntimeResponse = {
  /**
   * Sends an empty response.
   *
   * @returns RuntimeOutput
   */
  empty: () => RuntimeOutput;

  /**
   * Sends a response with a specified body, status code, and headers.
   *
   * @param body - The body of the response.
   * @param statusCode - The HTTP status code (default 200).
   * @param headers - A key-value pair of response headers (default empty).
   * @returns RuntimeOutput
   *
   * @deprecated Use `text` instead.
   */
  send: (
    body: string,
    statusCode?: number,
    headers?: Record<string, string>,
  ) => RuntimeOutput;

  /**
   * Sends a response with a specified body, status code, and headers.
   *
   * @param body - The body of the response.
   * @param statusCode - The HTTP status code (default 200).
   * @param headers - A key-value pair of response headers (default empty).
   * @returns RuntimeOutput
   */
  text: (
    body: string,
    statusCode?: number,
    headers?: Record<string, string>,
  ) => RuntimeOutput;

  /**
   * Sends a JSON response with a specified object, status code, and headers.
   *
   * @param object - The JSON object to send.
   * @param statusCode - The HTTP status code (default 200).
   * @param headers - A key-value pair of response headers (default empty).
   * @returns RuntimeOutput
   */
  json: (
    object: any,
    statusCode?: number,
    headers?: Record<string, string>,
  ) => RuntimeOutput;

  /**
   * Sends a binary response with a provided file content, status code, and headers.
   *
   * @param bytes - The file content.
   * @param statusCode - The HTTP status code (default 200).
   * @param headers - A key-value pair of response headers (default empty).
   * @returns RuntimeOutput
   */
  binary: (
    bytes: any,
    statusCode?: number,
    headers?: Record<string, string>,
  ) => RuntimeOutput;

  /**
   * Redirects the client to a specified URL with a status code and headers.
   *
   * @param url - The URL to redirect to.
   * @param statusCode - The HTTP status code for redirection (default 301).
   * @param headers - A key-value pair of response headers (default empty).
   * @returns RuntimeOutput
   */
  redirect: (
    url: string,
    statusCode?: number,
    headers?: Record<string, string>,
  ) => void;
};

/**
 * Represents the response output to be sent back to the client.
 */
export declare type RuntimeOutput = {
  /**
   * The body that will be sent back to Appwrite.
   * Can be a `string`, `Buffer` or an object based on what method you use.
   */
  body: any | string;

  /**
   * The HTTP status code.
   */
  statusCode: number;

  /**
   * A key-value pair of response headers.
   */
  headers: Record<string, string>;
};
