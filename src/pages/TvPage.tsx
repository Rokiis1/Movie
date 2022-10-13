import { useState } from "react";
import Card from "../components/ShowCard";
import { usePaginatedFetchShows } from "../hooks/usePaginatedFetchShows";

const TvPage = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = usePaginatedFetchShows(page);
  console.log(data);
  if (isLoading) {
    return <div>Laoding</div>;
  }

  return (
    <section>
      <div>
        {data?.map((show) => (
          <Card {...show} key={show.id} />
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

export default TvPage;
