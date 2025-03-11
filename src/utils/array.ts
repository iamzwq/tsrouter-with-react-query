/**
 * 对象数组去重策略
 */
const enum UniqueStrategy {
  /** 保留第一个出现的元素 */
  KEEP_FIRST = 'keepFirst',
  /** 保留最后一个出现的元素 */
  KEEP_LAST = 'keepLast',
  /** 合并重复项 */
  MERGE = 'merge',
}

interface UniqueOptions<T> {
  /** 用于确定唯一性的键或键生成函数 */
  key: keyof T | ((item: T) => string);
  /** 去重策略 */
  strategy?: UniqueStrategy;
  /** 当策略为MERGE时的合并函数 */
  mergeFunction?: (existing: T, newItem: T) => T;
}

/**
 * 对象数组去重
 * @param array 需要去重的对象数组
 * @param options 去重选项
 * @returns 去重后的数组
 * @example
 * // 基本用法 - 按id去重，保留第一个出现的元素
 * const uniqueUsers = uniqueObjectArray(users, { key: 'id' });
 *
 * // 使用自定义键生成函数
 * const uniqueByNameAndAge = uniqueObjectArray(users, {
 *   key: user => `${user.name}-${user.age}`
 * });
 *
 * // 保留最后一个出现的元素
 * const uniqueKeepLast = uniqueObjectArray(users, {
 *   key: 'id',
 *   strategy: UniqueStrategy.KEEP_LAST
 * });
 *
 * // 合并重复项
 * const mergedUsers = uniqueObjectArray(users, {
 *   key: 'id',
 *   strategy: UniqueStrategy.MERGE,
 *   mergeFunction: (existing, newItem) => ({
 *     ...existing,
 *     ...newItem,
 *     visits: (existing.visits || 0) + (newItem.visits || 0)
 *   })
 * });
 */
export function uniqueObjectArray<T extends object>(array: T[], options: UniqueOptions<T>): T[] {
  const { key, strategy = UniqueStrategy.KEEP_FIRST, mergeFunction } = options;

  const getKey = typeof key === 'function' ? key : (item: T) => String(item[key]);

  const map = new Map<string, T>();

  for (const item of array) {
    const itemKey = getKey(item);

    switch (strategy) {
      case UniqueStrategy.KEEP_FIRST:
        if (!map.has(itemKey)) {
          map.set(itemKey, item);
        }
        break;

      case UniqueStrategy.KEEP_LAST:
        map.set(itemKey, item);
        break;

      case UniqueStrategy.MERGE:
        if (map.has(itemKey) && mergeFunction) {
          const existingItem = map.get(itemKey)!;
          map.set(itemKey, mergeFunction(existingItem, item));
        } else {
          map.set(itemKey, item);
        }
        break;
    }
  }

  return Array.from(map.values());
}
