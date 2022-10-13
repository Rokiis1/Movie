import { useState } from "react";
import Card from "../components/MovieCard";
import { usePaginatedFetchMovies } from "../hooks/usePaginatedFetchMovies";

const HomePage = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = usePaginatedFetchMovies(page);
  if (isLoading) {
    return <div>Laoding</div>;
  }
  return (
    <section>
      <div>
        {data?.map((movie) => (
          <Card {...movie} key={movie.id} />
        ))}
      </div>
      <div>
        <button
          type="button"
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 1 ? true : false}
        >
          Prev
        </button>
        <p>{page}</p>
        <button
          type="button"
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={false}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default HomePage;
