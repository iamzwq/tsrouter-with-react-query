interface HeaderItem {
  key: string;
  label: string;
}

type FormatterFunction = (value: any, row: Record<string, any>) => string;

interface Options {
  data: Record<string, any>[];
  header: HeaderItem[];
  formatters?: Record<string, FormatterFunction>;
  withBom?: boolean;
  delimiter?: string;
  filename?: string;
  // 新增配置项
  quoteStrings?: boolean;
  escapeSpecialChars?: boolean;
  newLine?: string;
  transformHeader?: (header: string) => string;
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
 * @param options.quoteStrings 是否对所有字符串使用引号，默认为 false
 * @param options.escapeSpecialChars 是否转义特殊字符，默认为 true
 * @param options.newLine 换行符，默认为 \n
 */
export function json2csv({
  data,
  header,
  formatters = {},
  withBom = true,
  delimiter = ',',
  filename = 'export.csv',
  quoteStrings = false,
  escapeSpecialChars = true,
  newLine = '\n',
}: Options) {
  if (!Array.isArray(data) || data.length === 0 || header.length === 0) {
    return '';
  }

  // 获取数据的键
  const keys = header.map(h => h.key);

  // 创建 CSV 头行
  const headerRow = header.map(h => formatValue(h.label, quoteStrings, escapeSpecialChars, delimiter));

  // 处理每一行数据
  const rows = data.map(item => {
    return keys.map(key => {
      let value = item[key];

      if (formatters[key]) {
        value = formatters[key](value, item);
      }

      return formatValue(value, quoteStrings, escapeSpecialChars, delimiter);
    });
  });

  // 将每行数据连接成 CSV 字符串
  const csv = [headerRow.join(delimiter), ...rows.map(row => row.join(delimiter))].join(newLine);

  const csvContent = withBom ? '\uFEFF' + csv : csv;

  downloadCSV(csvContent, filename);
}

/**
 * 格式化单个值为 CSV 兼容的字符串
 */
function formatValue(value: any, quoteStrings: boolean, escapeSpecialChars: boolean, delimiter: string): string {
  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'string') {
    const needsQuotes =
      quoteStrings ||
      (escapeSpecialChars &&
        (value.includes(delimiter) || value.includes('"') || value.includes('\n') || value.includes('\r')));

    if (needsQuotes) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }

  if (typeof value === 'object') {
    return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
  }

  return String(value);
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
