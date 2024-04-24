/**
 * Check if the value is an instance of the class
 * @param value The value to check
 * @param Class The class to check against
 * @returns
 * 
 * @example
 * class A {}
 * const a = new A();
 * isInstanceOf(a, A) => true
 */
export function isInstanceOf<T>(
  value: unknown,
  Class: abstract new (...args: unknown[]) => T
): value is T {
  return value instanceof Class;
}

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
}

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
}

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
  [K in keyof T as T[K] extends V ? K : never]: T[K]
}