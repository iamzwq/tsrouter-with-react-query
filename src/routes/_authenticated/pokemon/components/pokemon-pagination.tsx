import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getRouteApi } from '@tanstack/react-router';
import type { Pagination } from '~/modules/common/common.interface';

const routeApi = getRouteApi('/_authenticated/pokemon/');

export function PokemonPagination({ total }: { total: number }) {
  const { page = 1 } = routeApi.useSearch() as Pagination;
  const navigate = routeApi.useNavigate();
  return (
    <div className="flex items-center justify-center">
      <button
        disabled={page <= 1}
        className="flex cursor-pointer items-center rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => {
          if (page > 1) {
            navigate({ search: { page: page - 1 } });
          }
        }}
      >
        <ArrowBackIosIcon /> 前一页
      </button>
      <div className="mx-4">
        {page} / {total}
      </div>
      <button
        disabled={page >= total}
        className="flex cursor-pointer items-center rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => {
          if (page < total) {
            navigate({ search: { page: page + 1 } });
          }
        }}
      >
        后一页 <ArrowForwardIosIcon />
      </button>
    </div>
  );
}
