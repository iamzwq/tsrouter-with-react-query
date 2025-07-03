import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { useMatches } from '@tanstack/react-router';

export function Breadcrumb() {
  const matches = useMatches();

  // 过滤掉根路由和没有标题的路由
  const breadcrumbItems = matches
    .filter(match => match.fullPath !== '/' && match.meta?.[0]?.title)
    .map(match => ({
      id: match.id,
      fullPath: match.fullPath,
      meta: match.meta,
    }));

  // 如果没有面包屑项，则不显示面包屑
  if (breadcrumbItems.length === 0) {
    return null;
  }

  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {/* 首页链接 */}
      <Link to="/" className="hover:text-primary-600 flex items-center text-gray-600 hover:underline">
        首页
      </Link>

      {/* 面包屑项 */}
      {breadcrumbItems.map((item, index) => {
        const isLast = index === breadcrumbItems.length - 1;

        return isLast ? (
          // 最后一项不可点击
          <Typography key={item.id} color="text.primary" className="flex items-center">
            {item.meta?.[0]?.title}
          </Typography>
        ) : (
          // 中间项可点击
          <Link
            key={item.id}
            to={item.fullPath as unknown as any}
            className="hover:text-primary-600 flex items-center text-gray-600 hover:underline"
          >
            {item.meta?.[0]?.title}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
