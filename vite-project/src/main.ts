import { getAPIContent } from './api/getAPIcontent.ts'
//import { getPokemonsByFilter} from './api/getPokemonsByFilter.ts'
//import { createFilter } from './components/createFilters.ts';
//import { getAllPokemons} from './api/getAllPokemons.ts'
//import { getFilterElements } from './api/getFilterElements.ts'
import { router } from './routes.ts'

getAPIContent();
router();