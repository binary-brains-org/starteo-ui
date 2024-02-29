interface Parameters {
  [key: string]: string;
}

type RemoveTail<
  S extends string,
  Tail extends string,
> = S extends `${infer P}${Tail}` ? P : S;

type GetRouteParameter<S extends string> = RemoveTail<
  RemoveTail<RemoveTail<S, `/${string}`>, `-${string}`>,
  `.${string}`
>;

type RouteParameters<Route extends string> = string extends Route
  ? Parameters
  : Route extends `${string}(${string}`
    ? Parameters
    : Route extends `${string}:${infer Rest}`
      ? (GetRouteParameter<Rest> extends never
          ? Parameters
          : GetRouteParameter<Rest> extends `${infer ParamName}?`
            ? { [P in ParamName]?: string }
            : { [P in GetRouteParameter<Rest>]: string }) &
          (Rest extends `${GetRouteParameter<Rest>}${infer Next}`
            ? RouteParameters<Next>
            : unknown)
      : NonNullable<unknown>;

const paramRegexp = /(:[\p{Alpha}_]+)/gu;

class Parameterized<P extends string> {
  private params: string[] = [];

  constructor(public readonly path: P) {
    const matching = path.match(paramRegexp);
    if (matching) {
      for (const element of matching) {
        const param = element.slice(1);
        this.params.push(param);
      }
    }
  }

  gotTo(params: RouteParameters<P>): string {
    let result: string = this.path as string;
    for (const param of this.params) {
      const value: string = (params as unknown as Record<string, string>)[
        param
      ] as string;
      result = result.replace(':' + param, encodeURIComponent(value));
    }
    return result;
  }
}

export { Parameterized, type RouteParameters };
