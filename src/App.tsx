import InfiniteScroll from "react-infinite-scroll-component";
import { Card, Loader } from "./components";
import { useGetCharacters } from "./hooks/useGetCharacters";

const App = () => {
  const { characters, error, fetchNextPage, hasNextPage, status } =
    useGetCharacters();

  if (status === "error") return <h4>Ups!, {`${error}` as string}</h4>;

  return (
    <main className="w-screen min-h-screen bg-darkBackground text-light flex flex-col justify-center">
      <h1 className="text-center w-full  py-7 text-3xl md:text-5xl">
        Infinite Scroll
      </h1>
      <InfiniteScroll
        dataLength={characters ? characters.results.length : 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Loader />}
      >
        <div className="w-full gap-2 sm:gap-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {characters?.results.map((character) => (
            <Card
              key={character.id}
              created={character.created}
              id={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              location={character.location}
            />
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
};

export default App;
