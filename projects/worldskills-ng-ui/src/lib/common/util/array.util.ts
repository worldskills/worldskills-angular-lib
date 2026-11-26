/**
 * Utility class for array operations with type safety and performance optimizations
 */
export class ArrayUtil {
  
  /**
   * Pushes all items from the second array into the first array.
   * This method mutates the first array and triggers UI updates (unlike concat).
   * @param first - The target array to push items into
   * @param second - The source array to push items from
   * @returns The modified first array
   */
  static pushMany<T>(first: T[], second: T[]): T[] {
    if (!Array.isArray(first) || !Array.isArray(second)) {
      throw new Error('Both parameters must be arrays');
    }
    
    // Use spread operator for better performance with large arrays
    if (second.length > 0) {
      first.push(...second);
    }
    return first;
  }

  /**
   * Removes duplicate primitive values from an array using Set for O(n) performance.
   * @param arr - The array to deduplicate
   * @returns A new array with unique values only
   */
  static dedupePrimitive<T>(arr: T[]): T[] {
    if (!Array.isArray(arr)) {
      throw new Error('Parameter must be an array');
    }
    
    return [...new Set(arr)];
  }

  /**
   * Removes duplicate objects from an array based on a key selector function.
   * @param arr - The array to deduplicate
   * @param keySelector - Function to extract the key for comparison
   * @returns A new array with unique objects based on the key
   */
  static dedupeByKey<T, K>(arr: T[], keySelector: (item: T) => K): T[] {
    if (!Array.isArray(arr)) {
      throw new Error('First parameter must be an array');
    }
    
    const seen = new Set<K>();
    return arr.filter(item => {
      const key = keySelector(item);
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  /**
   * Checks if the given object is an array.
   * @param obj - The object to check
   * @returns True if the object is an array, false otherwise
   */
  static isArray(obj: unknown): obj is unknown[] {
    return Array.isArray(obj);
  }

  /**
   * Flattens an array of objects with optional children properties.
   * Supports recursive flattening of nested structures.
   * @param entities - Array of objects that may contain children
   * @param recursive - Whether to recursively flatten nested children (default: false)
   * @returns Flattened array containing all entities and their children
   */
  static flatten<T extends { children?: T[] }>(entities: T[], recursive: boolean = false): T[] {
    if (!Array.isArray(entities)) {
      throw new Error('Parameter must be an array');
    }

    const result: T[] = [];
    
    for (const entity of entities) {
      result.push(entity);
      
      if (entity.children && Array.isArray(entity.children)) {
        if (recursive) {
          result.push(...this.flatten(entity.children, true));
        } else {
          result.push(...entity.children);
        }
      }
    }
    
    return result;
  }

  /**
   * Splits an array into chunks of specified size.
   * @param arr - The array to chunk
   * @param size - The size of each chunk
   * @returns Array of chunks
   */
  static chunk<T>(arr: T[], size: number): T[][] {
    if (!Array.isArray(arr)) {
      throw new Error('First parameter must be an array');
    }
    
    if (size <= 0) {
      throw new Error('Chunk size must be greater than 0');
    }
    
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    
    return chunks;
  }

  /**
   * Groups array elements by a key selector function.
   * @param arr - The array to group
   * @param keySelector - Function to extract the grouping key
   * @returns Object with keys as group identifiers and values as arrays of grouped items
   */
  static groupBy<T, K extends string | number | symbol>(
    arr: T[], 
    keySelector: (item: T) => K
  ): Record<K, T[]> {
    if (!Array.isArray(arr)) {
      throw new Error('First parameter must be an array');
    }
    
    return arr.reduce((groups, item) => {
      const key = keySelector(item);
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
      return groups;
    }, {} as Record<K, T[]>);
  }

  /**
   * Finds the intersection of two arrays (elements present in both).
   * @param arr1 - First array
   * @param arr2 - Second array
   * @returns Array containing elements present in both arrays
   */
  static intersection<T>(arr1: T[], arr2: T[]): T[] {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      throw new Error('Both parameters must be arrays');
    }
    
    const set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
  }

  /**
   * Finds the difference between two arrays (elements in first but not in second).
   * @param arr1 - First array
   * @param arr2 - Second array
   * @returns Array containing elements in arr1 but not in arr2
   */
  static difference<T>(arr1: T[], arr2: T[]): T[] {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      throw new Error('Both parameters must be arrays');
    }
    
    const set2 = new Set(arr2);
    return arr1.filter(item => !set2.has(item));
  }

  /**
   * Checks if an array is empty or null/undefined.
   * @param arr - The array to check
   * @returns True if array is empty, null, or undefined
   */
  static isEmpty(arr: unknown[] | null | undefined): boolean {
    return !arr || arr.length === 0;
  }

  /**
   * Safely gets an element at the specified index, returning undefined for out-of-bounds access.
   * @param arr - The array to access
   * @param index - The index to access
   * @returns The element at the index or undefined if out of bounds
   */
  static safeGet<T>(arr: T[], index: number): T | undefined {
    if (!Array.isArray(arr)) {
      return undefined;
    }
    
    return index >= 0 && index < arr.length ? arr[index] : undefined;
  }

  /**
   * Moves an element from one index to another in an array.
   * @param arr - The array to modify
   * @param fromIndex - The source index
   * @param toIndex - The destination index
   * @returns A new array with the element moved
   */
  static move<T>(arr: T[], fromIndex: number, toIndex: number): T[] {
    if (!Array.isArray(arr)) {
      throw new Error('First parameter must be an array');
    }
    
    if (fromIndex < 0 || fromIndex >= arr.length || toIndex < 0 || toIndex >= arr.length) {
      throw new Error('Indices must be within array bounds');
    }
    
    const newArr = [...arr];
    const [element] = newArr.splice(fromIndex, 1);
    newArr.splice(toIndex, 0, element);
    return newArr;
  }
}
