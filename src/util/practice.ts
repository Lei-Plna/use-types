/**
 * Get the generic type of a promise
 * same to other types
 */
export type getPromiseGeneric<T> = T extends Promise<infer Generic>
  ? Generic
  : never;

/**
 * Get the First type of an any type's array
 */
export type GetArrayFirst<T> = T extends [infer First, ...unknown[]]
  ? First
  : never;
