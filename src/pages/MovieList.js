import { useFetch } from "../hooks"
import { Card } from "../components";
import { useTitle } from "../hooks";


export const MovieList = ({apiPath, title}) => {

  const {data: movies} = useFetch(apiPath)
  
  const pageTitle = useTitle(title)


  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap gap-5 other:justify-evenly">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}

export default MovieList