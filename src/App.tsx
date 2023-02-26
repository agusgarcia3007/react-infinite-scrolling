import InfiniteScroll from "react-infinite-scroll-component";
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
        <ul>
          {characters &&
            characters.results.map((character) => (
              <li key={character.id}>
                <p>{character.name}</p>
                <time>{new Date(character.created).toDateString()}</time>
              </li>
            ))}
        </ul>
      </InfiniteScroll>
    </main>
  );
};

export default App;
