interface HeaderItem {
  key: string;
  label?: string;
}

type FormatterFunction = (value: any, row: Record<string, any>) => string;

interface Options {
  data?: Record<string, any>[];
  header?: HeaderItem[];
  formatters?: Record<string, FormatterFunction>;
  withBom?: boolean;
  delimiter?: string;
  filename: string;
}

/**
 * 将 JSON 数据转换为 CSV 格式
 * @param options 转换选项
 * @param options.data 要转换的 JSON 数据数组
 * @param options.header 列配置数组，每项包含 key 和 label 属性
 * @param options.formatters 格式化函数对象，键为列名，值为格式化函数
 * @param options.withBom 是否包含 BOM 标记，用于 Excel 正确识别 UTF-8 编码
 * @param options.delimiter 分隔符，默认为逗号
 * @param options.filename 文件名
 */
export function json2csv({
  data = [],
  header = [],
  formatters = {},
  withBom = true,
  delimiter = ',',
  filename,
}: Options) {
  if (!Array.isArray(data) || data.length === 0) {
    return '';
  }

  // 如果没有提供 header，则使用第一个对象的键作为 header
  const keys = header.length > 0 ? header.map(h => h.key) : Object.keys(data[0]);

  // 创建 CSV 头行，使用 label 或 key 作为列标题
  const headerRow = header.length > 0 ? header.map(h => h.label || h.key).join(delimiter) : keys.join(delimiter);

  // 处理每一行数据
  const rows = data.map(item => {
    return keys
      .map(key => {
        let value = item[key];

        if (formatters[key]) {
          value = formatters[key](value, item);
        }

        // 处理特殊字符
        if (value === null || value === undefined) {
          return '';
        } else if (typeof value === 'string') {
          // 如果字符串包含分隔符、双引号或换行符，需要用双引号包裹
          // 并且将字符串中的双引号替换为两个双引号
          if (value.includes(delimiter) || value.includes('"') || value.includes('\n')) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        } else if (typeof value === 'object') {
          // 对象和数组转为 JSON 字符串并用双引号包裹
          return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
        }

        return String(value);
      })
      .join(delimiter);
  });

  const csv = [headerRow, ...rows].join('\n');

  const csvContent = withBom ? '\uFEFF' + csv : csv;

  downloadCSV(csvContent, filename);
}

/**
 * 下载 CSV 文件
 * @param csvContent CSV 内容
 * @param filename 文件名
 */
export function downloadCSV(csvContent: string, filename: string): void {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // 释放 URL 对象
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);
}
