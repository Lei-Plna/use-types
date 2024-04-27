/**
 * modify the object to be readonly
 * @example
 * type A = {
 *  a: number;
 *  b: string;
 * }
 *
 * type B = toReadonly<A>
 * => B = {
 *     readonly a: number;
 *     readonly b: string;
 *    }
 */
export type toReadonly<T extends Record<PropertyKey, any>> = {
  readonly [K in keyof T]: T[K];
};

/**
 * modify the object to be writable
 * @example
 * type A = {
 *  readonly a: number;
 *  readonly b: string;
 * }
 * type B = toWritable<A>
 * => B = {
 *      a: number;
 *      b: string;
 *    }
 */
export type toWritable<T extends Record<PropertyKey, any>> = {
  -readonly [K in keyof T]: T[K];
};

/**
 * filter the object by value type
 * @example
 * type A = {
 *  a: number;
 *  b: string;
 *  c: number;
 * }
 * type B = toFilterByValueType<A, number>
 * => B = {
 *     a: number;
 *     c: number;
 *    }
 */
export type toFilterByValueType<T extends Record<PropertyKey, any>, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
};

/**
 * Define a tuple generic type
 * @example
 * type A = Tuple<number, 3>
 * => A = [number, number, number]
 */
export type Tuple<
  T,
  N extends number,
  R extends T[] = []
> = R['length'] extends N ? R : Tuple<T, N, [T, ...R]>;
