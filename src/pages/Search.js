import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks"
import { Card } from "../components";

import { useTitle } from "../hooks";


function Search({apiPath}) {
  const [SearchParams] = useSearchParams();
  const queryTerm = SearchParams.get("q")
  const {data:movies} = useFetch(apiPath, queryTerm) 

  
  useTitle(`Search result for ${queryTerm}`)

  return (

    <main>
      <section >
          <p className="text-3xl text-grey-700 dark:text-white">{movies.length === 0 ? `No result found for ${queryTerm}` : `Result for ${queryTerm}`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap gap-5">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}

export default Search