import { Tuple } from './types';

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
 * Check if the value is a tuple
 * @param value
 * @param length
 * @returns
 *
 * @example
 * isTuple([1, 2, 3], 3) => [number, number, number]
 * isTuple([1, 2, 3], 2) => false
 */
export function isTuple<T, R extends number>(
  value: T[],
  length: R
): value is Tuple<T, R> {
  return Array.isArray(value) && value.length === length;
}
