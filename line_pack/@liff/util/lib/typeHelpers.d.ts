export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
