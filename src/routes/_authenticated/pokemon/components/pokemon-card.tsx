import { Link } from '@tanstack/react-router';
import { typeColors } from '~/constants/pokemon.constant';
import type { BasicPokemon } from '~/types/pokemon.interface';

export function PokemonCard({ pokemon }: { pokemon: BasicPokemon }) {
  return (
    <div className='className="bg-red-50 hover:shadow-xl" transform overflow-hidden rounded-xl shadow-lg transition-all hover:scale-105'>
      <Link to="/pokemon/$id" params={{ id: pokemon.name }}>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="h-44 w-full cursor-pointer bg-red-100 object-contain p-4"
        />
      </Link>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-red-900 capitalize">{pokemon.name}</h2>
          <span className="font-medium text-red-700">#{pokemon.id}</span>
        </div>
        <div className="flex gap-2">
          {pokemon.types.map(type => (
            <span key={type} className={`${typeColors[type]} rounded-full px-3 py-1 text-sm text-white capitalize`}>
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
