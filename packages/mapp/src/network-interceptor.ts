export interface InterceptRequest {
  /**
   * 请求的 url
   */
  readonly url: string;

  /**
   * 请求方法
   */
  readonly method: string;

  /**
   * 请求报头
   * 唯一支持写的属性
   */
  readonly headers: Headers;

  /**
   * 请求主体. 这个无法靠谱的获取, 不要依赖这个数据
   */
  readonly body: any;
}

export interface InterceptResponse {
  /**
   * 响应报头
   */
  readonly headers: Headers;

  /**
   * 响应状态
   */
  readonly status: number;

  readonly statusText: string;

  /**
   * 响应内容
   */
  readonly body: any;
}

export type INetworkInterceptorRegister = (
  request: InterceptRequest,
  next: () => Promise<InterceptResponse>
) => Promise<void>;

/**
 * 网络请求拦截器，可以拦截 ajax/fetch 请求，但是不推荐干预请求和响应结果
 */
export interface INetworkInterceptor {
  /**
   * 注册拦截器
   * @param request 请求内容
   * @param next 发起请求并返回响应，如果请求错误会抛出异常
   */
  register(interceptor: INetworkInterceptorRegister): void;

  /**
   * 清除注册器
   */
  clean(): void;
}
