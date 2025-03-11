declare global {
  type Option = {
    label: string;
    value: string | number;
  };

  type SortDirection = 'asc' | 'desc';

  type ObjectToEnum<T> = T[keyof T] extends string | number ? T[keyof T] : never;
}
