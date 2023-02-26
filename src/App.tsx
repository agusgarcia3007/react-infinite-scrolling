import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./components/Card";
import { useGetCharacters } from "./hooks/useGetCharacters";

const App = () => {
  const { characters, error, fetchNextPage, hasNextPage, status } =
    useGetCharacters();

  if (status === "error") return <h4>Ups!, {`${error}` as string}</h4>;

  return (
    <main className="container">
      <h1>Infinite Scroll</h1>
      <InfiniteScroll
        dataLength={characters ? characters.results.length : 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<p>Loading...</p>}
      >
        <div className="characters">
          {characters &&
            characters.results.map((character) => (
              <Card
                key={character.id}
                created={character.created}
                id={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
        </div>
      </InfiniteScroll>
    </main>
  );
};

export default App;
