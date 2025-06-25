import { keepPreviousData, queryOptions, useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { getPokemons } from '~/apis/pokemon/pokemon.api';
import { FullscreenSpinner } from '~/components/fullscreen-spinner';
import { useDelayLoading } from '~/hooks';
import type { Pagination } from '~/types/common.interface';
import { PokemonCard } from './components/pokemon-card';
import { PokemonPagination } from './components/pokemon-pagination';

const searchSchema = z.object({
  page: z.number().default(1),
  limit: z.number().default(12),
});

const getPokemonsQueryOptions = (pagination: Pagination) =>
  queryOptions({
    queryKey: ['pokemons', pagination],
    queryFn: () => getPokemons(pagination),
    placeholderData: keepPreviousData,
  });

export const Route = createFileRoute('/_authenticated/pokemon/')<{
  search?: z.infer<typeof searchSchema>;
}>({
  component: RouteComponent,
  validateSearch: (search: Pagination) => searchSchema.parse(search),
  loaderDeps: opts => opts.search,
  loader({ context: { queryClient }, deps }) {
    queryClient.ensureQueryData(getPokemonsQueryOptions(deps));
  },
  head: () => ({
    meta: [{ title: '宝可梦列表' }],
  }),
});

function RouteComponent() {
  const { data, isFetching } = useQuery(getPokemonsQueryOptions(Route.useSearch()));

  const isFetchingDelay = useDelayLoading(isFetching, 2000);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </div>
      <PokemonPagination total={data?.total || 0} />
      {isFetchingDelay && <FullscreenSpinner />}
    </>
  );
}
