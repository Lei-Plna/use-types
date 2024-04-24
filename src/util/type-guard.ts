/**
 * Check if the value is an instance of the class
 * @param value The value to check
 * @param Class The class to check against
 * @returns
 */
export function isInstanceOf<T>(
  value: unknown,
  Class: abstract new (...args: unknown[]) => T
): value is T {
  return value instanceof Class;
}
