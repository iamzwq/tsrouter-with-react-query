export interface Pagination {
  page?: number;
  limit?: number;
}

declare global {
  type SortDirection = 'asc' | 'desc';

  type ObjectToEnum<T> = T[keyof T] extends string | number ? T[keyof T] : never;
}
